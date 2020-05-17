var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TrainSchema = new Schema({
  name :{
    type: String,
    unique: true
  },
  from: {
    type: String
  },
  to: {
    type: String
  },
  currentStation: {
    type: String
  },
  isRunning: {
    type: Boolean
  }
});

const Train = mongoose.model('Train', TrainSchema)

module.exports = Train