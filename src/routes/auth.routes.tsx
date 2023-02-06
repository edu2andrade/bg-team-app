import { Box, useTheme } from 'native-base'

import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from '@react-navigation/native-stack'

import { Recover } from '@screens/Recover'
import { SignIn } from '@screens/SignIn'

type AuthRoutes = {
  SignIn: undefined
  Recover: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>
const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

export const AuthRoutes = () => {

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
            name='SignIn'
            component={SignIn}
          />
          <Screen
            name='Recover'
            component={Recover}
          />
        </Navigator>
      </NavigationContainer>
    </Box>
  )
}