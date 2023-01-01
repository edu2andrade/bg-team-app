import { Heading, VStack, Text, Center, Link } from 'native-base'
import ProfilePic from '@assets/profile-pic.svg'
import { Input } from '@components/Input'
import EmailSvg from '@assets/email.svg'
import LockSvg from '@assets/lock.svg'
import { Button } from '@components/Button'

export const SignIn = () => {
  return (
    <VStack flex={1} bg='bg.900' px={10}>
      <Center
        my={'20'}
      >
        <ProfilePic/>
        <Heading
          mt={6}
          color='text.100'
          fontSize='heading_1'
          fontFamily='heading'
          textTransform='uppercase'
        >
          BG Team
        </Heading>
        <Text
          color='text.400'
          fontSize='subheading'
        >
          Login to start
        </Text>
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
              <Text color='text.400'>Forgot password? Recover here!</Text>
            </Link>
            <Link href="/">
              <Text color='text.400'>Do not have an account? Register here!</Text>
            </Link>
          </Center>
      </Center>
    </VStack>
  )
}