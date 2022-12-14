import create from "zustand";
import { persist } from "zustand/middleware";
import { coffeeProducts, CoffeeProductType } from "../data/products";

export interface Config {
  cart: CoffeeProductType[];
  totalProducts: number;
  totalPrice: number;
  addToCart: (coffee: CoffeeProductType) => void;
  removeToCart: (coffee: CoffeeProductType) => void;
  resetCart: () => void;
}

export const useCartStore = create(
  persist<Config>(
    (set, get) => ({
      cart: [],
      totalProducts: 0,
      totalPrice: 0,
      addToCart: (coffee) => {
        const newCart = get().cart;
        const findCart = newCart.find(
          (cartCoffee) => cartCoffee.id === coffee.id
        );

        if (findCart) {
          const indexOfCoffee = newCart.findIndex(
            (cartCoffee) => cartCoffee.id === coffee.id
          );
          newCart[indexOfCoffee].quantity++;
          set({
            cart: [...newCart],
            totalProducts: get().totalProducts + 1,
            totalPrice: get().totalPrice + newCart[indexOfCoffee].price,
          });
        } else if (!findCart) {
          const newCoffe = { ...coffee };
          newCoffe.quantity++;
          set({
            cart: [...get().cart, newCoffe],
            totalProducts: get().totalProducts + 1,
            totalPrice: get().totalPrice + coffee.price,
          });
        }
      },
      removeToCart: (coffee) => {
        const newCart = get().cart;
        const findCart = newCart.find(
          (cartCoffee) => cartCoffee.id === coffee.id
        );

        if (findCart) {
          const indexOfCoffee = newCart.findIndex(
            (cartCoffee) => cartCoffee.id === coffee.id
          );
          if (newCart[indexOfCoffee].quantity > 1) {
            newCart[indexOfCoffee].quantity--;
            set({
              cart: [...newCart],
              totalProducts: get().totalProducts - 1,
              totalPrice: get().totalPrice - coffee.price,
            });
          } else if (newCart[indexOfCoffee].quantity === 1) {
            const removeCoffee = newCart.filter(
              (cartCoffee) => cartCoffee.id !== coffee.id
            );
            set({
              cart: [...removeCoffee],
              totalProducts: get().totalProducts - 1,
              totalPrice: get().totalPrice - coffee.price,
            });
          }
        }
      },
      resetCart: () =>
        set({ cart: <CoffeeProductType[]>[], totalPrice: 0, totalProducts: 0 }),
    }),

    {
      name: "cart-storage", // unique name
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
    }
  )
);
