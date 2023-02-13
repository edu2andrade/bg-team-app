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

const heightSchema = z.object({
  // Validate height format with REGEX???
  height: z.string({
    required_error: 'Campo obrigatório.',
    invalid_type_error: 'Formato inválido.'
  })
});

type heightDataProps = z.infer<typeof heightSchema>

export const QuestionHeight = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<heightDataProps>({
    resolver: zodResolver(heightSchema)
  });

  const { getData } = useFormContext();
  const navigation = useNavigation<AssessmentNavigatorRoutesProps>();

  const onSubmit = (data: heightDataProps) => {
    try {
      getData(data);
      navigation.navigate('QuestionWeight');
    } catch (err) {
      console.log(err);
    }
  };

  const handlePreviousStep = () => {
    navigation.navigate('QuestionGoal');
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
              value={50}
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
            Qual a tua altura?
          </Heading>

          <Controller
            control={control}
            name='height'
            render={({ field: { onChange, value } }) => (
              <Input
                type='text'
                icon={<ChevronRightSvg />}
                placeholder='Preenche aqui'
                autoCapitalize='none'
                onChangeText={onChange}
                value={value}
                errorMessage={errors.height?.message}
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