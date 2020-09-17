const express = require('express')
const server = express()

const statesRouter = require('../states/statesRouter')

server.use(express.json())
server.use('/api/states', statesRouter)

module.exports = server



