export interface ThemeContract {
  mainColor: string
  secondaryColor: string
  tertiaryColor: string
  textColor: {
    primaryColor: string
    secondaryColor: string
  }
}

export const darkTheme: ThemeContract = {
  mainColor: '#0B0B0B',
  secondaryColor: '#272727',
  tertiaryColor: '#747474',
  textColor: {
    primaryColor: '#FFFFFF',
    secondaryColor: '#929292'
  }
}
// export const lightTheme = {}
