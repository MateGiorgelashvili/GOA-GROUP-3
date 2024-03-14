//hw 1 (s.z)
function Human(name, lastname, age) {
  this.name = name
  this.lastname = lastname
  this.age = age
  this.printAbout = function() {
    console.log(`Person's name is: ${this.name}, 
    Person's lastname is: ${this.lastname}, Person's age is: ${this.age}`)
  }
}

let mate = new Human("Sandro", "Zabakhidze", 16)
mate.printAbout()