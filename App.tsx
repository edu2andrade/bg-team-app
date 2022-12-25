import { Text, View } from 'react-native';
import { useFonts } from 'expo-font'

export default function App() {
  const [ fontsLoaded ] = useFonts({
    'Anek-Gurmukhi': require('./assets/fonts/AnekGurmukhi.ttf') 
  })
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {fontsLoaded ? <Text style={{ fontFamily: 'Anek-Gurmukhi', fontSize: 24 }}>BG Team App</Text> : <View />}
    </View>
  );
}
