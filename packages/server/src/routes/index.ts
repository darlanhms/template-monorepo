import express from 'express'

const defaultRouter = express.Router()

defaultRouter.get(
  '/',
  async (request: express.Request, response: express.Response) => {
    return response.send('O server ta foda parceiro')
  }
)

export default defaultRouter
