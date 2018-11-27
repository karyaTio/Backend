const EventEmmiter = require('events');

class Logger extends EventEmmiter {

    log(message){

        console.log(message);
        
        
        this.emit('messageLogger', { id: 1, name : "Tio Saputra"});
    }

}



module.exports = Logger;