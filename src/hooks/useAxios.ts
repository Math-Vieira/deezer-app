import { useState } from 'react'
import axios, { RawAxiosRequestHeaders, AxiosResponse } from 'axios'

export interface RequestStates {
  data: object | null
  error: object | null
  loading: boolean | null
}

interface Request {
  url: string
  method: string
  body?: object | null
  headers?: RawAxiosRequestHeaders
}

interface UseAxios extends RequestStates {
  setData: React.Dispatch<React.SetStateAction<object | null>>
  setError: React.Dispatch<React.SetStateAction<object | null>>
  setLoading: React.Dispatch<React.SetStateAction<boolean | null>>
  request: ({ url, method, body, headers }: Request) => Promise<Boolean>
}

const API = '............'
axios.defaults.baseURL = API

const useAxios = (): UseAxios => {
  const [data, setData] = useState<RequestStates['data']>(null)
  const [error, setError] = useState<RequestStates['error']>(null)
  const [loading, setLoading] = useState<RequestStates['loading']>(null)

  const request = async ({
    url,
    method,
    body = null,
    headers = {
      'Content-Type': 'application/json'
    }
  }: Request): Promise<Boolean> => {
    let successRequest: boolean
    try {
      setLoading(true)
      setError(null)
      setData(null)
      const response: AxiosResponse<any, any> = await axios(url, {
        method,
        headers,
        data: body
      })
      setData(response.data)
      successRequest = true
    } catch (err: any) {
      successRequest = false
      setError(err)
    }
    return successRequest
  }
  return { data, error, loading, request, setData, setError, setLoading }
}

export default useAxios
