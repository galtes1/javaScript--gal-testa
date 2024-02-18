// x mix drix
let btnArray = [];
for (let index = 0; index < 9; index++) {
  btnArray[index] = document.getElementById("mybtn" + index);
  btnArray[index].addEventListener("click", drawXO);
}
// let state = true;
// function drawXO(event) {
//   console.log(state);
//   if (event.target.innerText == "") {
//     if (state) {
//       event.target.innerText = "X";
//     } else {
//       event.target.innerText = "O";
//     }
//     state = !state;
//   }
// }

// פתרון מקוצר של צח
// function drawXO2(event) {
//   if (event.target.innerText == "") {
//     event.target.innerText = player;
//     if (player == "x") {
//       player = "o";
//     } else {
//       player = "x";
//     }
//   }
// }

// כתובה מקוצקת של איף-אלס
// function drawXO3(event) {
//   if (event.target.innerText == "") {
//     event.target.innerText = player;
//     player = player == "x" ? "o" : "x";
//   }
// }

// גרסה שלי
let player = "X";
let board = Array(9).fill("");

function drawXO(event) {
  if (event.target.innerText == "") {
    let buttonID = event.target.id;
    let buttonIndex = buttonID[buttonID.length - 1];
    board[buttonIndex] = player;
    console.log(board);
    if (checkWin(player)) {
      alert("the winner is player  " + player);
      location.reload();
    }
    if (player == "X") {
      event.target.innerText = "D";
      player = "O";
    } else if (player == "O") {
      event.target.innerText = "E";
      player = "X";
    }
  }
}

function checkWin(playerState) {
  if (
    // rows
    (board[0] === playerState &&
      board[1] === playerState &&
      board[2] === playerState) ||
    (board[3] === playerState &&
      board[4] === playerState &&
      board[5] === playerState) ||
    (board[6] === playerState &&
      board[7] === playerState &&
      board[8] === playerState) ||
    // columns
    (board[0] === playerState &&
      board[3] === playerState &&
      board[6] === playerState) ||
    (board[1] === playerState &&
      board[4] === playerState &&
      board[7] === playerState) ||
    (board[2] === playerState &&
      board[5] === playerState &&
      board[8] === playerState) ||
    // diagonals
    (board[0] === playerState &&
      board[4] === playerState &&
      board[8] === playerState) ||
    (board[2] === playerState &&
      board[4] === playerState &&
      board[6] === playerState)
  ) {
    return true;
  }
  return false;
}
// counter exercise
