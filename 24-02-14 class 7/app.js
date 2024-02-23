console.log("hello class 7");
let myBtn = document.querySelector("#aBtn");
let myp = document.getElementById("timer");
let intervalId;
let timer = 10;

myBtn.addEventListener("click", myFunctionInterval);

function myFunctionInterval() {
  timer = 10;
  intervalId = setInterval(decrementTimerandUpdateParagraph, 1000);
}

function decrementTimerandUpdateParagraph() {
  timer--;
  myp.innerText = timer;
  if (timer == 0) {
    clearInterval(intervalId);
  }
}
let button = document.getElementById("bBtn");
button.addEventListener("click", () => console.log("hi"));
