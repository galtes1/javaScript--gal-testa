const board = document.getElementById("board");
const columns = document.querySelectorAll(".column");
let clickCount = 0;

function checkWinner(row, col, color) {
  function checkLine(dx, dy) {
    let count = 1; // Start at 1 to include the current circle

    for (let step = 1; step < 4; step++) {
      const nextRow = row + step * dy;
      const nextCol = col + step * dx;

      if (nextRow < 0 || nextRow >= 6 || nextCol < 0 || nextCol >= 7) {
        break; // Out of bounds
      }

      const nextCircle = board.children[nextRow].children[nextCol];
      if (nextCircle.classList.contains(color)) {
        count++;
      } else {
        break; // Different color
      }
    }

    return count === 4;
  }

  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [-1, 1], // Horizontal, Vertical, Diagonal (down-right), Diagonal (up-right)
  ];

  for (const [dx, dy] of directions) {
    if (checkLine(dx, dy) || checkLine(-dx, -dy)) {
      return true; // Found four in a row
    }
  }

  return false;
}

columns.forEach((column) => {
  column.addEventListener("click", () => {
    const circles = Array.from(column.querySelectorAll(".circle")).reverse();
    let emptyCircle = null;

    // Find the first empty circle from bottom to top
    for (let i = 0; i < circles.length; i++) {
      if (
        !circles[i].classList.contains("filled") &&
        !circles[i].classList.contains("alternate-filled")
      ) {
        emptyCircle = circles[i];
        break;
      }
    }

    // Alternate between filling with two different colors
    if (emptyCircle) {
      clickCount++;
      if (clickCount % 2 === 0) {
        emptyCircle.classList.add("alternate-filled");
      } else {
        emptyCircle.classList.add("filled");
      }

      // Check for a winner after each move
      const row = Array.from(column.parentNode.children).indexOf(column);
      const col = Array.from(column.children).indexOf(emptyCircle);

      if (
        checkWinner(row, col, "filled") ||
        checkWinner(row, col, "alternate-filled")
      ) {
        setTimeout(() => {
          alert("Winner!");
          resetBoard();
        }, 100);
      }
    }
  });
});

function resetBoard() {
  const circles = document.querySelectorAll(".circle");
  circles.forEach((circle) => {
    circle.classList.remove("filled", "alternate-filled");
  });
  clickCount = 0;
}
