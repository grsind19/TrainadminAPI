var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const StationSchema = new Schema({
  name :{
    type: String,
    unique: true
  }
});

const Station = mongoose.model('Station', StationSchema)

module.exports = Station