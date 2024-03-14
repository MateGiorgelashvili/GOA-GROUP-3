const year = d.getFullYear()
const month = d.getMonth()
const day = d.getDate()
const dayOfWeek = d.getDay()
const hour = d.getHours()
const minutes = d.getMinutes()
const seconds = d.getSeconds()

console.log(year);
console.log(month);
console.log(day);
console.log(dayOfWeek);
console.log(hour);
console.log(minutes);
console.log(seconds);

d.setFullYear(1998);
d.setMonth(0);
d.setDate(1);
d.setHours(2);
d.setMinutes(6);
d.setSeconds(20);

console.log(d);