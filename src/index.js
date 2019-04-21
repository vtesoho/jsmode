class Person{
  constructor(name, age){
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

class Student extends Person{
  constructor(name,age,number) {
    super(name,age)
    this.number = number
  }
  study() {
    console.log(`sdfd ${this.name} study`)
  }
}

let xiaoming = new Student('xiaoming', 22, 'A2')
xiaoming.eat()
xiaoming.speak()
xiaoming.study()
console.log(`number ${xiaoming.number}`)