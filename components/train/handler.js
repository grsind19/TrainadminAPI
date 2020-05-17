const getTrain = (req, res, next)=>{
  console.log(req.requestId);
  res.send("success")
}

const getTrains = (req, res, next)=>{
  console.log(req.requestId);
  res.send("success")
}

const addTrain = (req, res, next)=>{

}

const updateTrain = (req, res, next)=>{
  
}

exports.getTrain = getTrain
exports.getTrains = getTrains
exports.addTrain = addTrain
exports.updateTrain = updateTrain