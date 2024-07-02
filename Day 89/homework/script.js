//1
function sumOfNumbers(arr) {
  let sum = 0;
  for (let num of arr) {
      sum += num;
  }
  return sum;
}
//2
function longestWord(arr) {
  let longest = "";
  for (let word of arr) {
      if (word.length > longest.length) {
          longest = word;
      }
  }
  return longest;
}
//3
function countProperties(obj) {
  let count = 0;
  for (let prop in obj) {
      count++;
  }
  return count;
}
//4
function getObjectKeys(obj) {
  let keys = [];
  for (let key in obj) {
      keys.push(key);
  }
  return keys;
}
//5
const square = num => num * num;
//6
const getEvenNumbers = arr => arr.filter(num => num % 2 === 0);
//7
const sumArray = arr => arr.reduce((sum, num) => sum + num, 0);
//8
const generateFibonacci = length => {
  const fib = [0, 1];
  for (let i = 2; i < length; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib.slice(0, length);
};
//9
const isPalindrome = str => {
  const cleaned = str.replace(/[\W_]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
};
//10
document.getElementById('myButton').addEventListener('click', () => {
  const element = document.getElementById('myElement');
  if (element.style.display === 'none') {
      element.style.display = 'block';
  } else {
      element.style.display = 'none';
  }
});
