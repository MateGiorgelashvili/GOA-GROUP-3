// const me = {
//   name: "Mate",
//   lastName: "Giorgelashvili",
//   age: 15,
//   skills: {
//     programming: ["JavaScript", "Python", "C#"],
//     languages: ["English", "Georgian", "Greek"]
//   }
// };

// me.name = "Demarcus"
// me.power = "Infinite"

// const friend = {
//   name: "Dima",
//   lastName: "Bakuradze",
//   age: 15,
//   skills: {
//     programming: ["Newbie"],
//     languages: ["English", "Russian"]
//   }
// };


// friend.name = "Aladin"
// friend.power = "Infinite"

// const cyborg = {
//   name: me.name,
//   lastName: friend.lastName,
//   age: me.age,
//   skills: {
//     programming: [...me.skills.programming, ...friend.skills.programming],
//     languages: [...me.skills.languages, ...friend.skills.languages]
//   }
// };

// console.log(me);
// console.log(friend);
// console.log(cyborg);

// const luka = {
//   name: "Luka",
//   lastName: "Tskhvaradze",
//   age: 17,
//   fighting: {
//     power: 9999,
//     moreSmart: 100,
//     iq: 360,
//     discipline: 10,
//     teacher: 100,
//   }
// };
// const novatorMentors = {
//   name: "Looser",
//   lastName: "Retro Homeless 12",
//   fighting: {
//     power: 999,
//     moreSmart: 50,
//     iq: 30,
//     discipline: 2,
//     teacher: 20,
//   }
// };
// console.log("LET THE FIGHT BEGIN");
// console.log(luka.name, "vs", novatorMentors.name);

// console.log("-Power-");
// console.log(luka.fighting.power, "-", novatorMentors.fighting.power);
// if(luka.fighting.power > novatorMentors.fighting.power){
//   console.log("Luka 1 - 0 Novator");
// }

// console.log("-Smart-");
// console.log(luka.fighting.moreSmart, "-", novatorMentors.fighting.moreSmart);
// if(luka.fighting.moreSmart > novatorMentors.fighting.moreSmart){
//   console.log("Luka 2 - 0 Novator");
// }

// console.log("-IQ-");
// console.log(luka.fighting.iq, "-", novatorMentors.fighting.iq);
// if(luka.fighting.iq > novatorMentors.fighting.iq){
//   console.log("Luka 3 - 0 Novator");
// }


// console.log("-Discipline-");
// console.log(luka.fighting.discipline, "-", novatorMentors.fighting.discipline);
// if(luka.fighting.discipline > novatorMentors.fighting.discipline){
//   console.log("Luka 4 - 0 Novator");
// }


// console.log("-Teaching Skills-");
// console.log(luka.fighting.teacher, "-", novatorMentors.fighting.teacher);
// if(luka.fighting.teacher > novatorMentors.fighting.teacher){
//   console.log("Luka 5 - 0 Novator");
// }
// console.log("LUKA WON ABSOULUTE DOMINANCE");


// const car = {
//   brand: "Porsche",
//   model: "911",
//   start: () => "is starting in 5 sec",
//   break: (seconds) => {
//     for (let i = seconds; i > 0; i--) {
//       console.log(`car will break in ${i}`);
//     }
//   }
// };

// console.log(car.start());

// car.start = () => "hello world!";
// car.break(10)
// console.log(car.start());

let input = document.getElementById("input");
let btn = document.getElementById("btn");
let hidden = document.getElementById("hidden");

btn.addEventListener("click", () => {
  let inputValue = input.value;
  if (inputValue) {
    let propertyValue = me[inputValue]; 
    if (propertyValue !== NaN) {
      let h1Element = document.createElement("h1");
      h1Element.textContent = propertyValue;
      document.body.appendChild(h1Element);
      hidden.style.display = "none"; 
    } else {
      hidden.style.display = "block"; 
    }
  } else {
    hidden.style.display = "block"; 
  }
});

const me = {
  name: "Mate",
  lastName: "Giorgelashvili",
  age: 15,
  skills: {
    programming: ["JavaScript", "Python", "C#"],
    languages: ["English", "Georgian", "Greek"]
  }
};
