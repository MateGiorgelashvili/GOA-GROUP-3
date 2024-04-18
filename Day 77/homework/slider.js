//buttons
const back = document.getElementById("back")
const next = document.getElementById("next")

//slider image 
const img = document.getElementById("img")

//array of images
const images = ["./imgs/1.png","./imgs/2.png","./imgs/3.png"]

//counting for image index
let count = 0

//adding event listeners on buttons

//next image button
next.addEventListener("click", ()=>{
  count += 1
  img.src = images[count]
  if(count >= images.length){
    count = 0
    img.src = images[count]
  }
})

//prev image button
back.addEventListener("click", ()=>{
  count -= 1
  if(count < 0){
    count = images.length - 1
  }
  img.src = images[count]
})