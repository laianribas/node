const { EventEmitter } = require('events')

const ev = new EventEmitter()

ev.on('saySomething', (Message = '') => console.log(`Eu ouvi você: ${Message}`))

ev.emit('saySomething')
ev.emit('saySomething', 'Laian')