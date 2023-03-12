
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from '@react-navigation/native-stack';

import { Recover } from '@screens/Recover';
import { SignIn } from '@screens/SignIn';

type AuthRoutes = {
  SignIn: undefined
  Recover: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>
const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export const AuthRoutes = () => {

  return (
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
  );
};