const express = require('express')
var bodyParser = require('body-parser')
const requestId = require('./middlewares/requestId')
const errorHandler = require('./middlewares/errorhandler')
const TrainRoutes = require('./components/train/route')

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express()

//Adding request parsers
app.use(jsonParser)
app.use(urlencodedParser)
//Adding Middleware
app.use(requestId)


//setup routes
app.use('/train',TrainRoutes)

//Adding error handler
app.use(errorHandler)

module.exports = app