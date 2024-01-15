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