import { UserEntity } from './user.entity'

export interface UserRepository {
  findUserById(userId: string): Promise<UserEntity | null>

  registerUser(user: UserEntity): Promise<UserEntity | null>

  listUsers(): Promise<UserEntity[] | null>
}
