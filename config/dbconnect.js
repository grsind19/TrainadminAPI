
const mongoose = require('mongoose')
exports.init = () => {
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);
  mongoose.set('useUnifiedTopology', true);
  mongoose.connect('mongodb://localhost:27017/myapp')
    .then((data) => {
      console.log("Database connection successfull")
    })
    .catch(e => {
      console.log("Database connection failed")
    })
}