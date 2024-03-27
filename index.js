const winston = require('winston')
const {combine, timestamp, json, prettyPrint } = winston.format

/*const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
}; */

const logger = winston.createLogger({
    level: 'info',
    
    format: combine(
        timestamp(),
        json(),
        prettyPrint()
    ),
    defaultMeta: {service: 'user-service'},
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        new winston.transports.File({filename: 'index.log'}),
    ]
});



logger.error({
    level:'error',
    message: 'this comment is danger'
})

logger.info('success the logging')



