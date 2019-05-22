function loadImg(src) {
  let promise = new Promise(function(resolve,reject) {
    let img = document.createElement('img')
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      reject('图片加载失败')
    }
    img.src = src
  })
  return promise
}

let src = 'https://www.baidu.com/img/bd_logo1.png?where=super'
let result = loadImg(src)

result.then((img) => {
  console.log(`width: ${img.width}`)
  return img
}).then((img) => {
  console.log(`height: ${img.height}`)
}).catch((e) => {
  console.log(e)
})