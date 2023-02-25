const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const server = express()
const PORT = config.get('port')

async function start() {
  try {
    await mongoose.connect(config.get('URLmongo'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    server.listen(PORT, () => console.log('Server has been to  port', PORT))
  } catch (e) {
    console.log('Server error', e.message)
    process.exit(1)
  }
}
start()
