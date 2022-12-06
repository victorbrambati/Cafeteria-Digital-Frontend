import { Box, Stack, Image, Text, HStack, Heading, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import { coffeeProducts } from '../../data/products'
import { useCartStore } from '../../store/useCart'

export default function CoffeeDescription() {
  const router = useRouter()
  const { id } = router.query

 const myCoffee = coffeeProducts.find(coffee => coffee.id === id)
 const addToCart = useCartStore(state => state.addToCart);

 if(!myCoffee){
return <div />
 }



  return (
    <Box>
    <Header backgroundColor="white" />
    <Stack width="100%" height="30%" backgroundColor="black" justify="center" alignContent="center" alignItems="center">
        <Stack direction={['column', 'row']} paddingTop={120} justify="space-between"  paddingBottom="300px">
            <Box minW="280px" paddingRight="5%" paddingLeft="5%">
            <Image w="560px" objectFit='cover' src={myCoffee.image}/>
            </Box>
            <Stack align="center" justifyContent="center">
                <Heading color="white" fontSize="60px">
                    {myCoffee.title} 
                </Heading>
                <Text maxWidth={460} color="#ADADAD"  marginTop="4%">
                Nosso café {myCoffee.title} traz notas sensoriais de CHOCOLATE, CARAMELO e FRUTAS SECAS. Viva a praticidade do preparo do café moído e experimente o resultado de um café com acidez equilibrada e intensidade alta.
</Text>
                  <Text color="#ADADAD" marginTop="5%"> {myCoffee.subtitle}</Text>
                <Text fontSize="32px" fontWeight="semibold" minW={170} maxH={56} paddingTop="5%" paddingBottom="1%" align="center" color="white">
              R$ {myCoffee.price},00
                </Text>
            <Button rounded={0}  bgColor="#FFBB00" colorScheme={'yellow'} _hover={{bgColor: "#E2A600"}} onClick={() => addToCart(myCoffee)}>Colocar no carrinho</Button>
            </Stack>
        </Stack>
        
    </Stack>
    </Box>

  )
}
