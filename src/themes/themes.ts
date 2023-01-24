export interface ThemeContract {
  themeId: number
  mainColor: string
  secondaryColor: string
  tertiaryColor: string
  headerBackground: string
  headerBoxShadow: string
  textColor: {
    primaryColor: string
    secondaryColor: string
    tertiaryColor: string
  }
}

export const darkTheme: ThemeContract = {
  themeId: 1,
  mainColor: '#0B0B0B',
  secondaryColor: '#272727',
  tertiaryColor: '#747474',
  headerBackground: 'rgba(77, 77, 77, 0.7)',
  headerBoxShadow: '0px 2px 2px rgba(255, 255, 255, 0.25)',
  textColor: {
    primaryColor: '#FFFFFF',
    secondaryColor: '#929292',
    tertiaryColor: '#FFFFFF'
  }
}

export const lightTheme: ThemeContract = {
  themeId: 2,
  mainColor: '#FFFFFF',
  secondaryColor: '#D7D7D7',
  tertiaryColor: '#747474',
  headerBackground: 'rgba(255, 255, 255, 0.5)',
  headerBoxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
  textColor: {
    primaryColor: '#000000',
    secondaryColor: '#929292',
    tertiaryColor: '#FFFFFF'
  }
}
