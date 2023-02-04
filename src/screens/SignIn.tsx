import {
  Heading,
  VStack,
  Text,
  Center,
  Link,
  Image,
  ScrollView
} from 'native-base'

import BgImg from '@assets/bg-img.png'

import IoMailSvg from '@assets/icons/IoMailOutline.svg'
import IoLockSvg from '@assets/icons/IoLockClosedOutline.svg'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

export const SignIn = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1}}
      showsVerticalScrollIndicator={false}
      px={10}
      bg='bg.900'
    >

      <Image
        source={BgImg}
        defaultSource={BgImg}
        alt='Bernardo em pose para competição'
        resizeMode='contain'
        size={550}
        position='absolute'
        top={60}
        alignSelf='center'
      />

      <VStack flex={1} mb={10} display='flex' justifyContent='flex-end' >
        <Center >
          <Heading
            color='text.100'
            fontSize={56}
            fontWeight='extrabold'
            textTransform='uppercase'
          >
            BG Team
          </Heading>
          <Text
            mt={-3}
            color='text.100'
            fontSize='subheading'
            fontWeight={500}
          >
            Iniciar sessão
          </Text>
        </Center>

        <Center mt={6} w='full'>
          <Input
            icon={<IoMailSvg />}
            placeholder='Teu e-mail aqui'
            keyboardType='email-address'
            autoCapitalize='none'
            mb={2}
          />
          <Input
            icon={<IoLockSvg />}
            placeholder='Tua password aqui'
            secureTextEntry
            mb={3}
          />
          <Button title='Login' />
        </Center>

        <Center mt={6}>
          <Link href="/">
            <Text mb={2} underline color='text.400' textDecoration='underline'>
              Esqueceste a tua password? Recupera aqui!
            </Text>
          </Link>
          <Link href="/">
            <Text mb={2} underline color='text.400'>
              Ainda não tens uma conta? Cria aqui!
            </Text>
          </Link>
        </Center>

      </VStack>

    </ScrollView>
  )
}