import express from 'express'
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware'
import { productRouter } from './routes'

const app = express()

app.use(productRouter)
app.use(errorHandlerMiddleware)
app.use('/', (_req, res) => res.sendStatus(201))



export default app