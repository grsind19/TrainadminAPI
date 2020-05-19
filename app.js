const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/dbconnect')
const requestId = require('./middlewares/requestId')
const errorHandler = require('./middlewares/errorhandler')
const TrainRoutes = require('./components/train/route')
const StationRoutes = require('./components/station/route')

//connect to database
db.init()

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Initialise the express app
const app = express()

//Adding request parsers
app.use(jsonParser)
app.use(urlencodedParser)
//Adding Middleware
app.use(requestId)

//serve public html
app.use('/app',express.static('public'))

//setup routes
app.use('/train',TrainRoutes)
app.use('/station',StationRoutes)

//Adding error handler
app.use(errorHandler)

module.exports = app