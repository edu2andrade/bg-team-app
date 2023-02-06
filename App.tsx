import { StatusBar } from 'react-native'
import { NativeBaseProvider } from 'native-base'

import { customTheme } from './src/theme'

import { 
  useFonts, 
  Exo_300Light, 
  Exo_500Medium, 
  Exo_700Bold,
  Exo_800ExtraBold
} from '@expo-google-fonts/exo'

import { Loading } from '@components/Loading'
import { SignIn } from '@screens/SignIn'
import { Recover } from '@screens/Recover'


export default function App() {

  const [ fontsLoaded ] = useFonts({
    Exo_300Light,
    Exo_500Medium,
    Exo_700Bold,
    Exo_800ExtraBold
  })
  
  return (
    <NativeBaseProvider theme={customTheme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      { fontsLoaded ? <Recover /> : <Loading /> }
    </NativeBaseProvider>
  )
}
