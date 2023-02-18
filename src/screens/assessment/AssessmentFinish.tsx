import { Center, Heading, ScrollView, Text, VStack } from 'native-base';

import BGTeamLogo from '@assets/bgteam_logo.svg';
import { MyButton } from '@components/MyButton';

import { useNavigation } from '@react-navigation/native';
import { AssessmentNavigatorRoutesProps } from '@routes/assessment.routes';
import { useFormContext } from '../../contexts/FormContext';

export const AssessmentFinish = () => {

  const { formData } = useFormContext();
  const navigation = useNavigation<AssessmentNavigatorRoutesProps>();

  const handleFinishAssessment = () => {
    // Send data to db
    console.log(formData);
    navigation.navigate('AssessmentStart');
  };

  return (
    <VStack
      mt={8}
      flex={1}
      px={10}
      bg='bg.900'
    >
      <VStack
        flex={1}
        justifyContent='center'
      >
        <Center mb={4}>
          <BGTeamLogo width={100} height={100} />
          <Text
            mt={3}
            mb={-1}
            color='text.100'
            fontSize='body_1'
            fontWeight={500}
          >
            Tua parte já está feita,
          </Text>
          <Text
            color='text.100'
            fontSize='subheading'
            fontWeight={700}
          >Bernardo</Text>
        </Center>

        <Center justifyContent='center'>
          <Heading
            mb={3}
            color='text.100'
            textAlign='center'
          >
            Confirma as tuas respostas:
          </Heading>

          <ScrollView
            minH={56}
            minW={72}
            borderRadius={8}
            showsVerticalScrollIndicator={false}
            p={4}
            bg='bg.800'
          >
            <VStack>
              <Text color='text.100'>
                Data de aniversário: {formData.birthday}
              </Text>
              <Text color='text.100'>Profissão: {formData.profession}</Text>
              <Text color='text.100'>Altura: {formData.height}</Text>
              <Text color='text.100'>Peso: {formData.weight}</Text>
              <Text color='text.100'>Objetivo: {formData.goal}</Text>
              <Text color='text.100'>Refeições por dia: {formData.meals}</Text>
              <Text color='text.100'>
                Treinos por semana: {formData.workouts}
              </Text>
              <Text color='text.100'>Suplementos: {formData.suplements}</Text>
            </VStack>
          </ScrollView>

          <MyButton
            my={8}
            title='Enviar e finalizar'
            onPress={handleFinishAssessment}
          />
        </Center>

      </VStack>
    </VStack>
  );
};