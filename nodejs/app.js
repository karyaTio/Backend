const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogger', (arg) => {
    console.log("Listener Called ", arg);
});

logger.log("Tio Saputra");