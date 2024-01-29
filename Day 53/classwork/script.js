let btn = document.getElementById("btn");
let namesArray = [];

me = {
  name: "mate",
  lastName: "giorgelashvili",
  age: "15",
  getName: function(){
    return me.name
  },

  bankAccout: {
    id: 123,
    balance: 500
  }
}

you = {
  name: "luka",
  lastName: "tskhvaradze",
  age: "17",
  getName: function(){
    return you.name
  },
  bankAccout: {
    id: 153,
    balance: 4000
  }
}
//2
console.log(me.getName())
console.log(you.getName())



//3
document.getElementById("retrieveButton").addEventListener("click", function() {
  let firstNumber = document.getElementById("firstNumber").value;
  let secondNumber = document.getElementById("secondNumber").value;

  alert("First Number: " + firstNumber + "\nSecond Number: " + secondNumber);
});

//4

function addName(firstName, lastName) {
  namesArray.push({ firstName, lastName });
  console.log("Names Array:", namesArray);
}

document.getElementById("registerAccount").addEventListener("click", function() {
  let firstName = document.getElementById("fn").value;
  let lastName = document.getElementById("ln").value;

  if (firstName && lastName) {
    addName(firstName, lastName);
  } else {
    console.log("Fill Out Please!");
  }
});