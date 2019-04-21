//仅仅是用于演示封装的特性，所以没必要安装typescript的相关扩展，写完之后到http://www.typescriptlang.org/play/index.html去转义

class Person{
  name
  age
  protected weight
  constructor(name, age){
    this.name = name
    this.age = age
    this.weight = 120
  }
  eat() {
    console.log(`${this.name} eat something`)
  }
  speak() {
    console.log(`My name is ${this.name}, age ${this.age}`)
  }
}

class Student extends Person{
  number
  private girlfriend
  constructor(name,age,number) {
    super(name,age)
    this.number = number
    this.girlfriend = 'lili'
  }
  study() {
    console.log(`${this.name} study`)
  }
  getWeight() {
    console.log(`weight ${this.weight}`)
  }
}


let xiaoming = new Student('xiaoming', 10, 'A1')
xiaoming.getWeight()
// xiaoming.weight    报错
// xiaoming.girlfriend()  报错

封装代码在 `/src/object_packaging.js`  运行不了，仅用于代码讲解