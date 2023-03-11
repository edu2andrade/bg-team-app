import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';

import { customTheme } from './src/theme';

import {
  useFonts,
  Exo_300Light,
  Exo_500Medium,
  Exo_700Bold,
  Exo_800ExtraBold
} from '@expo-google-fonts/exo';

import { Routes } from '@routes/index';
import { Loading } from '@components/Loading';

import { FormContextProvider } from './src/contexts/FormContext';


export default function App() {

  const [fontsLoaded] = useFonts({
    Exo_300Light,
    Exo_500Medium,
    Exo_700Bold,
    Exo_800ExtraBold
  });

  return (
    <NativeBaseProvider theme={customTheme}>
      <FormContextProvider>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </FormContextProvider>
    </NativeBaseProvider>
  );
}
