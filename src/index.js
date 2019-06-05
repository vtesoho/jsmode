// //不带参数的形式
// @testDec
// class Demo {

// }

// function testDec(target){
//   target.isDec = true
// }

// alert(Demo.isDec)


// //带参数的形式
// function testDec(isDec) {
//   return function (target) {
//     target.isDec = isDec
//   }
// }

// @testDec(false)
// class Demo {

// }

// alert(Demo.isDec)


// //mixin装饰
// function mixins(...list) {
//   return function (target) {
//     Object.assign(target.prototype, ...list)
//   }
// }

// const Foo = {
//   foo() {
//     console.log('foo')
//   }
// }

// @mixins(Foo)
// class MyClass{

// }

// let obj = new MyClass()
// obj.foo()

// //例一，通过装饰器来给方法设置只读属性

// function readonly(target, name, descriptor) {
//   console.log(target)
//   console.log(name)
//   console.log(descriptor)
//   // descriptor 属性描述对象(Object.defineProperty中会用到)，原来的值如下
//   // {
//   //   value: specifiedFunction,
//   //   eunmerable: false, //是否可枚举
//   //   configurable: true, //是否可配置 
//   //   writable: true,  //是否可修改
//   // }
//   descriptor.writable = false
//   return descriptor
// }

// class Person{
//   constructor(){
//     this.first = "A"
//     this.last = "B"
//   }

//   @readonly
//   name() {
//     return `${this.first} ${this.last}`
//   }
// }

// var p = new Person()
// console.log(p.name())
// p.name = function(){}  //这里会报错，因为是只读


// // 例二，通过装饰器给方法打印log
// function log(target, name, descriptor){
//   let oldValue = descriptor.value
//   descriptor.value = function () {
//     console.log(`calling ${name} width `,arguments)
//     return oldValue.apply(this, arguments)
//   }
//   return descriptor
// }

// class Math {
//   @log
//   add(a,b){
//     return a+b
//   }
// }

// let math = new Math()
// const result = math.add(2,4)
// console.log(`result ${result}`)


// // 一个比较好用的装饰器的库，实现了常用的装饰功能，可以直接用core-descriptor
// import {readonly} from 'core-decorators'
// class Person{
//   @readonly
//   name(){
//     return 'zhang san'
//   }
// }

// let p = new Person()
// console.log(p.name())
// p.name = function(){}

//  // 一个提示废弃的装饰器
// import {deprecate} from 'core-decorators'
// class Person {
//   @deprecate('即将废弃',{url: 'www.baidu.com'})
//   name(){
//     return 'zhangsan'
//   }
// }

// let p = new Person()
// p.name()