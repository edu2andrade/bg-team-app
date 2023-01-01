import { ReactNode } from 'react'
import { Input as NativeBaseInput, IInputProps, Icon } from 'native-base'

interface InputProps extends IInputProps {
  icon: ReactNode
}

export const Input = ({icon, ...rest}: InputProps) => {
  return (
    <NativeBaseInput
      alignItems='center'
      bg='bg.800'
      h={12}
      px={4}
      borderWidth={0}
      fontSize='body_1'
      color='text.100'
      mb={4}
      placeholderTextColor='text.400'
      _focus={{
        bg: 'bg.800',
        borderWidth: 1,
        borderColor: 'primary.500'
      }}
      InputLeftElement={
        <Icon as={icon} ml='4' />
      }
    {...rest}
    />
  )
}