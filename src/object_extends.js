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

class Student extends Person{
  construtor(name,age,number) {
    super(name,age)
    this.number = number
  }
  study() {
    console.log(`${this.name} study`)
  }
}

let xiaoming - new Stuent('xiaoming', 22, 'A1')
xiaoming.study()
xiaoming.eat()
xiaoming.speak()