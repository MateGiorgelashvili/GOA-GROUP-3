const person = {
  name: "vako",
  lastName: "baratashvili",
  age: 18,
  city: "kutaisi",
  greet: () =>{
    console.log(`Hello ${person.name}`);
  }
}

console.log(person.name);

person.age = 20
console.log(person.age);

person.country = "Georgia"
console.log(person.country);

person.greet();



