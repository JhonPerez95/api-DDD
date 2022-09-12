import { UserEntity } from 'user/domain/user.entity'
import { UserRepository } from 'user/domain/user.repository'
import UserModel from '../model/user.model'

export class MongoRepository implements UserRepository {
  findUserById = async (userId: string): Promise<UserEntity | null> => {
    const userDB = await UserModel.findOne<UserEntity>({ uiid: userId })
    return userDB
  }

  registerUser = async (user: UserEntity): Promise<any> => {
    const userDb = await UserModel.create(user)
    return userDb
  }

  listUsers = async (): Promise<any[]> => {
    const userList = await UserModel.find()
    return userList
  }
}
