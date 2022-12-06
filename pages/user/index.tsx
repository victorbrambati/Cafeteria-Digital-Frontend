import { Box, Stack, Text, HStack, Heading, Button, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import CartItem from '../../components/CartItem'
import Header from '../../components/Header'
import ConfirmPurchase from '../../components/ConfirmPurchase'
import { useAuth } from '../../store/useAuth'
import { CoffeeProductType } from "../../data/products";
import React from 'react'

export default function User() {
  const actualUserInfo = useAuth(state => state.userInfo);

  const [userInfo, setUserInfo] = useState(actualUserInfo);

  React.useEffect(() => {
    setUserInfo(actualUserInfo);
  }, [actualUserInfo]);

  if(userInfo.email === ''){
  
  }
  
  

  const paddingLeft = useBreakpointValue({ base: "0", md: "25" });
  const minH = useBreakpointValue({ base: "350", md: "550" });
  

  return (<Box backgroundColor="black" height="100vh" >
      <Header backgroundColor="white" />

    <Stack alignItems="center" flexDirection={'column'}>
      <Heading color="white" fontSize={52}  marginTop={10} marginBottom={15}>Minha conta.</Heading>

      <Stack alignItems="center" w={1200} paddingLeft={paddingLeft} paddingTop={paddingLeft}>
      <Heading color="white">Email: {userInfo.email}</Heading>
      <Heading color="white">ID: {userInfo.id}</Heading>

      </Stack>
    </Stack>
    </Box>

  )
}
