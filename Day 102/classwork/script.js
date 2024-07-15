import { sum } from './script2.js';

document.getElementById('btn').addEventListener('click', (e) => {
  e.preventDefault();
  sum(5, 5);
});
