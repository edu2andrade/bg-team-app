import { StatusBar } from 'react-native';
import { Center, NativeBaseProvider, Text } from 'native-base'

import { THEME } from './src/theme'

import { useFonts } from 'expo-font'

import { Loading } from '@components/Loading';
import { SignIn } from '@screens/SignIn';


export default function App() {
  // fontFamily is not applied in Android, need to see this!
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
      { fontsLoaded ? <SignIn /> : <Loading /> }
    </NativeBaseProvider>
  );
}
