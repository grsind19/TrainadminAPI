
const Joi = require('joi');
const promisify = require('util').promisify
const validate = promisify(Joi.validate).bind(Joi)
const service = require('./service')
const trainDataSchema = require('./validator')

const getTrain = async (data)=>{
  return data;
}

const getTrains = async (data)=>{
  return data;
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
  return data;
}

exports.getTrain = getTrain
exports.getTrains = getTrains
exports.addTrain = addTrain
exports.updateTrain = updateTrain