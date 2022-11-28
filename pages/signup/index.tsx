import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import * as React from 'react'
import { Logo } from '../../components/Logo'
import { OAuthButtonGroup } from '../../components/OAuthButtonGroup'
import { PasswordField } from '../../components/PasswordField'


export default function index(){
return (
<Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
    <Stack spacing="4">
      <Container>
        <HStack justify="center">
      <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
            Crie sua conta da
          </Heading>
          </HStack>
          <HStack justify="center">
        <Text fontSize={33} fontWeight={'bold'}>
        Cafeteria Digital ☕
        </Text>
        </HStack>
        </Container>
        
       
      <Box
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
        boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
        borderRadius={{ base: 'none', sm: 'xl' }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <PasswordField />
          </Stack>
          <Stack spacing="6" >
            <Button colorScheme='blue'>Criar uma conta</Button>
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <HStack spacing="1" justify="center">
            <Text color="muted">Já possuí uma conta?</Text>
            <Link href="/login">
            <Button variant="link" colorScheme="blue" >
              fazer login
            </Button>
            </Link>
          </HStack>
        </Stack>
            <HStack>
              <Divider />
 
              <Divider />
            </HStack>
           
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
)
}
  