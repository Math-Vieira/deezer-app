import { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeContract, darkTheme } from '../themes/themes'
import { Props, GlobalContextInterface } from './model'
import GlobalStyle from '../themes/GlobalStyle'

const initialContext: GlobalContextInterface = {
  favoriteTracks: []
}

export const GlobalContext = createContext<GlobalContextInterface>(initialContext)

const GlobalContextProvider = ({ children }: Props): JSX.Element => {
  const [favoriteTracks, setFavoriteTracks] = useState<any[]>([])
  const [theme, setTheme] = useState<ThemeContract>(darkTheme)

  return (
    <GlobalContext.Provider
      value={{
        favoriteTracks,
        setFavoriteTracks,
        setTheme
      }}
    >
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
