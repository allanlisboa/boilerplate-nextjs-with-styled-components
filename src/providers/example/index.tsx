import React, { useContext } from 'react'
import { ExampleService } from './service'
import { ApiProvider, ApiContext } from '../api'

export const ExampleContext = React.createContext<ExampleService>(
  {} as ExampleService
)

export const ExampleProvider: React.FC = ({ children }) => {
  const api = useContext(ApiContext)
  return (
    <ApiProvider>
      <ExampleContext.Provider value={new ExampleService(api)}>
        {children}
      </ExampleContext.Provider>
    </ApiProvider>
  )
}
