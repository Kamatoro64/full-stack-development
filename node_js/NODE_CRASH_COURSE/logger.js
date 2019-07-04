const EventEmitter = require('events');
const uuid = require('uuid');


class Logger extends EventEmitter {
	log(msg) {
		// Call event
		this.emit('message', { id: uuid.v4(), msg }) //msg same as msg:msg
	}
}

// Uncomment this line
//module.exports = Logger;

// Add lines below to separate index.js

//const Logger = require('./logger')

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener: ', data));

logger.log('Hello World')
logger.log('Bye')