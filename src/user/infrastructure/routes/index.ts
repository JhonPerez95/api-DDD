import { Router } from 'express'
import { UserUseCase } from '../../aplication/user.useCase'
import { UserController } from '../controller/user.controller'
import { MockRepository } from '../repository/mock.repository'
import { MongoRepository } from '../repository/mongo.repository'

const route = Router()

/**
 * Init Repositories
 */
// const userRepository = new MockRepository()
const userRepository = new MongoRepository()

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
  .get('/user/:id', userController.getUserById)

export default route
