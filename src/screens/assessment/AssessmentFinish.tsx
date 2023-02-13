import { Center, Heading, ScrollView, Text, VStack } from 'native-base';

import BGTeamLogo from '@assets/bgteam_logo.svg';
import MDAssignment from '@assets/icons/MdAssignment.svg'
import { MyButton } from '@components/MyButton';

import { useNavigation } from '@react-navigation/native';
import { AssessmentNavigatorRoutesProps } from '@routes/assessment.routes';

export const AssessmentFinish = () => {

  const navigation = useNavigation<AssessmentNavigatorRoutesProps>();

  const handleFinishAssessment = () => {
    navigation.navigate('AssessmentStart');
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      px={10}
      bg='bg.900'
    >
      <VStack
        flex={1}
        justifyContent='center'
      >
        <Center mb={16}>
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
          >
            Questionário Finalizado
          </Heading>

          <Text
            mb={8}
            fontSize='body_1'
            fontWeight={500}
            color='text.100'
            textAlign='center'
          >
            Em até 48 horas terás tudo preparado começares os treinos.
          </Text>

          <MDAssignment width={36} height={40} />

          <MyButton
            my={8}
            title='Enviar e finalizar'
            onPress={handleFinishAssessment}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
};