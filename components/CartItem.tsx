import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Tooltip,
  Text,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import { CoffeeProductType } from "../data/products";
import { TbTruckDelivery } from "react-icons/tb";
import { useCartStore } from "../store/useCart";

export default function CartItem(coffee: CoffeeProductType) {

  const addToCart = useCartStore(state => state.addToCart);
  const removeToCart = useCartStore(state => state.removeToCart);

  const fontSizeHeading = useBreakpointValue({ base: "2xl", md: "4xl" });
  const BoxW = useBreakpointValue({ base: "300", md: "400" });
  const paddingBottom = useBreakpointValue({ base: "0", md: "15" });
  
  return (
      <HStack minW={BoxW} paddingBottom={paddingBottom}> 
      <Link key={coffee.id} href={`/coffee/${coffee.id}`}>
        <Image boxSize={120} src={coffee.image} />
        </Link>
        <Stack>
        <Link key={coffee.id} href={`/coffee/${coffee.id}`}>
        <Heading fontSize={fontSizeHeading} color="white">
            {coffee.title}
          </Heading>
        </Link>
          
          <HStack>
            <TbTruckDelivery color="#01a971" />
            <Text color="#01a971" fontSize={12}>
              Entrega em 10 dias
            </Text>
          </HStack>
          <Stack
            direction={["column", "row"]}
            align="center"
          >
            <Text fontSize={18} fontWeight={700} color="white">
              R${coffee.price}
            </Text>
            <HStack>
              <Button h={5} w={5} rounded="full" onClick={() => removeToCart(coffee)}>
                -
              </Button>
              <Text color="white" fontSize={16}>
                {coffee.quantity}
              </Text>
              <Button h={5} w={5} rounded="full" onClick={() => addToCart(coffee)}>
                +
              </Button>
            </HStack>
          </Stack>
        </Stack>
      </HStack>
  );
}
