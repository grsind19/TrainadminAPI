
const controller = require('./controller')
const logger = require('../../utilities/logger')

const getStation = async (req, res, next)=>{
  try {
    Object.assign(req.body, req.params);
    const result = await controller.getStation(req.body);
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const getStations = async (req, res, next)=>{
  try {
    const result = await controller.getStations(req.body);
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const addStation = async (req, res, next)=>{
  try {
    const train = await controller.addStation(req.body);
    res.json(train)
  } catch (error) {
    next(error)
  }
}


exports.getTrain = getStation
exports.getTrains = getStations
exports.addTrain = addStation