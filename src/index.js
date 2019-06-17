let star = {
  name: '李xx',
  age: 22,
  phone: 'star13311112222',
  privacy: '明星的艳照',
}
//经纪人
let agent = new Proxy(star, {
  get: function(target, key) {
    if(key === 'phone'){
      return 'agent13344445555'
    }
    if(key === 'price'){
      return 120000
    }
    if(key === 'privacy'){
      return '经纪人不可能给你看'
    }
    return target[key]
  },
  set: function(target, key, val) {
    if(key === 'customPrice'){
      if(val < 100000){
        throw new Error('价格太低')
      }else {
        target[key] = val
        return true
      }
    }
  }
})


console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.privacy)
console.log(agent.price)
agent.customPrice = 150000
console.log(agent.customPrice)


agent.customPrice = 90000
console.log(agent.customPrice)