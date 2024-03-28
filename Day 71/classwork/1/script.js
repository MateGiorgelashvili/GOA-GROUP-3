const parentDiv = document.getElementById("parent");
const inputField = document.getElementById("input-field");
const btn = document.getElementById("btn");

btn.addEventListener("click", function(e){
    e.preventDefault();
    const newText = document.createTextNode(inputField.value);
    parentDiv.appendChild(newText);
    parentDiv.appendChild(document.createElement("br"));
    inputField.value = ''; 
});