import {
  Heading,
  VStack,
  Center,
  ScrollView,
  Box,
  Progress,
  Select,
  FormControl,
} from 'native-base';

import { useFormContext } from '../../contexts/FormContext';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useNavigation } from '@react-navigation/native';
import { AssessmentNavigatorRoutesProps } from '@routes/assessment.routes';

import { MyButton } from '@components/MyButton';

const goalSchema = z.object({
  goal: z.string({
    required_error: 'Campo obrigatório.',
    invalid_type_error: 'Formato inválido.'
  })
});

type goalDataProps = z.infer<typeof goalSchema>

export const QuestionGoal = () => {

  const {
    control,
    handleSubmit,
  } = useForm<goalDataProps>({
    resolver: zodResolver(goalSchema)
  });

  const { getData } = useFormContext();
  const navigation = useNavigation<AssessmentNavigatorRoutesProps>();

  const onSubmit = (data: goalDataProps) => {
    try {
      getData(data);
      navigation.navigate('QuestionHeight');
    } catch (err) {
      console.log(err);
    }
  };

  const handlePreviousStep = () => {
    navigation.navigate('QuestionProfession');
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
              value={37.5}
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
            Qual o teu objetivo inicial?
          </Heading>

          <Controller
            control={control}
            name='goal'
            render={({ field: { onChange, value } }) => (
              <FormControl>
                <Select
                  selectedValue={value}
                  onValueChange={onChange}
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
                  accessibilityLabel="Seleciona o teu objetivo"
                  placeholder="Seleciona o teu objetivo"
                  _selectedItem={{
                    bg: 'primary.500',
                    borderRadius: 8
                  }}
                >
                  <Select.Item
                    label="Perda de gordura"
                    value="Perda de gordura"
                  />
                  <Select.Item
                    label="Tonificar"
                    value="Tonificar"
                  />
                  <Select.Item
                    label="Aumento de massa muscular"
                    value="Aumento de massa muscular"
                  />
                </Select>
                <FormControl.HelperText
                  _text={{
                    fontSize: 'xs',
                    fontWeight: 300,
                    color: 'text.100'
                  }}
                >
                  Escolhe uma das opções do menu
                </FormControl.HelperText>
              </FormControl>
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