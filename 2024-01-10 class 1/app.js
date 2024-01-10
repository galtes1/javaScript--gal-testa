//data types
//primitive types
let x = 100; //type: number
let y = "hello"; // type: string/text
let z = true; // type: boolean
let f = null; // type: null
let k; //type: undefined

//reference types
//type: object
//type: array

//עליכם להחליף בין תוכן המשתנה איי לתוכן המשתנה בי

let a = 100;
let b = 200;

let c = a;
a = b;
b = c;

console.log("a was 100, now is " + a, ",b was 200, now is " + b);

//משימה ללא משתנה עזר - רק עם מספרים

console.log("newNEWnew");
let person1Age = 25;
let person2Age = 32;
if (person1Age > person2Age) {
 console.log("person 1 is older then person 2");
} else {
 console.log("person 2 is older");
}

//אופרטורים מתקדמים
// != \ == : שיוויון, מתעלם מהטייפ של המשתנה
// !== \ === : בודק שיוויון וגם מוודא שהטייפ זהה

let r = 45;
if (r % 2 == 0) {
 console.log("even");
} else {
 console.log("odd");
}
