const express = require('express')
const eventsRouter = require('./events.router')

function routerApi(app){
    const router = express.Router()

    app.use('/api/v1', router)

    router.use('/event', eventsRouter)
}

module.exports = routerApi