let myBtn = document.getElementById("myBtn");
let widthInput = document.getElementById("widthInput");
let heightInput = document.getElementById("heightInput");
let colorInput = document.getElementById("colorInput");
let parentDiv = document.getElementById("areaForMyNewDivs");

myBtn.addEventListener("click", () => {
  let width = widthInput?.value;
  let height = heightInput?.value;
  let color = colorInput?.value;

  let myNewDiv = document.createElement("div");

  myNewDiv.style.width = width + "px";
  myNewDiv.style.height = height + "px";
  myNewDiv.style.backgroundColor = color;
  parentDiv.appendChild(myNewDiv);

  widthInput.value = "";
  heightInput.value = "";
  colorInput.value = "black";
});

// 18.2
// 2:15:43
