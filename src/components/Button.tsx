import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

interface ButtonProps extends IButtonProps {
  title: string
}

export const Button = ({ title, variant, ...rest }: ButtonProps) => {
  return (
    <NativeBaseButton
      w='full'
      h={12}
      bg={variant === 'outline' ? 'transparent' : 'primary.700'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor='primary.700'
      _pressed={{
        bg: 'primary.500'
      }}
      {...rest}
    >
      <Text fontSize='body_1' fontWeight={700} color='text.100'>
        {title}
      </Text>
    </NativeBaseButton>
  )
}