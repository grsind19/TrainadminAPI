const express = require("express")
const router = express.Router()
const handler=require('./handler')

router.get('/train/:trainId', handler.getTrain)
router.post('/train', handler.addTrain)
router.put('/train/:trainId', handler.updateTrain)

const routes = function(app){
  

}