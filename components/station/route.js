const express = require("express")
const Router = express.Router
const handler=require('./handler')
const router = new Router()

router.get('/', handler.getTrains)
router.get('/:stationId', handler.getTrain)
router.post('/', handler.addTrain)


module.exports = router