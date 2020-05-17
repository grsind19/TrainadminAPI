const express = require('express')
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express()

//Adding request parsers
app.use(jsonParser)
app.use(urlencodedParser)