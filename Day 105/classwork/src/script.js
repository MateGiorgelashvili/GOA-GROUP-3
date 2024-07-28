let pValue = document.querySelector("p")
let add = document.getElementById("add")
let substract = document.getElementById("substract")

add.addEventListener("click", (e)=>{
  e.preventDefault()
  pValue.textContent++
})

substract.addEventListener("click", (e)=>{
  e.preventDefault()
  pValue.textContent--
})