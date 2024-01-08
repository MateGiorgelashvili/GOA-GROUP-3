const clickable = document.getElementById("clickable")

clickable.addEventListener('click', function(){
  console.log("mate")
  document.getElementById("point").innerHTML ++
})