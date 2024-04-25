//1

// let people = [
//   {
//     luka: 15,
//     mate: 23,
//     gio: 32,
//   }
// ]

// let newArr = people.map(people => Object.keys(people))
// console.log(newArr);

//2

// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

// let newArr = numbers.map(number => {
//     if(number <= 1) return false; 
//     for(let i = 2; i <= Math.sqrt(number); i++) {
//         if(number % i === 0) return false; 
//       }
//     return true;
    
// });

// console.log(newArr);

//3

// let students = [
//   {
//     saba: 15,
//     nuki: 14,
//     tamazi: 20,
//     mariami: 4,
//   }
// ]

// let passScore = 14

// function checkPassed(){
//   if (passScore > Object.values(students)){
//     console.log("passed");
//   }
// }

// let result = students.filter(checkPassed)
// console.log(result);


//4
// let arr = ["as.png", "as.jpg", "as.exe"]
// function checkEx(file){
//   return file.includes(".jpg")
// }
// let result = arr.filter(checkEx)
// console.log(result); 