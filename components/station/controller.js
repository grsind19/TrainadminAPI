
const Joi = require('joi');
const promisify = require('util').promisify
const validate = promisify(Joi.validate).bind(Joi)
const service = require('./service')
const stationDataSchema = require('./validator')


const getStation = async (data)=>{
  try {
    const stations = await service.getStation(data);
    return stations;
  } catch (error) {
    throw error
  }
}

const getStations = async (data)=>{
  try {
    const stations = await service.getStations(data);
    return stations;
  } catch (error) {
    throw error
  }
}

const addStation = async (data)=>{
  try {
    await validate(data, stationDataSchema);
    const station = await service.addStation(data);
    return station;
  } catch (error) {
    throw error
  }
}

exports.getStation = getStation
exports.getStations = getStations
exports.addStation = addStation