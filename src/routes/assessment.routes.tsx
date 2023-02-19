import { Box, useTheme } from 'native-base';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from '@react-navigation/native-stack';

import { QuestionBirthday } from '@screens/assessment/QuestionBirthday';
import { QuestionProfession } from '@screens/assessment/QuestionProfession';
import { QuestionGoal } from '@screens/assessment/QuestionGoal';
import { QuestionHeight } from '@screens/assessment/QuestionHeight';
import { QuestionWeight } from '@screens/assessment/QuestionWeight';
import { QuestionSuplements } from '@screens/assessment/QuestionSuplements';
import { QuestionMeals } from '@screens/assessment/QuestionMeals';
import { QuestionWorkouts } from '@screens/assessment/QuestionWorkouts';
import { AssessmentStart } from '@screens/assessment/AssessmentStart';
import { AssessmentConfirm } from '@screens/assessment/AssessmentConfirm';
import { AssessmentFinish } from '@screens/assessment/AssessmentFinish';

type AssessmentRoutes = {
  AssessmentStart: undefined;
  AssessmentConfirm: undefined;
  QuestionBirthday: undefined;
  QuestionProfession: undefined;
  QuestionGoal: undefined;
  QuestionHeight: undefined;
  QuestionWeight: undefined;
  QuestionSuplements: undefined;
  QuestionMeals: undefined;
  QuestionWorkouts: undefined;
  AssessmentFinish: undefined;
}

export type AssessmentNavigatorRoutesProps = 
  NativeStackNavigationProp<AssessmentRoutes>
const { Navigator, Screen } = createNativeStackNavigator<AssessmentRoutes>();

export const AssessmentRoutes = () => {

  const { colors } = useTheme();
  const theme = DefaultTheme;
  theme.colors.background = colors.bg[900];

  return (
    <Box
      flex={1}
      bg='bg.900'
    >
      <NavigationContainer theme={theme}>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen
            name='AssessmentStart'
            component={AssessmentStart}
          />
          <Screen
            name='QuestionBirthday'
            component={QuestionBirthday}
          />
          <Screen
            name='QuestionProfession'
            component={QuestionProfession}
          />
          <Screen
            name='QuestionGoal'
            component={QuestionGoal}
          />
          <Screen
            name='QuestionHeight'
            component={QuestionHeight}
          />
          <Screen
            name='QuestionWeight'
            component={QuestionWeight}
          />
          <Screen
            name='QuestionSuplements'
            component={QuestionSuplements}
          />
          <Screen
            name='QuestionMeals'
            component={QuestionMeals}
          />
          <Screen
            name='QuestionWorkouts'
            component={QuestionWorkouts}
          />
          <Screen
            name='AssessmentConfirm'
            component={AssessmentConfirm}
          />
          <Screen
            name='AssessmentFinish'
            component={AssessmentFinish}
          />
        </Navigator>
      </NavigationContainer>
    </Box>
  );
};