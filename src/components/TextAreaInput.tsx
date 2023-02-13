import { ReactNode } from 'react'
import {
  TextArea as NativeBaseTextArea,
  ITextAreaProps,
  Icon,
  FormControl
} from 'native-base'

interface TextAreaInputProps extends ITextAreaProps {
  errorMessage?: string | null
}

export const TextAreaInput = ({
  errorMessage = null,
  isInvalid,
  ...rest
}: TextAreaInputProps) => {
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl mb={3} isInvalid={invalid}>
      <NativeBaseTextArea
        autoCompleteType=''
        bg='bg.800'
        h={20}
        numberOfLines={4}
        px={4}
        borderWidth={0}
        borderRadius={8}
        fontSize='body_1'
        fontWeight={300}
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
        {...rest}
      />
      <FormControl.ErrorMessage _text={{ color: 'errorColor' }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}