import { ThemeContract } from '../themes/themes'

export interface Props {
  children: React.ReactNode
}

export interface GlobalContextInterface {
  favoriteIds: number[]
  favoriteTracks: object[]
  setFavoriteIds?: React.Dispatch<React.SetStateAction<number[]>>
  setFavoriteTracks?: React.Dispatch<React.SetStateAction<object[]>>
  setTheme?: React.Dispatch<React.SetStateAction<ThemeContract>>
}
