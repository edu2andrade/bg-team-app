

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { AssessmentRoutes } from '@routes/assessment.routes';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

import { useTheme, Box } from 'native-base';

export const Routes = () => {

  const { colors } = useTheme();
  const theme = DefaultTheme;
  theme.colors.background = colors.bg[900];

  return (
    <Box flex={1} bg="bg.900">
      <NavigationContainer theme={theme}>
        <AppRoutes /> 
      </NavigationContainer>
    </Box>
  );
};