import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Tag,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react";
import Header from "../components/Header";
import BlogCarousel from "../components/BlogCarousel";
import ProductCard from "../components/ProductsCard";

import ScrollContainer from "react-indiana-drag-scroll";
import { coffeeProducts } from "../data/products";
import Link from "next/link";
export default function Home() {
  return (
    <Box>
      <Header backgroundColor="blue.400" />
      <Stack alignItems="center">
        <BlogCarousel />
        <Stack
          width="100%"
          height="876px"
          backgroundColor="black"
          alignItems="center"
        >
          <Stack width="80%" marginTop="80px" justify="left">
            <HStack>
              <Heading fontSize="5xl" color="white">
                Escolha sua bebida
              </Heading>
              <Heading color="#FFBB00">.</Heading>
            </HStack>
            <ScrollContainer>
            <Flex h={700}>
            { coffeeProducts.map(coffee => (
              <Link key={coffee.id} href={`/coffee/${coffee.id}`}>
<ProductCard title={coffee.title} subtitle={coffee.subtitle} image={coffee.image} />
</Link>

            )) }
              </Flex>
            </ScrollContainer>              
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

