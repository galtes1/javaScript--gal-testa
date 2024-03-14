// 1. סכום של שני מספרים:
//כתוב פונקציה שלוקחת שני מספרים כארגומנטים ומחזירה את הסכום שלהם

console.log("exercise 1");

function sum(ex1num1, ex1num2) {
  return console.log(ex1num1 + ex1num2);
}
sum(2, 5);

//ברך את משתמש:
//צור פונקציה שמקבלת שם כפרמטר ומדפיסה הודעת ברכה, למשל, "שלום, [שם]!"

console.log("exercise 2");

function greetUser(userName) {
  console.log("hello, " + userName);
}
greetUser("dani");

//3. ממיר טמפרטורה:
//כתוב פונקציה הממירה טמפרטורה מפרנהייט לצלזיוס.

console.log("exercise 3");

function F2Cconvert(fahrenheit) {
  console.log(((fahrenheit - 32) * 5) / 9);
}
F2Cconvert(100);

//4. בדוק גיל:
//צור פונקציה שמקבלת גיל כקלט ומדפיסה אם האדם הוא קטין (מתחת לגיל 18) או מבוגר.

console.log("exercise 4");

function isMinor(userAge) {
  if (userAge < 18) {
    console.log("you are a minor. go home");
  } else {
    console.log("you good👍");
  }
}
isMinor(15);

//5. מצא את המספר הגדול ביותר:
//צור פונקציה שמקבלת שלושה מספרים ומחזירה את הגדול מביניהם.

console.log("exercise 5");
function biggestNumber(ex5num1, ex5num2, ex5num3) {
  if (ex5num1 > ex5num2 && ex5num1 > ex5num3) {
    console.log(ex5num1);
  } else if (ex5num2 > ex5num1 && ex5num2 > ex5num3) {
    console.log(ex5num2);
  } else if (ex5num3 > ex5num1 && ex5num3 > ex5num2) {
    console.log(ex5num3);
  } else {
    console.log("error");
  }
}
biggestNumber(15, 8, 8);

//6. חשב שטח מעגל:
//כתוב פונקציה שלוקחת את רדיוס המעגל ומחזירה את שטחו. השתמש בנוסחה `שטח = π * r^2`.

console.log("exercise 6");

function circleArea(radius) {
  console.log((radius ^ 2) * Math.PI);
}
circleArea(7);

//7. מאמת אימייל:
//צור פונקציה שלוקחת מחרוזת אימייל ובודקת אם היא מכילה סמל "@".

console.log("exercise 7");

//. המר דקות לשניות:
//כתוב פונקציה שממירה דקות לשניות.

console.log("exercise 8");

function minToSecs(myTime) {
  console.log(myTime * 60);
}
minToSecs(10);
