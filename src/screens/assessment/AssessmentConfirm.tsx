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
            minH='56'
            w='full'
            borderRadius={8}
            showsVerticalScrollIndicator={false}
            p={4}
            bg='bg.800'
          >
            <VStack>
              <HStack
                mb={3}
                alignItems='center'
                justifyContent='space-between'
              >
                <Text color='text.100'>
                  <Text bold>Data de nasc.:</Text> {formData.birthday}
                </Text>
                <Button
                  onPress={() => navigate('QuestionBirthday')}
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

              <HStack
                mb={3}
                alignItems='center'
                justifyContent='space-between'
              >
                <Text color='text.100'>
                  <Text bold>Profissão:</Text> {formData.profession}
                </Text>
                <Button
                  onPress={() => navigate('QuestionProfession')}
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

              <HStack
                mb={3}
                alignItems='center'
                justifyContent='space-between'
              >
                <Text color='text.100'>
                  <Text bold>Altura:</Text> {formData.height}
                </Text>
                <Button
                  onPress={() => navigate('QuestionHeight')}
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

              <HStack
                mb={3}
                alignItems='center'
                justifyContent='space-between'
              >
                <Text color='text.100'>
                  <Text bold>Peso:</Text> {formData.weight}
                </Text>
                <Button
                  onPress={() => navigate('QuestionWeight')}
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

              <HStack
                mb={3}
                alignItems='center'
                justifyContent='space-between'
              >
                <Text color='text.100'>
                  <Text bold>Objetivo:</Text> {formData.goal}
                </Text>
                <Button
                  onPress={() => navigate('QuestionGoal')}
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

              <HStack
                mb={3}
                alignItems='center'
                justifyContent='space-between'
              >
                <Text color='text.100'>
                  <Text bold>Refeições:</Text> {formData.meals}
                </Text>
                <Button
                  onPress={() => navigate('QuestionMeals')}
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

              <HStack
                mb={3}
                alignItems='center'
                justifyContent='space-between'
              >
                <Text color='text.100'>
                  <Text bold>Treinos:</Text> {formData.workouts}
                </Text>
                <Button
                  onPress={() => navigate('QuestionWorkouts')}
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

              <VStack>
                <HStack
                  mb={3}
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Text color='text.100'>
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
                <Text
                  color='text.100'
                >
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