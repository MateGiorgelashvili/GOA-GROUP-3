let email = document.getElementById("email")
let pass = document.getElementById("password")
let name = document.getElementById("name")
let surname = document.getElementById("surname")
let dob = document.getElementById("dob")
let btnn = document.getElementById("btn2")


let mybutton = document.getElementById("myBtn")

mybutton.addEventListener("click", function(){

  console.log(email.value , pass.value, name.value, surname.value, dob.value)

})

btn2.addEventListener("click", function(){
  prompt("Type Name")
})

