import { Box, useTheme } from 'native-base'

import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from '@react-navigation/native-stack'

import { QuestionBirthday } from '@screens/assessment/QuestionBirthday'
import { QuestionProfession } from '@screens/assessment/QuestionProfession'
import { QuestionGoal } from '@screens/assessment/QuestionGoal'

type AssessmentRoutes = {
  QuestionBirthday: undefined;
  QuestionProfession: undefined;
  QuestionGoal: undefined;
}

export type AssessmentNavigatorRoutesProps = NativeStackNavigationProp<AssessmentRoutes>
const { Navigator, Screen } = createNativeStackNavigator<AssessmentRoutes>()

export const AssessmentRoutes = () => {

  const { colors } = useTheme()
  const theme = DefaultTheme
  theme.colors.background = colors.bg[900]

  return (
    <Box
      flex={1}
      bg='bg.900'
    >
      <NavigationContainer theme={theme}>
        <Navigator screenOptions={{ headerShown: false }}>
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
        </Navigator>
      </NavigationContainer>
    </Box>
  )
}