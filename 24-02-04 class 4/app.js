// console.log("hello");

// // write a function that gets an array of nembers
// // returns the max number

// let array1 = [5, 88, 45, 85, 248, 657, 248, 59];

// function getMax(arr) {
//   let tempMax = arr[0];
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if (element > tempMax) {
//       tempMax = element;
//     }
//   }
//   console.log("biggest num is " + tempMax);
// }

// getMax(array1);

// console.log("break");

// function totalValue(array) {
//   let sum = 0;
//   for (let index = 0; index < array.length; index++) {
//     let element = array[index]; // sum += array[index];
//     sum += element;
//   }
//   console.log(sum);
// }

// totalValue(array1);

// console.log("reverse an array");

// function reverse(array) {
//   let newArray = [];
//   for (let index = array.length - 1; index >= 0; index--) {
//     const element = array[index];
//     newArray.push(element);
//   }
//   console.log(newArray);
// }

// reverse(array1);

// //01:20:47

// let user = {
//   firstName: "gal",
//   lastName: "testa",
//   age: "11",
//   address: { city: "tel aviv", street: "rival" },
//   hobbies: ["football", "music", "167fgg247n"],
//   sayHello: function () {
//     console.log("hello");
//   },
// };

// console.log("hi and welcome " + user.firstName + " " + user.lastName);

// //01:48:28

// //write a function that gets an object type=user
// //object properties:
// // full name
// //id num
// //birth year

// //print the age of the user

// function getAge(user) {
//   console.log(2024 - userObject.birthYear);
// }

// let userObject = {
//   fullName: "gal testa",
//   idNum: "123456782",
//   birthYear: 1992,
// };

// getAge(userObject);

// let student1 = {
//   firstName: "gal",
//   lastName: "testa",
//   grades: [89, 78, 100, 95, 78, 88],
// };

// function welcomeStudent(student) {
//   console.log(
//     `hello ${student1.firstName} ${student1.lastName}, and welcome to school`
//   );
// }
// function avgGrades(student) {
//   let sum = 0;
//   for (let index = 0; index < student1.grades.length; index++) {
//     sum += student1.grades[index];
//   }
//   let avg = sum / student1.grades.length;
//   console.log("the avarage grade is " + avg);
// }

// welcomeStudent(student1);
// avgGrades(student1);

// //3:41:55

// function occurrencesOfNumber(array, element) {
//   let count = 0;
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] == element) {
//       count++;
//     }
//   }
//   return count;
// }

// let array2 = [8, 45, 66, 8, 95, 44, 8, 74, 96];
// console.log(occurrencesOfNumber(array2, 8));

// function fibonaci(element) {
//   let fibonaciArray = [];
// }

let numsArray = [8, 45, 66, 8, 97, 44, 8, 74, 5, 96];

console.log("-------", "break", "break", "break", "break");
console.log("-------", "break", "break", "break", "break");
console.log("-------", "break", "break", "break", "break");

function sumNumbersInArray(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }
  return sum;
}
console.log(sumNumbersInArray(numsArray));

console.log("-------", "break", "break", "break", "break");
console.log("-------", "break", "break", "break", "break");
console.log("-------", "break", "break", "break", "break");

function getMax(array) {
  let maxValue = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > maxValue) {
      maxValue = array[index];
    }
  }
  return maxValue;
}
console.log(getMax(numsArray));

console.log("-------", "break", "break", "break", "break");
console.log("-------", "break", "break", "break", "break");
console.log("-------", "break", "break", "break", "break");

// בעיה - חייב להגדיר את המשתנה מין-ואליו
function getMin(array) {
  let minValue;
  for (let index = 0; index < array.length; index++) {
    if (array[index] < minValue) {
      minValue = array[index];
    }
  }
  return minValue;
}
console.log(getMin(numsArray));

console.log("-------", "break", "break", "break", "break");
console.log("-------", "break", "break", "break", "break");
console.log("-------", "break", "break", "break", "break");

function getSpesificIndex(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] == element) {
      return index;
    } else {
      console.log("number not found");
    }
  }
}

console.log(getSpesificIndex(numsArray, 97));
