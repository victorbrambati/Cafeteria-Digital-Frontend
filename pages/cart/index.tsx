import { Box, Stack, Text, HStack, Heading, Button, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import CartItem from '../../components/CartItem'
import Header from '../../components/Header'
import ConfirmPurchase from '../../components/ConfirmPurchase'
import { useCartStore } from '../../store/useCart'
import { CoffeeProductType } from "../../data/products";
import { useAuth } from '../../store/useAuth'

export default function Cart() {
  const newCart = useCartStore(state => state.cart);
  const newTotalPrice = useCartStore(state => state.totalPrice);
  const resetCart = useCartStore(state => state.resetCart);

  const actualUserInfo = useAuth(state => state.userInfo);

  const [userInfo, setUserInfo] = useState(actualUserInfo);


const [cart, setCart] = useState<CoffeeProductType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [buttonRender, setButtonRender] = useState(false);
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  function ConfirmButton(){
    setButtonRender(!buttonRender)
    onOpen()
  }

  useEffect(() => {
    if(!isOpen && buttonRender && userInfo.email !== ''){
      resetCart();
    }
  }, [isOpen]);
  useEffect(() => setUserInfo(actualUserInfo), [actualUserInfo]);
  useEffect(() => {setCart([...newCart]), setTotalPrice(newTotalPrice)}, [newTotalPrice, newCart]);
  

  const paddingLeft = useBreakpointValue({ base: "0", md: "25" });
  const minH = useBreakpointValue({ base: "350", md: "550" });

  return (<Box backgroundColor="black" height="100vh" >
      <Header backgroundColor="white" />

    <Stack alignItems="center" flexDirection={'column'}>
      <Heading color="white" fontSize={52}  marginTop={10} marginBottom={15}>Carrinho.</Heading>

    <Stack width="100%"  backgroundColor="black" flexDirection={['column', 'row']}  justify="center">
     <Stack minH={minH}>

      {cart.map(coffee => (
        <CartItem key={coffee.id} {...coffee} />
      ))}
      </Stack>
      <Stack w={350} paddingLeft={paddingLeft} paddingTop={paddingLeft}>
      <Heading color="white">Total</Heading>
      <HStack width="100%" justify="space-between">
      <Text color="white">Total:</Text>
      <Text fontSize="2xl" color="white" fontWeight={700}>R${totalPrice}</Text>
      </HStack>9
      <Button rounded={0}  bgColor="#FFBB00" colorScheme={'yellow'} _hover={{bgColor: "#E2A600"}} onClick={ConfirmButton}>Continuar</Button>
      <ConfirmPurchase isAuthenticated={userInfo.email !== ''} isOpen={isOpen} onClose={onClose} />

      </Stack>
    </Stack>
    </Stack>
    </Box>

  )
}
