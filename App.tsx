import { View, StatusBar } from 'react-native';
import { Center, Text, NativeBaseProvider, Heading } from 'native-base'

import { THEME } from './src/theme'

import { useFonts } from 'expo-font'

import { Loading } from '@components/Loading';
import { SignIn } from '@screens/SignIn';


export default function App() {
  const [ fontsLoaded ] = useFonts({
    'AnekGurmukhi_Regular': require('@assets/fonts/AnekGurmukhi-Regular.ttf'), 
    'AnekGurmukhi_Bold': require('@assets/fonts/AnekGurmukhi-Bold.ttf'), 
  })


  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Center bg='bg.900' flex={1}>
        {
          fontsLoaded ? (
            <SignIn />
          ) : (
            <Loading />
          )
        }
      </Center>
    </NativeBaseProvider>
  );
}
