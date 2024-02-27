const me = {
  name: "mate",
  age: 16,
  studying: "programming",
  height: 1.83,
  updateAge: function () {
    me.age = 15;
  }
};

console.log(me);
console.log(me.updateAge())

const car = {
  brand: "Nissan",
  model: "Skyline",
  year: 1957,
  hood: {
    engine: "V6"
  }
};

console.log(car)


let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let age = document.getElementById("age")

btn.addEventListener("click", function() {
  let person = {
    firstname: fname.value,
    lastname: lname.value,
    age: age.value
  };

  console.log(person);
});


//test

const meee = {
  name: 'Luka',
  lastname: 'Tskhvaradze',
  age: 17
}

const you = {
  name: 'Nika',
  lastname: 'Keshelava',
  age: 24
}

const administrator = {
  changeName: function(accountObj,newName){
      accountObj.name = newName;
  },

  changeLastname: function(accountObj,newLastname){
      accountObj.lastname = newLastname;
  },

  changeAge: function(accountObj,newAge){
      accountObj.age = newAge;
  }
}

administrator.changeName(me,'Nia');
administrator.changeLastname(you,'Boboxidze');

console.log(me);
console.log(you);