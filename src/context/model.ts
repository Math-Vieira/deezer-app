import { ThemeContract } from '../themes/themes'

export interface Props {
  children: React.ReactNode
}

export interface GlobalContextInterface {
  favoriteTracks: any[]
  setFavoriteTracks?: React.Dispatch<React.SetStateAction<any[]>>
  toggleTheme?: () => void
  themeId?: number
}
