import { extendTheme } from 'native-base'

export const customTheme = extendTheme({
  colors: {
    bg: {
      900: '#100B04',
      800: '#181C1F',
    },
    primary: {
      700: '#A26115',
      500: '#F78605',
    },
    text: {
      400: '#6B7280',
      100: '#EBEBEB',
    }
  },
  fontConfig: {
    Exo: {
      300: {
        normal: 'Exo_300Light'
      },
      500: {
        normal: 'Exo_500Medium'
      },
      700: {
        normal: 'Exo_700Bold'
      },
    }
  },
  fonts: {
    heading: 'Exo',
    subheading: 'Exo',
    body: 'Exo',
  },
  fontSizes: {
    caption: 12,
    body_2: 14,
    body_1: 16,
    subheading: 20,
    heading_3: 24,
    heading_2: 28,
    heading_1: 36,
  },
})

type CustomThemeType = typeof customTheme

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}