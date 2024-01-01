let username = "mate" //prompt("Enter Your Name");
let rollbtn = document.getElementById("rollbtn");
let resetbtn = document.getElementById("resetbtn");
let userPoints = 0;
let aiPoints = 0;
let userRoll = 0;
let aiRoll = 0;



function Reset(){
  window.location.reload();
}

document.getElementById("username").innerHTML = username;


rollbtn.addEventListener("click", function(){

  userRoll += document.getElementById("userRoll").innerHTML = Math.floor(Math.random() * 6) + 1;
  aiRoll += document.getElementById("aiRoll").innerHTML = Math.floor(Math.random() * 6) + 1;

  if (userRoll > aiRoll){
    userRoll = 0;
    aiRoll = 0;
    document.getElementById("userPoints").innerHTML ++;
    userPoints ++
  }
  else if (userRoll < aiRoll){
    aiRoll = 0;
    userRoll = 0;
    document.getElementById("aiPoints").innerHTML ++;
    aiPoints ++
  }
  else if (userRoll === aiRoll){
    console.log("TIE")
  }

  if (userPoints === 10){
    document.getElementById("userPoints").textContent = username + " won"
    document.getElementById("aiPoints").textContent = ""
    document.getElementById("colon").textContent = ""
    setTimeout(Reset,300);
  }
  else if (aiPoints === 10){
    document.getElementById("aiPoints").textContent = "AI won"
    document.getElementById("userPoints").textContent = ""
    document.getElementById("colon").textContent = ""
    setTimeout(Reset,300);
  }

})

resetbtn.addEventListener("click", function(){
  window.location.reload();
})







