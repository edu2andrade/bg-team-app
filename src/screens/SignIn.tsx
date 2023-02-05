import {
  Heading,
  VStack,
  Text,
  Center,
  Link,
  Image,
  ScrollView,
} from 'native-base'

import BgImg from '@assets/bg-img.png'

import IoMailSvg from '@assets/icons/IoMailOutline.svg'
import IoLockSvg from '@assets/icons/IoLockClosedOutline.svg'

import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

const signInSchema = z.object({
  email: z.string()
    .email({ message: 'Formato de e-mail inválido' }),
  password: z.string()
    .min(6, { message: 'Sua password deve ter pelo menos 6 digitos' })
})

type FormDataProps = z.infer<typeof signInSchema>

export const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormDataProps>({
    resolver: zodResolver(signInSchema)
  })

  const onSubmit = (data: FormDataProps) => {
    try {
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleRegister = () => {
    console.log('Register --> Call payments route')
  }

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
        opacity={0.4}
      />

      <VStack flex={1} mb={16} display='flex' justifyContent='flex-end' >
        <Center >
          <Heading
            color='text.100'
            fontSize={56}
            fontWeight='extrabold'
            textTransform='uppercase'
            shadow='5'
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

        <Center mt={4} w='full'>
          <Controller
            control={control}
            name='email'
            render={({ field: { onChange, value } }) => (
              <Input
                icon={<IoMailSvg />}
                placeholder='Teu e-mail aqui'
                keyboardType='email-address'
                autoCapitalize='none'
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name='password'
            render={({ field: { onChange, value } }) => (
              <Input
                icon={<IoLockSvg />}
                placeholder='Tua password aqui'
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
              /> 
            )}
          />
          <Button
            onPress={handleSubmit(onSubmit)}
            title='Iniciar sessão'
          />
        </Center>

        <Center mt={3}>
          <Button
            onPress={handleRegister}
            title='Regísta-te aqui'
            variant='outline'
          />
          <Link href="/">
            <Text mt={2} underline color='text.400' textDecoration='underline'>
              Esqueceste a tua password? Recupera aqui!
            </Text>
          </Link>
        </Center>

      </VStack>
    </ScrollView>
  )
}