import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { User } from 'providers/example/types'

export const usersMock = (api: AxiosInstance) => {
  const mock = new MockAdapter(api)
  mock.onGet('/users').reply(200, [
    {
      id: 1,
      name: 'Allan Lisba',
      email: 'allan.costa@gok.digital',
      status: 'online'
    },
    {
      id: 2,
      name: 'Allan Lisba',
      email: 'allan.costa@gok.digital',
      status: 'online'
    },
    {
      id: 3,
      name: 'Allan Lisba',
      email: 'allan.costa@gok.digital',
      status: 'online'
    },
    {
      id: 4,
      name: 'Allan Lisba',
      email: 'allan.costa@gok.digital',
      status: 'online'
    }
  ] as User[])

  return mock
}
