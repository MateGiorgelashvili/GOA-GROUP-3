let parag = document.getElementById('my_p');
let btn = document.getElementById('mybtn');

function stylep(){
  parag.style.color = 'red';
  parag.textContent = 'Yes.. NIKA KESHELAVA IS THE ONE!';
}  

btn.onclick = stylep;