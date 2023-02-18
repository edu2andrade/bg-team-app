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
import { dateRegex } from '../../constants';

const birthdaySchema = z.object({
  // Validate birthday format with REGEX???
  birthday: z.string({
    required_error: 'Campo obrigatório, formato: DD-MM-AAAA',
  }).regex(dateRegex, {message: 'Formato inválido! (DD-MM-AAAA)'})
});

type birthdayDataProps = z.infer<typeof birthdaySchema>

export const QuestionBirthday = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<birthdayDataProps>({
    resolver: zodResolver(birthdaySchema)
  });

  const { getData } = useFormContext();
  const navigation = useNavigation<AssessmentNavigatorRoutesProps>();

  const onSubmit = (data: birthdayDataProps) => {
    try {
      getData(data);
      navigation.navigate('QuestionProfession');
    } catch (err) {
      console.log(err);
    }
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
              value={12.5}
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
            Qual a tua data de nascimento?
          </Heading>

          <Controller
            control={control}
            name='birthday'
            render={({ field: { onChange, value } }) => (
              <Input
                type='text'
                icon={<ChevronRightSvg />}
                placeholder='Exemplo: 01-12-1996'
                keyboardType='numbers-and-punctuation'
                autoCapitalize='none'
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(onSubmit)}
                returnKeyType='next'
                errorMessage={errors.birthday?.message}
                helperMessage= 'Formato esperado: DD-MM-AAAA'
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
        </Center>

      </VStack>
    </ScrollView>
  );
};