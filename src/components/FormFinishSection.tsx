// NEED TO MAKE THIS WORKS!!!

// import { useNavigation } from '@react-navigation/native';
// import { AssessmentNavigatorRoutesProps } from '@routes/assessment.routes';
import { HStack, Text, Button } from 'native-base';
import { ReactNode } from 'react';
// import { URLAssessmentTypes } from '@dtos/AssessmentDTO';

interface FormSectionProps {
  title: string
  // url: URLAssessmentTypes
  children: ReactNode
}

export const FormSection = ({
  title,
  // url,
  children
}: FormSectionProps) => {
  // const { navigate } = useNavigation<AssessmentNavigatorRoutesProps>();
  return (
    <HStack
      mb={3}
      alignItems='center'
      justifyContent='space-between'
    >
      <Text color='text.100'>
        <Text bold>{title}</Text> {children}
      </Text>
      <Button
        // onPress={() => navigate(url)}
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
  );
};