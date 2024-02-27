const username = document.getElementById("username")
const pass = document.getElementById("pass")
const btn = document.getElementById("btn")

const account = {}


btn.addEventListener("click", () => {
  if(username.value.length < 5){
    document.getElementById("name").style.display = "block"
  }else{
    account.name = username.value
  }
  if(pass.value.length < 8){
    document.getElementById("password").style.display = "block"
  }else{
    account.password = pass.value
  }
})

console.log(account);
