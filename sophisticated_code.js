/* sophisticated_code.js */

// This code is a complex implementation of a Sudoku solver using backtracking algorithm

// The Sudoku board represented as a 2D array
let board = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

// Function to check if the current number fits in the row
const isSafeInRow = (row, num) => {
  for (let col = 0; col < 9; col++) {
    if (board[row][col] === num) {
      return false;
    }
  }
  return true;
};

// Function to check if the current number fits in the column
const isSafeInColumn = (col, num) => {
  for (let row = 0; row < 9; row++) {
    if (board[row][col] === num) {
      return false;
    }
  }
  return true;
};

// Function to check if the current number fits in the 3x3 grid
const isSafeInGrid = (row, col, num) => {
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startRow + i][startCol + j] === num) {
        return false;
      }
    }
  }
  return true;
};

// Function to check if the current number is safe to place at the given position
const isSafe = (row, col, num) => {
  return (
    isSafeInRow(row, num) &&
    isSafeInColumn(col, num) &&
    isSafeInGrid(row, col, num)
  );
};

// Function to find the next empty position on the Sudoku board
const findNextEmpty = () => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        return [row, col];
      }
    }
  }
  return null;
};

// Function to solve the Sudoku board using backtracking
const solveSudoku = () => {
  const emptyPos = findNextEmpty();

  if (!emptyPos) {
    return true; // All positions filled, Sudoku solved!
  }

  const [row, col] = emptyPos;

  for (let num = 1; num <= 9; num++) {
    if (isSafe(row, col, num)) {
      board[row][col] = num;

      if (solveSudoku()) {
        return true; // Sudoku solved
      }

      board[row][col] = 0; // Undo the current placement and try again
    }
  }

  return false; // Backtrack if no numbers fit
};

// Function to display the solved Sudoku board
const displayBoard = () => {
  for (let row = 0; row < 9; row++) {
    let rowStr = '';
    for (let col = 0; col < 9; col++) {
      rowStr += board[row][col] + ' ';
    }
    console.log(rowStr.trim());
  }
};

// Solve and display the Sudoku board
if (solveSudoku()) {
  console.log('Sudoku solved:');
  displayBoard();
} else {
  console.log('No solution exists for the given Sudoku board.');
}