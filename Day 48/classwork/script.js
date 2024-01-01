let numone = document.getElementById("numone");
let numtwo = document.getElementById("numtwo");
let p = document.getElementById("myp")

let btn = document.getElementById("mybtn");

btn.addEventListener("click", function(){
  p.textContent = "result: " + (Number(numone.value) + Number(numtwo.value));
})
