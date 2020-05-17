
const Joi = require('joi');
const promisify = require("util").promisify
const Train = require('./schema')


const getTrain = async (data)=>{
  try {
    const data = await Train.find({})
  } catch (error) {
    return error
  }
}

const getTrains = (data)=>{
  console.log(req.requestId);
  res.send("success")
}

const addTrain = async (data)=>{
  try {
    const train = new Train(data)
    await train.save()
    return train;
  } catch (error) {
    throw error
  }
}

const updateTrain = (data)=>{
  
}

exports.getTrain = getTrain
exports.getTrains = getTrains
exports.addTrain = addTrain
exports.updateTrain = updateTrain