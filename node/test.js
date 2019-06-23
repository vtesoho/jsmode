const EventEmitter = require('events').EventEmitter

const emitter1 = new EventEmitter()

emitter1.on('some', info => {
  console.log('fn1', info)
})
emitter1.on('some', info => {
  console.log('fn2', info)
})

emitter1.emit('some', 'xxxxxx')

const EventEmitter = require('events').EventEmitter
class Dog extends EventEmitter{
  constructor(name) {
    super()
    this.name = name
  }
}

let simon = new Dog('simon')
simon.on('bark', function(){
  console.log(this.name, 'barked')
})

setInterval(function () {
  simon.emit('bark')
},1000)

const fs = require('fs')
const readStream = fs.createReadStream('./data.txt')

let length = 0
readStream.on('data', function(chunk) {
  let len = chunk.toString().length
  console.log('len', len)
  length += len
})

readStream.on('end', function() {
  console.log('length', length)
})