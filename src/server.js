const express = require('express')
const app = express()
const router = require('./routes')

app.use(express.json())

app.use('/api', router)

app.use((req, res) => {
  res.status(400).json({ 'Never gonna give you up': 'Never gonna let you down' })
})

module.exports = app
