
const Joi = require('joi');
const promisify = require('util').promisify
const validate = promisify(Joi.validate).bind(Joi)
const service = require('./service')
const trainDataSchema = require('./validator')

const getTrain = async (data)=>{
  try {
    const trains = await service.getTrain(data);
    return trains;
  } catch (error) {
    throw error
  }
}

const getTrains = async (data)=>{
  try {
    const trains = await service.getTrains(data);
    return trains;
  } catch (error) {
    throw error
  }
}

const addTrain = async (data)=>{
  try {
    await validate(data, trainDataSchema);
    const train = await service.addTrain(data);
    return train;
  } catch (error) {
    throw error
  }
}

const updateTrain = async (data)=>{
  try {
    const train = await service.updateTrain(data);
    return train;
  } catch (error) {
    throw error
  }
}

exports.getTrain = getTrain
exports.getTrains = getTrains
exports.addTrain = addTrain
exports.updateTrain = updateTrain