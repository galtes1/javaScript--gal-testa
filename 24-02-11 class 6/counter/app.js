//מזהה את הכפתורים
const incBtn = document.getElementById("increment"); // הגדרת כפתור פלוס
const decBtn = document.getElementById("decrement"); // הגדרת כפתור מינוס
const resetBtn = document.getElementById("reseter"); // הגדרת כפתור איפוס

// נותן להם משמעות על הקליק - מה קורה כשעושים קליק? פונים לפונקציה
incBtn.addEventListener("click", increaseNumber); // בעת לחיצה על "כפתור פלוס" -> פנה לפונקציה להעלאת מספר
decBtn.addEventListener("click", decreaseNumber); // בעת לחיצה על "כפתור מינוס" -> פנה לפונקציה להורדת מספר
resetBtn.addEventListener("click", resetScreen); // בעת לחיצה על "כפתור איפוס" -> פנה לפונקציה להעלאת מספר

// מגדיר את המונה עצמו
let count = 0; // הגדרה התחלתית = 0

// פונקציה להעלאת מספר
function increaseNumber() {
  count++; // הוסף 1 למונה
  updateTextOnScreen(); // פנייה לפונקציה שמעדכנת את המספר על המסך
}

// פונקציה להורדת מספר
function decreaseNumber() {
  count--; // הסר 1 מהמונה
  updateTextOnScreen(); // פנייה לפונקציה שמעדכנת את המספר על המסך
}
function resetScreen() {
  count = 0; // הפוך את המונה ל-0
  updateTextOnScreen(); // פנייה לפונקציה שמעדכנת את המספר על המסך
}

// פונקציה לעדכון המספר על המסך
function updateTextOnScreen() {
  const counterTextView = document.getElementById("inNum"); // הגדרת המונה כטקסט על המסך
  counterTextView.innerText = count; //
}
