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

import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

const recoverSchema = z.object({
  email: z.string()
    .email({ message: 'Formato de e-mail inválido' }),
})

type FormDataProps = z.infer<typeof recoverSchema>

export const Recover = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormDataProps>({
    resolver: zodResolver(recoverSchema)
  })

  const onSubmit = (data: FormDataProps) => {
    try {
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleBackToSignIn = () => {
    console.log('Back to home called -->')
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

      <VStack
        h={96}
        flex={1}
        mb={16}
        display='flex'
        justifyContent='flex-end'
      >
        <Center w='full'>
          <Heading
            color='text.100'
            fontSize='2xl'
            fontWeight='bold'
            shadow='5'
            textAlign='center'
            mb={12}
          >
            Recupera a tua password
          </Heading>

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
          <Button
            onPress={handleSubmit(onSubmit)}
            title='Recuperar password'
          />
        </Center>

        <Button
          onPress={handleBackToSignIn}
          title='Voltar ao menu principal'
          variant='outline'
          mt={16}
        />

      </VStack>
    </ScrollView>
  )
}