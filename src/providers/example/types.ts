export interface User {
  id: number
  name: string
  email: string
  status: UserStatus
}

export type UserStatus = 'online' | 'offline'
