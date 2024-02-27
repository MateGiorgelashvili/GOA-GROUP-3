let num1 = 5;

function myFunc()
{
  alert("HELLOOO");
}


let txtbtn = document.getElementById('txtbtn');
function textbtn()
{
  txtbtn.textContent = 'Thx for clicking me'
  txtbtn.style.padding = '24px'
  txtbtn.style.borderRadius = '20px'
  txtbtn.style.border = 'none'
  txtbtn.style.background = 'red'
  txtbtn.style.fontWeight = 'Bold'
}

function mysum(){
  let num1 = Number(prompt('Enter Num 1: '))
  let num2 = Number(prompt('Enter Num 2: '))
  console.log(num1 + num2)
}

txtbtn.onclick = textbtn;

mysum();

