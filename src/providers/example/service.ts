import { AxiosInstance } from 'axios'
import { User } from './types'
import { usersMock } from '../../mocks/users'

export class ExampleService {
  constructor(private api: AxiosInstance) {}

  async getUsers(): Promise<User[]> {
    usersMock(this.api)
    const response = await this.api.get<User[]>('/users')
    return response.data
  }
}
