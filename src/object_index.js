class Person{
  construtor(name, age){
    this.name = name
    this.age = age
  }
  eat() {
    console.log(`${this.name} eat something`)
  }
  speak() {
    console.log(`My name is ${this.name}, age ${this.age}`)
  }
}


let zhang = new Person('zhang',20)
zhang.eat()
zhang.speak()

let wang = new Person('wang', 20)
wang.eat()
wang.speak()