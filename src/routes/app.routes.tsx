import { Platform } from 'react-native';

import {
  createBottomTabNavigator, 
  BottomTabNavigationProp, 
} from '@react-navigation/bottom-tabs';

import { useTheme } from 'native-base';

import Ionicons from '@expo/vector-icons/Ionicons';

import { Home } from '@screens/Home';
import { Nutrition } from '@screens/Nutrition';
import { Workout } from '@screens/Workout';
import { Profile } from '@screens/Profile';
import { ProfileEdit } from '@screens/ProfileEdit';
import { DailyWorkout } from '@screens/DailyWorkout';
import { Exercise } from '@screens/Exercise';

type AppRoutes = {
  Home: undefined,
  Nutrition: undefined,
  Workout: undefined,
  Profile: undefined,
  ProfileEdit: undefined,
  DailyWorkout: { workoutId: string},
  Exercise: { exerciseId: string},
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export const AppRoutes = () => {
  const { colors, sizes } = useTheme();
  const iconSize = sizes['8'];

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.primary['500'],
      tabBarInactiveTintColor: colors.text['100'],
      tabBarStyle: {
        backgroundColor: colors.bg['900'],
        borderColor: colors.primary['500'],
        borderTopColor: colors.primary['500'],
        borderWidth: 1,
        borderTopWidth: 1,
        borderRadius: 8,
        width: '85%',
        alignSelf: 'center',
        marginBottom: sizes['16'],
        paddingTop: sizes['2'],
        paddingBottom: sizes['2'],
        height: Platform.OS === 'android' ? 'auto' : 70,
      }
    }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name='home' size={iconSize} color={color} />
          )
        }}
      />
      <Screen
        name="Workout"
        component={Workout}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name='barbell-outline' size={iconSize} color={color} />
          )
        }}
      />
      <Screen
        name="Nutrition"
        component={Nutrition}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name='fast-food' size={iconSize} color={color} />
          )
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons 
              name='person-circle-sharp' 
              size={iconSize} 
              color={color} 
            />
          )
        }}
      />
      <Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="DailyWorkout"
        component={DailyWorkout}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="Exercise"
        component={Exercise}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
};