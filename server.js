

const express = require('express')

const dataService = require('./data-service')

require('dotenv').config()

const app = express()


const port = process.env.PORT


app.use(express.static('public'))





dataService.initialize()
    .then(
        app.listen(port, () => {
            console.log(`Express http server listening on ${port}`)
        })
    )
    .catch(err => console.log(err))