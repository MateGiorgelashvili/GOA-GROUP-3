const car = {
  color: "red",
  brand: "bmw",
  doors: "four",
  engine: function(){
    console.log("STARTING BMW ENGINE...")
  }
};

const car1 = {
  color: "white",
  brand: "mercedes",
  doors: "four",
  engine: function(){
    console.log("STARTING MERCEDES ENGINE...")
  }
};


console.log(car)
console.log(car.engine())
console.log(car1)
console.log(car1.engine())