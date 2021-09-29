/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext, useCallback } from 'react'
import { ExampleContext } from '../../providers/example'
import { User } from '../../providers/example/types'

export const useExamplePageController = () => {
  const exampleService = useContext(ExampleContext)
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getExampleUsers()
  }, [])

  const getExampleUsers = useCallback(async () => {
    try {
      setLoading(true)
      const response = await exampleService.getUsers()
      setUsers(response)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }, [exampleService])

  return {
    users,
    loading
  }
}
