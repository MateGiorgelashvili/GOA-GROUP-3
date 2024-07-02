//1
function allNumbersPositive(arr) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= 0) {
          return false;
      }
  }
  return true;
}

function allStringsNonEmpty(arr) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "") {
          return false;
      }
  }
  return true;
}

function allBooleansTrue(arr) {
  for (let i = 0; i < arr.length; i++) {
      if (!arr[i]) {
          return false;
      }
  }
  return true;
}

function allNumbersEven(arr) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
          return false;
      }
  }
  return true;
}

//2
function hasPassingGrades(arr, passingGrade) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > passingGrade) {
          return true;
      }
  }
  return false;
}

function containsAdminUsers(arr) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].role === 'admin') {
          return true;
      }
  }
  return false;
}

function hasOverdueItems(arr) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].overdue) {
          return true;
      }
  }
  return false;
}

function includesPrimeNumbers(arr) {
  function isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i < num; i++) {
          if (num % i === 0) return false;
      }
      return true;
  }

  for (let i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) {
          return true;
      }
  }
  return false;
}

//3
function findFirstNegativeNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
          return arr[i];
      }
  }
  return undefined;
}

function findUserByID(arr, id) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
          return arr[i];
      }
  }
  return undefined;
}

function findFirstIncompleteTask(arr) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].complete === 'incomplete') {
          return arr[i];
      }
  }
  return undefined;
}

function findProductByName(arr, name) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === name) {
          return arr[i];
      }
  }
  return undefined;
}
//4
function findIndexFirstPrimeNumber(arr) {
  function isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i < num; i++) {
          if (num % i === 0) return false;
      }
      return true;
  }

  for (let i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) {
          return i;
      }
  }
  return -1;
}

function findIndexUserWithAdminRole(arr) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].role === 'admin') {
          return i;
      }
  }
  return -1;
}

function findIndexFirstOverdueItem(arr) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].overdue) {
          return i;
      }
  }
  return -1;
}

function findIndexProductOutOfStock(arr) {
  for (let i = 0; i < arr.length; i++) {
      if (!arr[i].inStock) {
          return i;
      }
  }
  return -1;
}
//5
function indexOfFirstOccurrenceOfChar(str, char) {
  for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
          return i;
      }
  }
  return -1;
}

function indexOfFirstOccurrenceOfNumber(arr, num) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
          return i;
      }
  }
  return -1;
}

function indexOfFirstOccurrenceOfSubstring(str, substr) {
  for (let i = 0; i <= str.length - substr.length; i++) {
      if (str.substring(i, i + substr.length) === substr) {
          return i;
      }
  }
  return -1;
}

function indexOfFirstOccurrenceInArray(arr, property, value) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i][property] === value) {
          return i;
      }
  }
  return -1;
}
//6
function lastIndexOfCharInSentence(str, char) {
  for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] === char) {
          return i;
      }
  }
  return -1;
}

function lastIndexOfPrimeNumber(arr) {
  function isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i < num; i++) {
          if (num % i === 0) return false;
      }
      return true;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
      if (isPrime(arr[i])) {
          return i;
      }
  }
  return -1;
}

function lastIndexOfWordInArray(arr, word) {
  for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === word) {
          return i;
      }
  }
  return -1;
}

function lastIndexOfActiveUser(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i].isActive) {
          return i;
      }
  }
  return -1;
}

