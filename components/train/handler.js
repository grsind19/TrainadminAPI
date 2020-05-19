
const controller = require('./controller')
const logger = require('../../utilities/logger')
const redis = require('../../redis/init')

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
    const query = req.query.currentStation ?  {currentStation:req.query.currentStation.toLowerCase()} : {}
    const result = await controller.getTrains(query);
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const addTrain = async (req, res, next)=>{
  try {
    const train = await controller.addTrain(req.body);
    redis.updateStation({action:"add", data: train});
    res.json(train)
  } catch (error) {
    next(error)
  }
}

const updateTrain = async (req, res, next)=>{
  try {
    Object.assign(req.body, req.params);
    const result = await controller.updateTrain(req.body);
    redis.updateStation({action:"update", data: result});
    res.json(result)
  } catch (error) {
    next(error)
  }
}

exports.getTrain = getTrain
exports.getTrains = getTrains
exports.addTrain = addTrain
exports.updateTrain = updateTrain