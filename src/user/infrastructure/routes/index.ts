import { Router } from 'express'
import { UserUseCase } from '../../aplication/user.useCase'
import { UserController } from '../controller/user.controller'
import { MockRepository } from '../repository/mock.repository'

const route = Router()

/**
 * Init Repositories
 */
const userRepository = new MockRepository()

/**
 * Init Use Cases
 */
const userUseCase = new UserUseCase(userRepository)

/**
 * Init Use Controllers
 */
const userController = new UserController(userUseCase)

route
  .get('/user', userController.getUsers)
  .post('/user', userController.createUser)

export default route
