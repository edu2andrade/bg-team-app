import {
  Center, 
  Heading,
  Text, 
  VStack 
} from 'native-base';

import BGTeamLogo from '@assets/bgteam_logo.svg';

export const AssessmentFinish = () => {

  return (
    <VStack
      mt={8}
      flex={1}
      px={12}
      bg='bg.900'
    >
      <VStack
        flex={1}
        mt={32}
        justifyContent='flex-start'
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
            Questionário Finalizado
          </Heading>
          <Text
            textAlign='center'
            color='text.100'
          >
            Teu plano de treino estará pronto em até 3 dias úteis.
          </Text>
        </Center>

      </VStack>
    </VStack>
  );
};