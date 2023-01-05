import { Heading, VStack, Text, Center, Link } from 'native-base'

import LogoImg from '@assets/bgteam_logo.svg'
import EmailSvg from '@assets/email.svg'
import LockSvg from '@assets/lock.svg'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

export const SignIn = () => {
  return (
    <VStack flex={1} bg='bg.900' px={10}>
      <Center my={'20'}>
        <Center>
          <LogoImg height={140}/>
          <Heading
            mt={6}
            color='text.100'
            fontSize='heading_1'
            textTransform='uppercase'
          >
            BG Team
          </Heading>
          <Text
            color='text.400'
            fontSize='subheading'
            fontWeight={500}
          >
            Login to start
          </Text>
        </Center>
        <Center mt={12} w='full'>
          <Input
            icon={<EmailSvg />}
            placeholder='Your e-mail'
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <Input
            icon={<LockSvg />}
            placeholder='************'
            secureTextEntry
          />
          <Button title='Login' />
        </Center>
        <Center mt={6}>
          <Link href="/">
            <Text mb={2} underline color='text.400' textDecoration='underline'>Forgot password? Recover here!</Text>
          </Link>
          <Link href="/">
            <Text mb={2} underline color='text.400'>Do not have an account? Register here!</Text>
          </Link>
        </Center>
      </Center>
    </VStack>
  )
}