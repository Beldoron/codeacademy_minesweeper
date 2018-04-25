
const generatePlayerBoard = (numberOfRows, numberOfColums) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++) {
    let row = [];
    for (let j = 0; j < numberOfColums; j++) {
      row.push(" ");
    };
    board.push(row);
  };
  return board;

};
const generateBombBoard = (numberOfRows, numberOfColums, numberOfBombs) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++) {
    let row = [];
    for (let j = 0; j < numberOfColums; j++) {
      row.push(null);
    };
    board.push(row);
  };
  let numberOfBombsPlaced = 0;
  while(numberOfBombsPlaced < numberOfBombs ) { //bombs can be placed above bombs, fixable with control flow //
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumIndex = Math.floor(Math.random() * numberOfColums);
    board[randomRowIndex][randomColumIndex] = "B";
    numberOfBombsPlaced++;
  }
  return board;
};

const printBoard = (board) => {
  console.log(board.map(row => row.join(" | ")).join("\n"));
};

let playerBoard = generatePlayerBoard(5,8);
let bombBoard = generateBombBoard(5,8,10);

console.log("Player Board:")
printBoard(playerBoard);

console.log("Bomb Board:")
printBoard(bombBoard);
