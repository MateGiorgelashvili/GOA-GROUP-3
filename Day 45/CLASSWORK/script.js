// function add(){
//   let result = 20;

//   return result;
// }

// console.log(add());


// function add(num1){ //num1 called parameter
//   console.log(num1);
// }

// add(10); //when you are calling function and passing value, that value is called an argument.

// function multiply(num1 = 1,num2 = 1,num3 = 1){

//   return((num1 + num2) * num3);

// }

// let res = multiply(5,3,10);

// console.log(res);


function highlightText() {

  let elementTitle = document.getElementById("title"); // We are getting element by it from html document

  elementTitle.style.backgroundColor = "lightblue"; // We are changing style of background color

  alert("highlighted"); //this command makes an alert
}