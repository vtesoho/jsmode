var num = 0,i=0,a=0,arr = new Array(5)
function dg(){
  num = Math.floor(Math.random() * (2 - 32)) + 32
  if(arr[a] === num &&  a < arr.length){
    a++
    dg()
  }
  if(arr[i] === undefined && i < arr.length){
    arr[i] = num
    a=0
    i++
    dg()
  }
}


for (let index = 0; index < 10; index++) {
  dg()
  console.log(arr)

  arr[0] = undefined
  arr[1] = undefined
  arr[2] = undefined
  arr[3] = undefined
  arr[4] = undefined
  
}