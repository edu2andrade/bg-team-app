import { Heading, VStack } from 'native-base';

export const Nutrition = () => {
  return (
    <VStack flex={1} justifyContent='center'>
      <Heading
        color='text.100'
        fontSize='2xl'
        fontWeight='bold'
        shadow='5'
        textAlign='center'
        mb={12}
      >
        Nutrition
      </Heading>
    </VStack>
  );
};