console.log("hello");
// כתוב פונקציה המקבלת שם של עונת השנה
// ומדפיסה הודעה בהתאם

function printAboutSeason(season) {
  switch (season) {
    case "summer":
      console.log("this is summer");
      break;
    case "winter":
      console.log("is it raining?");
      break;
    case "spring":
      console.log("spring time for ben-gvir");
      break;
    case "fall":
      console.log("leaves are falling all around");
      break;
    default:
      console.log("no valid season");
      break;
  }
}

function calculator(operator, num1, num2) {
  switch (operator) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    default:
      console.log("error");
  }
}

calculator("+", 5, 8);

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("%2");

for (let a = 1; a <= 100; a++) {
  if (a % 2 == 0) {
    console.log(a);
  }
}

let array = ["hello", "bye", "something"];
// start count from 0 = first position => array[0] = "hello"
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

// write afunction that gets an array of whole numbers,
//print only even numbers

let array2 = [5, 85, 95, 47, 74, 352, 88, 15, 2, 972];

function arrayEvenNubers(arr) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 == 0) {
      console.log(arr[index]);
    }
  }
}
arrayEvenNubers(array2);

// write a code for the game "7boom"
// print all numbers 1-200
// every number that is divided by 7 or has 7

console.log("break");
console.log("break");
console.log("break");

//3:44:35

for (let s = 1; s <= 200; s++) {
  if (s % 7 == 0 || s.toString().includes("7")) {
    console.log("boom");
  } else {
    console.log(s);
  }
}

// write a function that gets an array of nembers
// returns the max number

let index1;
let tempMax;
function maxNumInArray(arr) {
  for (let index = 0; index < array.length; index++) {
    index1 = index;
    for (let i = 0; i < array.length; i++) {
      if (index > index1) {
        tempMax = index;
      } else {
      }
    }
  }
}
maxNumInArray((arr = [5, 88, 45, 85, 248, 657, 248, 59]));
console.log("biggest num is " + tempMax);
