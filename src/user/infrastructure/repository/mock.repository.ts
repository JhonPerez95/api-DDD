import { UserEntity } from 'user/domain/user.entity'
import { UserRepository } from 'user/domain/user.repository'

const MOCK_USER = {
  name: 'Jhon Perez',
  email: 'jhon@gmail.com',
  description: 'description',
  uuid: String(new Date().getDate()),
}
export class MockRepository implements UserRepository {
  findUserById = async (userId: string): Promise<UserEntity | null> => {
    const userDB = MOCK_USER
    return userDB
  }

  registerUser = async (user: UserEntity): Promise<UserEntity> => {
    const userDb = user
    return userDb
  }

  listUsers = async (): Promise<UserEntity[]> => {
    const userList = new Array(10).fill(MOCK_USER)
    return userList
  }
}
