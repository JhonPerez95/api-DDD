import { Request, Response } from 'express'
import { UserUseCase } from '../../aplication/user.useCase'

export class UserController {
  constructor(private userUseCase: UserUseCase) {}

  public getUsers = async (req: Request, res: Response) => {
    const userList = await this.userUseCase.getUsers()

    console.log('Use case')
    console.log(userList)

    return res.status(200).json({ msg: 'data is successfully', data: userList })
  }

  public createUser = async (req: Request, res: Response) => {
    const { body } = req
    const userDb = await this.userUseCase.registerUser(body)
    return res
      .status(200)
      .json({ msg: 'user is successfully registered', data: userDb })
  }
}
