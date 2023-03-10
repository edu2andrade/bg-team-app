import {
  Heading,
  VStack,
  Center,
  ScrollView,
  Box,
  Progress,
} from 'native-base';
import ChevronRightSvg from '@assets/icons/FaChevronRight.svg';

import { useFormContext } from '../../contexts/FormContext';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useNavigation } from '@react-navigation/native';
import { AssessmentNavigatorRoutesProps } from '@routes/assessment.routes';

import { Input } from '@components/Input';
import { MyButton } from '@components/MyButton';
import { weightRegex } from '../../constants';

const weightSchema = z.object({
  weight: z.string({
    required_error: 'Campo obrigatório. Formato: 00kg'
  }).regex(weightRegex, {message: 'Formato inválido! (000kg)'})
});

type weightDataProps = z.infer<typeof weightSchema>

export const QuestionWeight = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<weightDataProps>({
    resolver: zodResolver(weightSchema)
  });

  const { getData } = useFormContext();
  const navigation = useNavigation<AssessmentNavigatorRoutesProps>();

  const onSubmit = (data: weightDataProps) => {
    try {
      getData(data);
      navigation.navigate('QuestionSuplements');
    } catch (err) {
      console.log(err);
    }
  };

  const handlePreviousStep = () => {
    navigation.navigate('QuestionHeight');
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      px={10}
      bg='bg.900'
    >

      <VStack flex={1} my={20} display='flex' justifyContent='space-between' >

        <Center w="100%">
          <Box w="90%" maxW="400">
            <Progress
              value={62.5}
              mx="4"
              _filledTrack={{
                bg: 'primary.500'
              }}
            />
          </Box>
        </Center>

        <Center mt={4} w='full'>
          <Heading
            mb={16}
            color='text.100'
            textAlign='center'
          >
            Quanto pesas? (kg)
          </Heading>

          <Controller
            control={control}
            name='weight'
            render={({ field: { onChange, value } }) => (
              <Input
                type='text'
                icon={<ChevronRightSvg />}
                placeholder='Exemplo: 78kg'
                autoCapitalize='none'
                keyboardType='numbers-and-punctuation'
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(onSubmit)}
                returnKeyType='next'
                errorMessage={errors.weight?.message}
                helperMessage= 'Formato esperado: 00kg'
              />
            )}
          />

        </Center>

        <Center mt={3}>
          <MyButton
            mb={3}
            onPress={handleSubmit(onSubmit)}
            title='Próxima Pergunta'
          />
          <MyButton
            onPress={handlePreviousStep}
            title='Voltar à pergunta anterior'
            variant='outline'
          />
        </Center>

      </VStack>
    </ScrollView>
  );
};