//משימה ללא משתנה עזר - רק עם מספרים

let a = 1;
let b = 8;

console.log("a is = " + a, "and b is =" + b);

a = a + b;
b = a - b;
a = a - b;

console.log("new a is = " + a, ", and new b is = " + b);

console.log("is this number even?");
function isEven(myNumber) {
 if (myNumber % 2 === 0) {
  return true;
 } else {
  return false;
 }
}

// let = isThisNumberEven = isEven(11);

console.log(isEven(12));

function sayHello() {
 console.log("hello");
}
sayHello();
sayHello();
sayHello();
sayHello();

//write a function that get user name name as a string
//print Hello to then

function helloUser(firstName) {
 console.log("hello " + firstName);
}
helloUser("gal");
helloUser("danny");

function addTwoNumbers(num1, num2) {
 return num1 + num2;
}

// write a function that get an positive integer
// return the unity digit
// example

function unityDigit(integer) {
 return integer % 10;
}
console.log(unityDigit(927));

//
