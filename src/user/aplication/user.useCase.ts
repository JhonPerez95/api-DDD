import { UserEntity } from '../domain/user.entity'
import { UserValue } from '../domain/user.value'
import { UserRepository } from '../domain/user.repository'

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public registerUser = async (userIn: UserEntity) => {
    const userValue = new UserValue(userIn)
    const userDB = await this.userRepository.registerUser(userValue)
    return userDB
  }

  public getUsers = async () => {
    const userList = await this.userRepository.listUsers()
    return userList
  }

  public getUserById = async (email: string) => {
    const userDb = await this.userRepository.findUserById(email)
    return userDb
  }
}
