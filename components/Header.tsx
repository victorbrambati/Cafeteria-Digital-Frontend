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
} from "@chakra-ui/react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import Link from "next/link";
import { BackgroundProps } from "@chakra-ui/react";
import { useCartStore } from "../store/useCart";
import { useEffect, useState } from "react";
export default function Header({ backgroundColor }: BackgroundProps) {
  let newTotalProducts = useCartStore((state) => state.totalProducts);

  useCartStore((state) => state.totalProducts);
  const [totalProducts, setTotalProducts] = useState(newTotalProducts);

  useEffect(() => setTotalProducts(newTotalProducts), [newTotalProducts]);

  const fontSizeHeading = useBreakpointValue({ base: "4xl", md: "5xl" });
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

            <Tooltip alignItems="center" label="Minha conta">
              <Button colorScheme="transparent" size={"56"}>
                <Box
                  color="black"
                  _hover={{
                    color: backgroundColor === "white" ? "blue.400" : "white",
                  }}
                >
                  <HiOutlineUserCircle size={"40"} />
                </Box>
              </Button>
            </Tooltip>
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
