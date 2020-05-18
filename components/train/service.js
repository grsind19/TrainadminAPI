const Train = require('./schema')
const _ = require("lodash")

const getTrain = async (data)=>{
  try {
    const train = await Train.find({_id: data.trainId})
    return train;
  } catch (error) {
    return error
  }
}

const getTrains = async (data)=>{
  try {
    const trains = await Train.find(data)
    return trains;
  } catch (error) {
    throw error
  }
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

const updateTrain = async (data)=>{
  try {
    const update = _.omit(data, 'trainId')
    const train = await Train.findOneAndUpdate({_id: data.trainId}, update, {new: true})
    return train;
  } catch (error) {
    throw error
  }
}

exports.getTrain = getTrain
exports.getTrains = getTrains
exports.addTrain = addTrain
exports.updateTrain = updateTrain