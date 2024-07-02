//1
const promise1 = Promise.resolve("Hello, World!");
promise1.then(result => console.log(result));
//2
const promise2 = new Promise(resolve => {
  setTimeout(() => {
      resolve("Resolved after 2 seconds");
  }, 2000);
});
promise2.then(result => console.log(result));
//3
const promise3 = Promise.resolve("First")
    .then(result => `${result} -> Second`)
    .then(result => console.log(result));
//4
const promise4 = Promise.resolve("Stage 1")
    .then(result => {
        console.log(result);
        return "Stage 2";
    })
    .then(result => {
        console.log(result);
        return "Stage 3";
    })
    .then(result => console.log(result));
//5
const promise5 = new Promise((_, reject) => {
  setTimeout(() => {
      reject(new Error("Rejected after 1 second"));
  }, 1000);
});
promise5.catch(error => console.error(error.message));
//6
function printMessages() {
  setTimeout(() => console.log("One"), 1000);
  setTimeout(() => console.log("Two"), 2000);
  setTimeout(() => console.log("Three"), 3000);
}
printMessages();
//7
Promise.resolve()
    .then(() => new Promise(resolve => setTimeout(() => {
        console.log("First");
        resolve();
    }, 1000)))
    .then(() => new Promise(resolve => setTimeout(() => {
        console.log("Second");
        resolve();
    }, 2000)))
    .then(() => new Promise(resolve => setTimeout(() => {
        console.log("Third");
        resolve();
    }, 3000)));
//8
const promise8 = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
      resolve("Success!");
  } else {
      reject(new Error("Something went wrong"));
  }
});

promise8
  .then(result => console.log(result))
  .catch(error => console.error(error.message));
//9
const promise9 = Promise.resolve("Promise resolved");
promise9.then(result => console.log(result));
//10
Promise.resolve(1)
    .then(result => result * 2)
    .then(result => result + 3)
    .then(result => result / 2)
    .then(result => console.log(result));
