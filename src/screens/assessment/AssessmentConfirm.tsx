import {
  Button, 
  Center, 
  Heading, 
  HStack, 
  ScrollView, 
  Text, 
  VStack 
} from 'native-base';

import BGTeamLogo from '@assets/bgteam_logo.svg';
import { MyButton } from '@components/MyButton';

import { useNavigation } from '@react-navigation/native';
import { AssessmentNavigatorRoutesProps } from '@routes/assessment.routes';
import { useFormContext } from '../../contexts/FormContext';
import { FormSectionConfirm } from '@components/FormSectionConfirm';

export const AssessmentConfirm = () => {

  const { formData } = useFormContext();
  const { navigate } = useNavigation<AssessmentNavigatorRoutesProps>();

  const handleFinishAssessment = () => {
    // Send data to db
    console.log(formData);
    navigate('AssessmentFinish');
  };

  return (
    <VStack
      mt={8}
      flex={1}
      px={8}
      bg='bg.900'
    >
      <VStack
        flex={1}
        justifyContent='center'
      >
        <Center mb={4}>
          <BGTeamLogo width={100} height={100} />
        </Center>

        <Center
          justifyContent='center'
        >
          <Heading
            mb={3}
            color='text.100'
            textAlign='center'
          >
            Confirma as tuas respostas:
          </Heading>

          <ScrollView
            minH={56}
            maxH={80}
            w='full'
            borderRadius={8}
            showsVerticalScrollIndicator={false}
            p={4}
            bg='bg.800'
          >
            <VStack>

              <FormSectionConfirm
                route='QuestionBirthday'
                title='Data de nasc.:'
                data={formData.birthday}
              />

              <FormSectionConfirm
                route='QuestionProfession'
                title='Profissão:'
                data={formData.profession}
              />

              <FormSectionConfirm
                route='QuestionHeight'
                title='Altura:'
                data={formData.height}
              />
              
              <FormSectionConfirm
                route='QuestionWeight'
                title='Peso:'
                data={formData.weight}
              />
              
              <FormSectionConfirm
                route='QuestionGoal'
                title='Objetivo:'
                data={formData.goal}
              />
              
              <FormSectionConfirm
                route='QuestionMeals'
                title='Refeições:'
                data={formData.meals}
              />

              <FormSectionConfirm
                route='QuestionWorkouts'
                title='Treinos:'
                data={formData.workouts}
              />              

              <VStack>
                <HStack
                  mb={3}
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Text fontWeight={700} color='text.100'>
                    <Text bold>Suplementos:</Text>
                  </Text>
                  <Button
                    onPress={() => navigate('QuestionSuplements')}
                    bgColor='primary.500'
                    h={8}
                    p={2}
                    alignItems='center'
                  >
                    <Text
                      color='text.100'
                      fontSize='caption'
                      fontWeight={500}
                    >
                      Editar
                    </Text>
                  </Button>
                </HStack>
                <Text color='text.100' fontWeight={300}>
                  {formData.suplements}
                </Text>
              </VStack>
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