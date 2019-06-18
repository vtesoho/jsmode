class Business {
  constructor(name){
    this.name = name
  }
  approve(){
    console.log(`${this.name} 办理工商营业执照`)
  }
}

class Tax {
  constructor(name){
    this.name = name
  }
  approve(){
    console.log(`${this.name} 办理税务证`)
  }
}

class Facade{
  constructor(name){
    this.name = name
  }
  start(){
    console.log(`${this.name} 开始办理手续`)
    let ic = new Business(this.name)
    let tax = new Tax(this.name)
    ic.approve()
    tax.approve()
    console.log(`${this.name} 各种手续办理完毕`)
  }
}

let state = new Facade('张三')
state.start()