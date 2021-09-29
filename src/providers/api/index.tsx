import React, { useMemo, createContext } from 'react'
import axios, { AxiosInstance } from 'axios'

export const ApiContext = createContext<AxiosInstance>({} as AxiosInstance)

export const ApiProvider: React.FC = ({ children }) => {
  const token = 'token'
  const axiosInstance = useMemo(() => {
    return axios.create({
      baseURL: 'https://api.com.br',
      headers: token
        ? {
            Authorization: 'Bearer ' + token
          }
        : new Headers()
    })
  }, [token])

  return (
    <ApiContext.Provider value={axiosInstance}>{children}</ApiContext.Provider>
  )
}
