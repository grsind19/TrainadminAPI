const Station = require('./schema')
const _ = require("lodash")

const getStation = async (data)=>{
  try {
    const station = await Station.find({_id: data.stationId})
    return station;
  } catch (error) {
    return error
  }
}

const getStations = async ()=>{
  try {
    const stations = await Station.find()
    return stations;
  } catch (error) {
    throw error
  }
}

const addStation = async (data)=>{
  try {
    const station = new Station(data)
    await station.save()
    return station;
  } catch (error) {
    throw error
  }
}

exports.getStation = getStation
exports.getStations = getStations
exports.addStation = addStation