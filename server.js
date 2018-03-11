const express = require('express')
const morgan = require('morgan')

const PORT = 1337

const app = express()

app.use(express.static('dist'))

app.use(morgan('tiny'))

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})