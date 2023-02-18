import { ReactNode } from 'react';
import {
  Input as NativeBaseInput,
  IInputProps,
  Icon,
  FormControl
} from 'native-base';

interface InputProps extends IInputProps {
  icon?: ReactNode
  errorMessage?: string | null
  helperMessage?: string | null
}

export const Input = ({
  icon,
  errorMessage = null,
  helperMessage = null,
  isInvalid,
  ...rest
}: InputProps) => {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl mb={3} isInvalid={invalid}>
      <NativeBaseInput
        alignItems='center'
        bg='bg.800'
        h={14}
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
        InputLeftElement={
          <Icon as={icon} ml='4' />
        }
        {...rest}
      />
      <FormControl.HelperText _text={{
        fontSize: 'xs',
        fontWeight: 300,
        color: 'text.100'
      }}>
        {helperMessage}
      </FormControl.HelperText>
      <FormControl.ErrorMessage _text={{
        color: 'errorColor',
        fontWeight: 300,
      }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};