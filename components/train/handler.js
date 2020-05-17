
const controller = require('./controller')
const logger = require('../../utilities/logger')

const getTrain = async (req, res, next)=>{
  try {
    const result = await controller.getTrain(req.body);
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const getTrains = async (req, res, next)=>{
  try {
    const result = await controller.getTrains(req.body);
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const addTrain = async (req, res, next)=>{
  try {
    const train = await controller.addTrain(req.body);
    res.json(train)
  } catch (error) {
    next(error)
  }
}

const updateTrain = async (req, res, next)=>{
  try {
    const result = await controller.updateTrain(req.body);
    res.json(result)
  } catch (error) {
    next(error)
  }
}

exports.getTrain = getTrain
exports.getTrains = getTrains
exports.addTrain = addTrain
exports.updateTrain = updateTrain