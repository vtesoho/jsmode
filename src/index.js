// class Iterator{
//   constructor(container){
//     this.list = container.list
//     this.index = 0
//   }
//   next() {
//     if(this.hasNext()) {
//       return this.list[this.index++]
//     }
//   }
//   hasNext(){
//     if(this.index >= this.list.length){
//       return false
//     }
//     return true
//   }
// }


// class Container{
//   constructor(list){
//     this.list = list
//   }
//   getIterator(){
//     return new Iterator(this)
//   }
// }

// let arr = [1,2,3,4,5,6]
// let container = new Container(arr)
// let iterator = container.getIterator()
// while(iterator.hasNext()) {
//   console.log(iterator.next())
// }




function each(data){
  // // 基础版本
  // let iterator = data[Symbol.iterator]()

  // let item = {done:false}
  // while(!item.done){
  //   item = iterator.next()
  //   if(!item.done) {
  //     console.log(item.value)
  //   }
  // }

  //简化版本
  for (const item of data) {
    console.log(item)
  }
}


let arr = [1,3,4,5,5,56]
let nodeList = document.getElementsByTagName('p')
let m = new Map()
m.set('a',100)
m.set('b',200)

each(nodeList)
each(arr)
each(m)