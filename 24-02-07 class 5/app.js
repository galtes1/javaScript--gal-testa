console.log("hello class 5");

console.log("-------", "-------", "break", "-------", "-------");

console.log("pilandrom");
// loop needs to run n\2 times

console.log("-------", "-------", "break", "-------", "-------");

console.log("contructors");
let myDate = new Date();

console.log(myDate);

let myArray = [5, 8, 9, 7, 55, 3, 6];
console.log(myArray.reverse());

let myTitle = document.getElementById("mainTitle");
console.log(myTitle);

console.log("-------", "-------", "break", "-------", "-------");
function calculateTwoInputsValue(event) {
  let input1 = document.getElementById("num1");
  let input2 = document.getElementById("num2");
  let input1Value = Number(input1.value);
  let input2Value = Number(input2.value);

  let btnPressedId = event.target.id;

  switch (btnPressedId) {
    case "addBtn":
      console.log(input1Value + input2Value);
      break;
    case "subtructBtn":
      console.log(input1Value - input2Value);
      break;
    case "multiplyBtn":
      console.log(input1Value * input2Value);
      break;
    case "divideBtn":
      console.log(input1Value / input2Value);
      break;
    default:
      console.log("unknown");
      break;
  }
}

let addBtn = document.getElementById("addBtn");
let subtructBtn = document.getElementById("subtructBtn");
let multiplyBtn = document.getElementById("multiplyBtn");
let divideBtn = document.getElementById("divideBtn");

addBtn.addEventListener("click", calculateTwoInputsValue);
subtructBtn.addEventListener("click", calculateTwoInputsValue);
multiplyBtn.addEventListener("click", calculateTwoInputsValue);
divideBtn.addEventListener("click", calculateTwoInputsValue);

// x mix drix
let btnArray = [];
for (let index = 0; index < 9; index++) {
  btnArray[index] = document.getElementById("mybtn" + index);
  btnArray[index].addEventListener("click", drawXO);
}
let state = true;
function drawXO(event) {
  if (event.target.innerText == "") {
    if (state) {
      event.target.innerText = "X";
    } else {
      event.target.innerText = "O";
    }
    state = !state;
  }
}
