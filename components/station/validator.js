
const Joi = require('joi');
const stationDataSchema = Joi.object().keys({
  name: Joi.string().required().error(()=>'Station name is required'),
  code: Joi.string().required().error(()=>'Station code is required'),
})

module.exports = stationDataSchema