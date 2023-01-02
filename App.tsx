import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base'

import { customTheme } from './src/theme'

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
    <NativeBaseProvider theme={customTheme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      { fontsLoaded ? <SignIn /> : <Loading /> }
    </NativeBaseProvider>
  );
}
