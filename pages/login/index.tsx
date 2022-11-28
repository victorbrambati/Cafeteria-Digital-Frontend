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
    <Stack spacing="8">
      <Stack spacing="4">
        <Container>
        <HStack justify="center">
      <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
            faça login em sua conta da
          </Heading>
          </HStack>
          <HStack justify="center">
        <Text fontSize={33} fontWeight={'bold'}>
        Cafeteria Digital ☕
        </Text>
        </HStack>
        </Container>
        <HStack spacing="1" justify="center">
            <Text color="muted">Não possuí uma conta?</Text>
            <Link href="/signup">
            <Button variant="link" colorScheme="blue">
              Crie uma conta
            </Button>
            </Link>
          </HStack>
      </Stack>
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
          <HStack justify="space-between">
            <Checkbox defaultChecked>Lembre-me</Checkbox>
            <Button variant="link" colorScheme="blue" size="sm">
              Esqueceu a senha?
            </Button>
          </HStack>
          <Stack spacing="6" >
            <Button colorScheme='blue'>Entrar</Button>
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
  