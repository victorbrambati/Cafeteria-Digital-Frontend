import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Tag,
  Tooltip,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import Link from "next/link";
import { BackgroundProps } from "@chakra-ui/react";
import { useCartStore } from "../store/useCart";
import { useEffect, useState } from "react";
import multiavatar from "@multiavatar/multiavatar";
import { useAuth } from "../store/useAuth";

export default function Header({ backgroundColor }: BackgroundProps) {
  let actualTotalProducts = useCartStore((state) => state.totalProducts);

  const actualToken = useAuth((state) => state.token);
 const actualUserInfo = useAuth((state) => state.userInfo);

  const [totalProducts, setTotalProducts] = useState(actualTotalProducts);
  const [token, setToken] = useState(actualToken);
  const [userInfo, setUserInfo] = useState(actualUserInfo);
  const fontSizeHeading = useBreakpointValue({ base: "4xl", md: "5xl" });


  useEffect(() => setTotalProducts(actualTotalProducts), [actualTotalProducts]);
  useEffect(() => {setToken(actualToken), setUserInfo(actualUserInfo)}, [actualToken, actualUserInfo]);

  const REGEX = {
    whitespace: /\s+/g,
    urlHexPairs: /%[\dA-F]{2}/g,
    quotes: /"/g,
  };

  function specialHexEncode(match: string) {
    switch (match) {
      case "%20":
        return " ";
      case "%3D":
        return "=";
      case "%3A":
        return ":";
      case "%2F":
        return "/";
      default:
        return match.toLowerCase();
    }
  }

  const toDataURI = (string: string) =>
    `data:image/svg+xml,${encodeURIComponent(string)
      .trim()
      .replace(REGEX.whitespace, " ")
      .replace(REGEX.quotes, "'")
      .replace(REGEX.urlHexPairs, specialHexEncode)}`;

  const svg = toDataURI(multiavatar(String(userInfo.id)));

  return (
    <Box>
      <Stack width="100%" height="120px" backgroundColor={backgroundColor}>
        <HStack
          width="100%"
          height="100%"
          justify="space-between"
          align="center"
        >
          <Box width="440px" display={""} />
          <Link href="/">
            <Heading
              alignItems="center"
              color={backgroundColor === "white" ? "blue.400" : "white"}
              fontWeight="bold"
              fontSize={fontSizeHeading}
            >
              Cafeteria Digital
            </Heading>
          </Link>
          <HStack width="440px" justifyContent="left">
            <Link href="/cart">
              <Tooltip alignItems="center" label="Meu carrinho">
                <Button
                  colorScheme="transparent"
                  size={"56"}
                  marginRight="1.5%"
                >
                  <Box
                    color="black"
                    _hover={{
                      color: backgroundColor === "white" ? "blue.400" : "white",
                    }}
                  >
                    <RiShoppingCartLine size={"40"} />
                    <Tag
                      position="absolute"
                      left="68%"
                      bottom="52%"
                      rounded="full"
                      bgColor="#ff4747"
                      color="white"
                      boxShadow={"none"}
                    >
                      {totalProducts}
                    </Tag>
                  </Box>
                </Button>
              </Tooltip>
            </Link>
            <Link href={token === "" ? "/login" : "/user"}>
              <Tooltip alignItems="center" label="Minha conta">
                <Button colorScheme="transparent" size={"56"}>
                  <Box
                    color="black"
                    _hover={{
                      color: backgroundColor === "white" ? "blue.400" : "white",
                    }}
                  >
                    {token === "" ?  (
                      <HiOutlineUserCircle color="#E5F4FD" size={"40"} />
                    ) : (
                      <Image src={svg} width="40px" height="40px" />
                    )}
                  </Box>
                </Button>
              </Tooltip>
            </Link>

            {/* <Button colorScheme="transparent" size={"56"}>
           <Box color="black" _hover={{color: "white"}}>
            fazer login
          <FiLogIn size={"40"} />
          </Box> 
          </Button> */}
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
}
