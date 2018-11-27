
const EventEmitter = require('events');

const myEmmiter = new EventEmitter();

myEmmiter.on('messageLogger', (arg) => {

    console.log('Hai !!', arg);
    
});

myEmmiter.emit('messageLogger', { id: 1, name : "Tio Saputra"});