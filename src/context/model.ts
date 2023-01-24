import { ThemeContract } from '../themes/themes'

export interface Props {
  children: React.ReactNode
}

export interface GlobalContextInterface {
  favoriteTracks: any[]
  setFavoriteIds?: React.Dispatch<React.SetStateAction<number[]>>
  setFavoriteTracks?: React.Dispatch<React.SetStateAction<any[]>>
  setTheme?: React.Dispatch<React.SetStateAction<ThemeContract>>
}
