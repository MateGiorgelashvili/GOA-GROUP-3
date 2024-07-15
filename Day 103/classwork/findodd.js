const findOdd = (arr) => {
  arr.forEach(element => {
    if(element % 2 === 1){
      console.log(`Odd number is ${element}`);
    }else{
      console.log("Even number");
    }
  });
}

export {findOdd}