import { useNavigation } from '@react-navigation/native';
import { AssessmentNavigatorRoutesProps } from '@routes/assessment.routes';
import { HStack, Text, Button, Box } from 'native-base';

type AssessmentRoutesNames = 
  'AssessmentStart' |
  'AssessmentConfirm' |
  'QuestionBirthday' |
  'QuestionProfession' |
  'QuestionGoal' |
  'QuestionHeight' |
  'QuestionWeight' |
  'QuestionSuplements' |
  'QuestionMeals' |
  'QuestionWorkouts' |
  'AssessmentFinish'
;

interface FormSectionConfirmProps {
  title: string
  route: AssessmentRoutesNames
  data: string
}

export const FormSectionConfirm = ({
  title,
  route,
  data
}: FormSectionConfirmProps) => {
  const { navigate } = useNavigation<AssessmentNavigatorRoutesProps>();

  return (
    <HStack
      mb={3}
      alignItems='center'
      justifyContent='space-between'
    >
      <Box>
        <Text fontWeight={700} color='text.100'>{title}</Text>
        <Text color='text.100' fontWeight={300}>{data}</Text> 
      </Box>

      <Button
        onPress={() => navigate(route)}
        bgColor='primary.500'
        h={8}
        p={2}
        alignItems='center'
        _pressed={{
          bgColor: 'primary.700'
        }}
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
  );
};