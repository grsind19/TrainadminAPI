
const logger  = require('./../utilities/logger')

module.exports = (err, req, res, next)=>{
    //console.error(err.stack)
    const data = {
      requestId: req.requestId,
      method: req.method,
      url: req.url,
      input: req.body
    }
    logger.info(req.url, data)
    res.status(500).send(err.message)
}