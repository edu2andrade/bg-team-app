import {
  Button,
  Center, 
  Heading,
  Link,
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
        <Center mb={12}>
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
            w={72}
            textAlign='center'
            fontWeight={300}
            fontSize='body_1'
            color='text.100'
          >
            O questionário foi enviado com sucesso. 
            O teu plano de treino e dieta estarão prontos em até 2 dias úteis.
          </Text>
          <Link
            href='mailto:bernardo@galvaocoach.com'
            mt={6}
            textAlign='center'
            isExternal _text={{
              color: 'text.100',
              fontWeight: '500'
            }}
          >
              Ainda tens dúvidas? Contácta-me aqui.
          </Link>
        </Center>
      </VStack>
    </VStack>
  );
};