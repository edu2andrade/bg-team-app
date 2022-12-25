import { Heading, HStack, Text } from "native-base"

export const SignIn = () => {
  return (
    <HStack
      flexDir='column'
      alignItems='center'
    >
      <Heading
        color='text.100'
        fontSize='6xl'
        fontFamily='AnekGurmukhi_Bold'
      >
        BG Team App
      </Heading>
      <Heading
        color='text.100'
        fontSize='4xl'
        fontFamily='AnekGurmukhi_Regular'
      >
        BG Team App
      </Heading>
      <Text
        color='text.100'
        fontFamily='AnekGurmukhi_Regular'
        fontSize='lg'
      >
        for the human rights
      </Text>
      <Text
        color='primary.500'
        fontFamily='AnekGurmukhi_Bold'
        fontSize='2xl'
      >
        Texto de PRUEBA
      </Text>
    </HStack>
  )
}