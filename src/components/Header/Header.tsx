import {
  Center,
  Box,
  Heading,
} from '@chakra-ui/react'

export const Header = () => {
  return (
    <Box backgroundColor={"#ffffff"} marginBottom={"10px"} borderRadius='25px' padding='15px' >
      <Center>
        <Heading>Dio Bank</Heading>
      </Center>
    </Box>
  )
}
