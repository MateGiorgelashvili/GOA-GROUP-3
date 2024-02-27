let accept = document.getElementById("accept");
let btn = document.getElementById("button")

btn.addEventListener("click", function(){
  let value = accept.checked;
  
  if (value === true){
    alert("Transition was Successful!")
  }
  else{
    alert("Something is wrong, please check the box to proceed!")
  }
})