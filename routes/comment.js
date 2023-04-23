import express from 'express'

const commentsRouter = express.Router()

commentsRouter.route('/api/test').post((req, res) => {
  res.status(500).json({status: true})
})

export default commentsRouter