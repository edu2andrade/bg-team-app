import { extendTheme } from 'native-base'

export const THEME = extendTheme(
  {
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
    fontSizes: {
      caption: 12,
      body_2: 14,
      body_1: 16,
      subheading: 20,
      heading_3: 24,
      heading_2: 28,
      heading_1: 36,
    },
  }
)