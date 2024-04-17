// const movingRight = setInterval(function(){
//   console.log("Move right");
//   clearInterval(movingRight)
// }, 2000)

// console.log(movingRight);


const child = document.getElementById("child-container");

let positionX = 0;
let positionY = 0
let right = true;
let bottom = false;

const moveRight = setInterval(function(){
  if(right == true){
    positionX++
    child.style.left = positionX + "px"
    if(positionX >= 300){
      right = false
    }
  }
  if(right == false && bottom == true){
    child.style.top = positionY +  "px"
    positionY--
  }
}, 1)