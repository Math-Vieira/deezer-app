import { useState } from 'react'
import axios, { RawAxiosRequestHeaders, AxiosResponse } from 'axios'
import env from 'react-dotenv'

export interface RequestStates {
  data: any
  error: any
  loading: boolean | null
}

export interface Request {
  url: string
  method: string
  body?: object | null
  headers?: RawAxiosRequestHeaders
}

interface RequestReturn {
  success: boolean
  data: any
}
export interface UseAxios extends RequestStates {
  setData: React.Dispatch<React.SetStateAction<object | null>>
  setError: React.Dispatch<React.SetStateAction<object | null>>
  setLoading: React.Dispatch<React.SetStateAction<boolean | null>>
  request: (object: Request) => Promise<RequestReturn>
}

const API = env.BASE_URL || 'https://deezerconsumer.onrender.com'
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
  }: Request): Promise<RequestReturn> => {
    let successRequest: RequestReturn
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
      successRequest = { success: true, data: response.data }
    } catch (err: any) {
      successRequest = { success: false, data: err }
      setError(err)
    } finally {
      setLoading(false)
    }
    return successRequest
  }
  return { data, error, loading, request, setData, setError, setLoading }
}

export default useAxios
