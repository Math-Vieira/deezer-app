export interface ThemeContract {
  mainColor: string
  secondaryColor: string
  tertiaryColor: string
  headerBackground: string
  headerBoxShadow: string
  textColor: {
    primaryColor: string
    secondaryColor: string
  }
}

export const darkTheme: ThemeContract = {
  mainColor: '#0B0B0B',
  secondaryColor: '#272727',
  tertiaryColor: '#747474',
  headerBackground: 'rgba(130, 130, 130, 0.11)',
  headerBoxShadow: '0px 2px 2px rgba(255, 255, 255, 0.25)',
  textColor: {
    primaryColor: '#FFFFFF',
    secondaryColor: '#929292'
  }
}
// export const lightTheme = {}
