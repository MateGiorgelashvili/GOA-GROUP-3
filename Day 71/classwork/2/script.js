const parent = document.getElementById("parent-div")
const form = document.getElementById("form")
const name = document.getElementById("name")
const pass = document.getElementById("password")
const passr = document.getElementById("repeatpassword")
const btn = document.getElementById("btn")

accs = {
  name: "example",
  pass: "example",
  repeatPass: "example"
}

btn.addEventListener("click", () =>{
  accs.name = name.value
  if(pass.value === passr.value){
    accs.pass = pass.value
    accs.repeatPass = passr.value
  }else{
    alert("Incorrect")
  }
})
