import 'dotenv/config'

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import UserRoutes from './user/infrastructure/routes'
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

const port = process.env.PORT || 3030

// Router
app.use('/api', UserRoutes)
app.listen(port, () => {
  console.log(`Server listening on ${port}`)
})
