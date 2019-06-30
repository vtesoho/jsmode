import StateMachine from 'javascript-state-machine'

let fsm = new StateMachine({
  init: 'pending',
  transitions: [
    {
      name: 'resolve',
      from: 'pending',
      to: 'fullfilled'
    },
    {
      name: 'reject',
      from: 'pending',
      to: 'rejected'
    }
  ],
  methods: {
    onResolve: function(state,data) {
      data.succesList.forEach(fn => fn())
    },
    onReject: function(state,data) {
      data.failList.forEach(fn => fn())
    }
  }
})

class MyPromise{
  constructor(fn) {
    this.succesList = []
    this.failList = []
    fn(function (){
      fsm.resolve(this)

    },function(){
      fsm.reject(this)
    })
    
  }
  then(succesFn,failFn){
    this.succesList.push(succesFn)
    this.failList.push(failFn)

  }
}

function loadImg(src) {
  const promise = new Promise(function (resolve,reject) {
    let img = document.createElement('img')
    img.onload = function(){
      resolve(img)
    }
    img.onerror = function (){
      reject()
    }
    img.src = src
  })
  return promise
}

let src = 'http://192.168.1.1/img.png'

let result = loadImg(src)

result.then(function (){
  console.log('ok1')
},function (){
  console.log('fail1')
})

result.then(function (){
  console.log('ok2')
},function (){
  console.log('fail2')
})




