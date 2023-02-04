import { ReactNode } from 'react'
import {
  Input as NativeBaseInput,
  IInputProps,
  Icon,
  FormControl
} from 'native-base'

interface InputProps extends IInputProps {
  icon: ReactNode
  errorMessage?: string | null
}

export const Input = ({
  icon,
  errorMessage = null,
  isInvalid,
  ...rest
}: InputProps) => {
  // is invalid if errorMessage exists or isInvalid is true.
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl>
      <NativeBaseInput
        alignItems='center'
        bg='bg.800'
        h={12}
        px={4}
        borderWidth={0}
        borderRadius={8}
        fontSize='body_1'
        color='text.100'
        placeholderTextColor='text.400'
        _focus={{
          bg: 'bg.800',
          borderWidth: 1,
          borderColor: 'primary.500'
        }}
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: 'errorColor'
        }}
        InputLeftElement={
          <Icon as={icon} ml='4' />
        }
        {...rest}
      />
      <FormControl.ErrorMessage _text={{ color: 'errorColor' }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}