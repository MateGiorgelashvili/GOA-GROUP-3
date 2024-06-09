class Person{
  #id
  constructor(name,age,gender){
    this.name = name
    this.age = age
    this.gender = gender
  }
  greet(){
    console.log("Hello", this.name);
  }
  get getName(){
    return this.name
  }

  get getGender(){
    return this.gender !== "male"
  }

  set setGender(gender){
    return this.gender = gender
  }
}

const newPerson = new Person("mate","15","male")
console.log(newPerson);
newPerson.greet()
console.log(newPerson.name, newPerson.age, newPerson.gender);

newPerson.name = "aleko"
newPerson.age =  "16"
newPerson.gender = "walmart bag"
console.log(newPerson.gender, newPerson.name, newPerson.age);

const anotherPerson = new Person("nia", "2", "female")
const oneMorePerson = new Person("jeko", "4", "male")

console.log(anotherPerson.getName);
console.log(anotherPerson.getGender);
console.log(oneMorePerson.getGender);

oneMorePerson.setGender = "cow"
console.log(oneMorePerson.gender);