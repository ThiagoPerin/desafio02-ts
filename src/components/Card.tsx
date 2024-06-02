import {
  Center,
  ChakraProvider,
  Input,
  Box,
} from '@chakra-ui/react'
import { login } from '../services/login';
import CustomButton from '../components/CustomButton';

export const Card = () => {
  return (
    <ChakraProvider>
      <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Center>
          <CustomButton onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
            Button
          </CustomButton>
        </Center>
      </Box>
    </ChakraProvider>
  )
}