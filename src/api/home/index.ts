import { Request } from '../../hooks/useAxios'

interface API {
  url: string
  config: {
    method: string
  }
}

export const API_SEARCH = (query: string, index: number): Request => {
  return {
    url: `search/${query}/tracks/10/${index}`,
    method: 'GET'
  }
}

export const API_CHART = (index: number): Request => {
  return {
    url: `/chart/tracks/10/${index}`,
    method: 'GET'
  }
}
