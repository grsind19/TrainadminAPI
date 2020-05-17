var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const TrainSchema = new Schema({
  name :{
    type: String,
    unique: true,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  currentStation: {
    type: String,
    required: true
  },
  isRunning: {
    type: Boolean,
    default: true
  }
});

TrainSchema.plugin(uniqueValidator)

const Train = mongoose.model('Train', TrainSchema)


module.exports = Train