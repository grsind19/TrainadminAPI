var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const StationSchema = new Schema({
  name :{
    type: String,
    unique: true,
    lowercase: true
  },
  code :{
    type: String,
    unique: true,
    lowercase: true
  }
});


StationSchema.plugin(uniqueValidator)
StationSchema.set('toJSON', {
  transform: function (doc, ret, options) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
  }
}); 

const Station = mongoose.model('Station', StationSchema)

module.exports = Station