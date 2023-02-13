import {
  Heading,
  VStack,
  Center,
  ScrollView,
  Box,
  Progress,
} from 'native-base';
import ChevronRightSvg from '@assets/icons/FaChevronRight.svg'

import { useFormContext } from '../../contexts/FormContext';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useNavigation } from '@react-navigation/native';
import { AssessmentNavigatorRoutesProps } from '@routes/assessment.routes';

import { Input } from '@components/Input';
import { MyButton } from '@components/MyButton';
import { TextAreaInput } from '@components/TextAreaInput';

const suplementsSchema = z.object({
  // Validate suplements format with REGEX???
  suplements: z.string({
    required_error: 'Campo obrigatório.',
    invalid_type_error: 'Formato inválido.'
  })
});

type suplementsDataProps = z.infer<typeof suplementsSchema>

export const QuestionSuplements = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<suplementsDataProps>({
    resolver: zodResolver(suplementsSchema)
  });

  const { getData } = useFormContext();
  const navigation = useNavigation<AssessmentNavigatorRoutesProps>();

  const onSubmit = (data: suplementsDataProps) => {
    try {
      getData(data);
      navigation.navigate('QuestionMeals');
    } catch (err) {
      console.log(err);
    }
  };

  const handlePreviousStep = () => {
    navigation.navigate('QuestionWeight');
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
              value={75}
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
            Tomas ou já tomaste suplementação? Se sim, o quê?
          </Heading>

          <Controller
            control={control}
            name='suplements'
            render={({ field: { onChange, value } }) => (
              <TextAreaInput
                placeholder='Preenche aqui'
                autoCapitalize='none'
                onChangeText={onChange}
                value={value}
                errorMessage={errors.suplements?.message}
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