import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base';

interface ButtonProps extends IButtonProps {
  title: string
}

export const MyButton = ({ title, variant, ...rest }: ButtonProps) => {
  return (
    <NativeBaseButton
      w='full'
      h={14}
      bg={variant === 'outline' ? 'transparent' : 'primary.500'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor='primary.700'
      borderRadius={8}
      _pressed={{
        bg: 'primary.700'
      }}
      {...rest}
    >
      <Text fontSize='body_1' fontWeight={700} color='text.100'>
        {title}
      </Text>
    </NativeBaseButton>
  );
};