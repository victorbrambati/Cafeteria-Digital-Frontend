import create from "zustand";
import { persist } from "zustand/middleware";
import { coffeeProducts, CoffeeProductType } from "../data/products";

export interface Config {
  token: string;
  userInfo: { id: number; email: string };
  signUpSuccess?: boolean;
  signIn: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
}

export const useAuth = create<Config>((set, get) => ({
  token: "",
  userInfo: { id: NaN, email: "" },
  signUpSuccess: undefined,
  signIn: (email, password) => {
    fetch("http://localhost:8000/login", {
      mode: "cors",
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data: { access_token: string }) => {
        if (data.access_token) {
          set({ token: data.access_token });

          fetch("http://localhost:8000/me", {
            mode: "cors",
            method: "GET", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${get().token}`,
            },
          })
            .then((response) => response.json())
            .then((data: { id: number; email: string }) => {
              set({ userInfo: data });
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },
  signUp: (email, password) => {
    fetch("http://localhost:8000/user", {
      mode: "cors",
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data: string) => {
        set({ signUpSuccess: true });
      })
      .catch((error) => {
        console.error("Error:", error);
        set({ signUpSuccess: false });
      });
  },
}));
