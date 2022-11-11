const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()

const { NODE_ENV, PORT } = process.env

app.get('/api/health', (req, res, next) => res.status(200).json('ok'))

NODE_ENV === 'production'
  ? app.use(morgan('combined'))
  : app.use(morgan('dev'))

app.use(bodyParser.json())

app.use('/api', require('./routes'))

app.use((req, res, next) => {
  const error = new Error('Route not found')
  error.status = 404
  return next(error)
})

app.use((err, req, res, next) => {
  console.error(err)
  const message = err.message || 'Internal server error'
  const statusCode = err.status || 500
  return res.status(statusCode).json({ error: message })
})

app.listen(PORT, err => {
  if (err) {
    console.error(err)
    process.exit()
  }
  console.log(`Listening -> ${PORT}`)
})
