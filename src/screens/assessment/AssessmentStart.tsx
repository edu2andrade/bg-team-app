import { Center, Heading, ScrollView, Text, VStack } from 'native-base';

import BGTeamLogo from '@assets/bgteam_logo.svg';
import MDAssignment from '@assets/icons/MdAssignment.svg'
import { MyButton } from '@components/MyButton';

export const AssessmentStart = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1}}
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
            Bem vindo,
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
            Questionário Inicial
          </Heading>
          <MDAssignment width={36} height={40} />
          <MyButton
            my={8}
            title='Iniciar Agora'
          />
        <Text
          fontSize='body_1'
          fontWeight={500}
          color='text.100'
          textAlign='center'
        >
          Este é um passo importante e obrigatório.
        </Text>
        </Center>
      </VStack>
    </ScrollView>
  );
};