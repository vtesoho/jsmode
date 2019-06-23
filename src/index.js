class Subject{
  constructor(){
    this.state = 0
    this.observers = []
  }
  getState(){
    return this.state
  }
  setState(state){
    this.state = state
    this.notifyAllobservers()
  }
  notifyAllobservers(){
    this.observers.forEach(observer => {
      observer.updata()
    })
  }
  attach(observer){
    this.observers.push(observer)
  }
}

class Observer{
  constructor(name,subject){
    this.name = name
    this.subject = subject
    this.subject.attach(this)
  }
  updata(){
    console.log(`${this.name} updata, state: ${this.subject.getState()}`)
  }
}

let s = new Subject()
let o1 = new Observer('01', s)
let o2 = new Observer('02', s)
let o3 = new Observer('03', s)

s.setState(1)
s.setState(2)
s.setState(3)


function loadImg(src) {
  var promise = new Promise(function(resolve,reject) {
    var img = document.createElement('img')
    img.onload = function(){
      resolve(img)
    }
    img.onerror = function(){
      reject('图片加载失败')
    }
    img.src = src
  })
  return promise
}

var src = 'https://www.baidu.com/img/bd_logo1.png'
var result = loadImg(src)
result.then(function (img) {
  console.log('width', img.width)
  return img
}).then(function (img) {
  console.log('height', img.height)
})

var callbacks = $.Callacks()
callbacks.add(function(info) {
  console.log('fn1',info)
})
callbacks.add(function(info) {
  console.log('fn2',info)
})
callbacks.add(function(info) {
  console.log('fn3',info)
})
callbacks.fire('gogogo')
callbacks.fire('fire')