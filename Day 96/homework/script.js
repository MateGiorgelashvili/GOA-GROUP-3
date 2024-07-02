//1
const task1 = new Promise(resolve => {
  setTimeout(() => {
      resolve("Task 1 complete");
  }, 2000);
});
task1.then(result => console.log(result));
//2
const task2 = new Promise((_, reject) => {
  reject(new Error("Task 2 failed"));
});
task2.catch(error => console.error(error.message));
//3
const task3 = Promise.resolve(5)
    .then(number => number * 2)
    .then(doubledNumber => console.log(doubledNumber));
//4
function task4() {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve("First");
      }, 2000);
  }).then(message => {
      console.log(message);
      return new Promise(resolve => {
          setTimeout(() => {
              console.log("Second");
              resolve();
          }, 1000);
      });
  });
}

task4();
//5
function task5() {
  return new Promise((_, reject) => {
      setTimeout(() => {
          reject(new Error("Task 3 failed"));
      }, 2000);
  }).catch(error => console.error(error.message));
}

task5();
//6
function task6() {
  const delay = Math.floor(Math.random() * 5000) + 1000;
  return new Promise(resolve => {
      setTimeout(() => {
          resolve("Task 1 complete");
      }, delay);
  });
}

task6().then(result => console.log(result));
//7
function task6() {
  const delay = Math.floor(Math.random() * 5000) + 1000;
  return new Promise(resolve => {
      setTimeout(() => {
          resolve("Task 1 complete");
      }, delay);
  });
}

task6().then(result => console.log(result));
//8
function task8() {
  const delay = Math.floor(Math.random() * 4000) + 1000;
  return new Promise((_, reject) => {
      setTimeout(() => {
          reject(new Error("Task 3 failed"));
      }, delay);
  }).catch(error => console.error(error.message));
}

task8();
//9
function task9() {
  const delay = Math.floor(Math.random() * 5000) + 1000;
  const randomNumber = Math.random();

  return new Promise(resolve => {
      setTimeout(() => {
          if (randomNumber > 0.5) {
              resolve("Task 1 complete");
          } else {
              resolve("Task 1 was quick");
          }
      }, delay);
  });
}

task9().then(result => console.log(result));
//10
function task10() {
  const delay = Math.floor(Math.random() * 4000) + 1000;
  const randomNumber = Math.random();

  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (randomNumber < 0.3) {
              reject(new Error("Task 3 failed"));
          } else {
              resolve("Task 3 complete");
          }
      }, delay);
  }).catch(error => console.error(error.message));
}

task10().then(result => console.log(result));
//11
