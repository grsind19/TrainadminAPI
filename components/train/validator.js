
const Joi = require('joi');
const trainDataSchema = Joi.object().keys({
  name: Joi.string().required().error(()=>'Train name is required'),
  from: Joi.string().required().error(()=>'From station is required'),
  to: Joi.string().required().error(()=>'To station is required'),
  currentStation: Joi.string().required().error(()=>'Current station is required'),
  isRunning: Joi.boolean().default(true)
})

module.exports = trainDataSchema