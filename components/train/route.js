const express = require("express")
const Router = express.Router
const handler=require('./handler')
const router = new Router()

router.get('/', handler.getTrains)
router.get('/:trainId', handler.getTrain)
router.post('/', handler.addTrain)
router.put('/:trainId', handler.updateTrain)

module.exports = router