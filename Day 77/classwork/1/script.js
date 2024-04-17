const parentDiv = document.getElementById("parent")
const child = document.getElementById("child")

parentDiv.addEventListener("click", function(){
  parentDiv.style.background = "red"
  child.style.background = "green"
}, true)

child.addEventListener("click", function(){
  parentDiv.style.background = "pink"
  child.style.background = "blue"
})