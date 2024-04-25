//1
let types = [2,2.14,12,5,"lol","bool",true]
function filt(num){
  if(num == parseInt(num)){
    return num
  }
}
let result = types.filter(filt)
console.log(result);

//2
let ints = [1,2,3,4,5,6,7,8,9,10]
function mult(num, index){
  if(index % 2 == 0){
    return num * 2
  }else{
    return num
  }
}
let newArr = ints.map(mult)
console.log(newArr);