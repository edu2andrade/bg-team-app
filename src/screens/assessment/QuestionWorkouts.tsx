import {
  Heading,
  VStack,
  Center,
  ScrollView,
  Box,
  Progress,
  Select,
} from 'native-base';

import { useFormContext } from '../../contexts/FormContext';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useNavigation } from '@react-navigation/native';
import { AssessmentNavigatorRoutesProps } from '@routes/assessment.routes';

import { MyButton } from '@components/MyButton';

const workoutsSchema = z.object({
  // Validate workouts format with REGEX???
  workouts: z.string({
    required_error: 'Campo obrigatório.',
    invalid_type_error: 'Formato inválido.'
  })
});

type workoutsDataProps = z.infer<typeof workoutsSchema>

export const QuestionWorkouts = () => {

  const {
    control,
    handleSubmit,
  } = useForm<workoutsDataProps>({
    resolver: zodResolver(workoutsSchema)
  });

  const { getData } = useFormContext();
  const navigation = useNavigation<AssessmentNavigatorRoutesProps>();

  const onSubmit = (data: workoutsDataProps) => {
    try {
      getData(data);
      navigation.navigate('AssessmentFinish');
    } catch (err) {
      console.log(err);
    }
  };

  const handlePreviousStep = () => {
    navigation.navigate('QuestionMeals');
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
              value={97}
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
            Quantos dias por semana consegues treinar?
          </Heading>

          <Controller
            control={control}
            name='workouts'
            render={({ field: { onChange, value } }) => (
              <Select
                selectedValue={value}
                minWidth="287"
                h={14}
                px={4}
                fontSize='body_1'
                fontWeight={300}
                color='text.100'
                bg='bg.800'
                borderWidth={0}
                borderRadius={8}
                placeholderTextColor='text.400'
                accessibilityLabel="Seleciona a quantidade de dias"
                placeholder="Seleciona a quantidade de dias"
                _selectedItem={{
                  bg: 'primary.500',
                  borderRadius: 8
                }}
                onValueChange={onChange}
              >
                <Select.Item label="2" value="2" />
                <Select.Item label="3" value="3" />
                <Select.Item label="4" value="4" />
                <Select.Item label="5" value="5" />
                <Select.Item label="6" value="6" />
              </Select>
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