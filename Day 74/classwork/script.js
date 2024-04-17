let p = document.getElementById("p")
let btn = document.getElementById("btn")

let count = 0

function countA(){
  count += 1
  p.textContent = count
  if(count === 10){
    btn.removeEventListener("click", countA)
  }
}

btn.addEventListener("click", countA)


