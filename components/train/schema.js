var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const TrainSchema = new Schema({
  name :{
    type: String,
    unique: true,
    required: true,
    lowercase: true, 
    trim: true
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
    required: true,
    lowercase: true
  },
  isRunning: {
    type: Boolean,
    default: true
  }
});

TrainSchema.plugin(uniqueValidator)
TrainSchema.set('toJSON', {
  transform: function (doc, ret, options) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
  }
}); 

const Train = mongoose.model('Train', TrainSchema)


module.exports = Train