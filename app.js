const turn = document.querySelector('.turn');

const spaces = document.querySelectorAll('.space');

const resetGame = document.querySelector('.reset-game');

let currentPlayer = 'x';

const gameResult = document.querySelector('.game-result');
let gameOver = false;
// const winningCombos = [
//   [0, 1, 2, 3],
//   [6, 7, 8, 9],
//   [12, 13, 14, 15],
//   [18, 19, 20, 21],
//   [24, 25, 26, 27],
//   [30, 31, 32, 33],
//   [36, 37, 38, 39],
//   [1, 2, 3, 4],
//   [7, 8, 9, 10],
//   [13, 14, 15, 16],
//   [19, 20, 21, 22],
//   [31, 32, 33, 34],
//   [37, 38, 39, 40],
//   [2, 3, 4, 5],
//   [8, 9, 10, 11],
//   [14, 15, 16, 17],
//   [20, 21, 22, 23],
//   [26, 27, 28, 29],
//   [32, 33, 34, 35],
//   [38, 39, 40, 41],
//   [0, 6, 12, 18],
//   [1, 7, 13, 19],
//   [2, 8, 14, 20],
//   [3, 9, 15, 21],
//   [4, 10, 16, 22],
//   [5, 11, 17, 23],
//   [6, 12, 18, 24],
//   [7, 13, 19, 25],
//   [8, 14, 20, 26],
//   [9, 15, 21, 27],
//   [10, 16, 22, 28],
//   [11, 17, 23, 29],
//   [12, 18, 24, 30],
//   [13, 19, 25, 31],
//   [14, 20, 26, 32],
//   [15, 21, 27, 33],
//   [16, 22, 28, 34],
//   [17, 23, 29, 35],
//   [18, 24, 30, 36],
//   [19, 25, 31, 37],
//   [20, 26, 32, 37],
//   [21, 27, 33, 39],
//   [22, 28, 34, 40],
//   [23, 29, 35, 41],
//   [2, 9, 16, 23],
//   [1, 8, 15, 22],
//   [0, 7, 14, 21],
//   [8, 15, 22, 29],
//   [7, 14, 21, 28],
//   [6, 13, 20, 27],
//   [14, 21, 28, 35],
//   [13, 20, 27, 34],
//   [12, 19, 26, 33],
//   [18, 25, 32, 39],
//   [20, 27, 34, 41],
//   [19, 26, 33, 40],
//   [18, 25, 32, 39],
//   [20, 27, 34, 41],
//   [19, 26, 33, 40],
//   [18, 25, 32, 39],
//   [3, 8, 13, 18],
//   [4, 9, 14, 19],
//   [5, 10, 15, 20],
//   [9, 14, 19, 24],
//   [10, 15, 20, 20],
//   [11, 16, 21, 26],
//   [15, 20, 25, 30],
//   [16, 21, 26, 31],
//   [17, 22, 27, 32],
//   [21, 26, 31, 36],
//   [22, 27, 32, 37],
//   [23, 28, 33, 39]
// ];

function checkStatus() {
  let gameOver = false;
  if (
    (spaces[0].innerText === currentPlayer &&
      spaces[1].innerText === currentPlayer &&
      spaces[2].innerText === currentPlayer &&
      spaces[3].innerText === currentPlayer) ||
    (spaces[6].innerText === currentPlayer &&
      spaces[7].innerText === currentPlayer &&
      spaces[8].innerText === currentPlayer &&
      spaces[9].innerText === currentPlayer) ||
    (spaces[12].innerText === currentPlayer &&
      spaces[13].innerText === currentPlayer &&
      spaces[14].innerText === currentPlayer &&
      spaces[15].innerText === currentPlayer) ||
    (spaces[18].innerText === currentPlayer &&
      spaces[19].innerText === currentPlayer &&
      spaces[20].innerText === currentPlayer &&
      spaces[21].innerText === currentPlayer) ||
    (spaces[24].innerText === currentPlayer &&
      spaces[25].innerText === currentPlayer &&
      spaces[26].innerText === currentPlayer &&
      spaces[27].innerText === currentPlayer) ||
    (spaces[30].innerText === currentPlayer &&
      spaces[31].innerText === currentPlayer &&
      spaces[32].innerText === currentPlayer &&
      spaces[33].innerText === currentPlayer) ||
    (spaces[36].innerText === currentPlayer &&
      spaces[37].innerText === currentPlayer &&
      spaces[38].innerText === currentPlayer &&
      spaces[39].innerText === currentPlayer) ||
    (spaces[1].innerText === currentPlayer &&
      spaces[2].innerText === currentPlayer &&
      spaces[3].innerText === currentPlayer &&
      spaces[4].innerText === currentPlayer) ||
    (spaces[7].innerText === currentPlayer &&
      spaces[8].innerText === currentPlayer &&
      spaces[9].innerText === currentPlayer &&
      spaces[10].innerText === currentPlayer) ||
    (spaces[13].innerText === currentPlayer &&
      spaces[14].innerText === currentPlayer &&
      spaces[15].innerText === currentPlayer &&
      spaces[16].innerText === currentPlayer) ||
    (spaces[19].innerText === currentPlayer &&
      spaces[20].innerText === currentPlayer &&
      spaces[21].innerText === currentPlayer &&
      spaces[22].innerText === currentPlayer) ||
    (spaces[31].innerText === currentPlayer &&
      spaces[32].innerText === currentPlayer &&
      spaces[33].innerText === currentPlayer &&
      spaces[34].innerText === currentPlayer) ||
    (spaces[37].innerText === currentPlayer &&
      spaces[38].innerText === currentPlayer &&
      spaces[39].innerText === currentPlayer &&
      spaces[40].innerText === currentPlayer) ||
    (spaces[2].innerText === currentPlayer &&
      spaces[3].innerText === currentPlayer &&
      spaces[4].innerText === currentPlayer &&
      spaces[5].innerText === currentPlayer) ||
    (spaces[8].innerText === currentPlayer &&
      spaces[9].innerText === currentPlayer &&
      spaces[10].innerText === currentPlayer &&
      spaces[11].innerText === currentPlayer) ||
    (spaces[14].innerText === currentPlayer &&
      spaces[15].innerText === currentPlayer &&
      spaces[16].innerText === currentPlayer &&
      spaces[17].innerText === currentPlayer) ||
    (spaces[20].innerText === currentPlayer &&
      spaces[21].innerText === currentPlayer &&
      spaces[22].innerText === currentPlayer &&
      spaces[23].innerText === currentPlayer) ||
    (spaces[26].innerText === currentPlayer &&
      spaces[27].innerText === currentPlayer &&
      spaces[28].innerText === currentPlayer &&
      spaces[29].innerText === currentPlayer) ||
    (spaces[32].innerText === currentPlayer &&
      spaces[33].innerText === currentPlayer &&
      spaces[34].innerText === currentPlayer &&
      spaces[35].innerText === currentPlayer) ||
    (spaces[38].innerText === currentPlayer &&
      spaces[39].innerText === currentPlayer &&
      spaces[40].innerText === currentPlayer &&
      spaces[41].innerText === currentPlayer) ||
    (spaces[0].innerText === currentPlayer &&
      spaces[6].innerText === currentPlayer &&
      spaces[12].innerText === currentPlayer &&
      spaces[18].innerText === currentPlayer) ||
    (spaces[1].innerText === currentPlayer &&
      spaces[7].innerText === currentPlayer &&
      spaces[13].innerText === currentPlayer &&
      spaces[19].innerText === currentPlayer) ||
    (spaces[2].innerText === currentPlayer &&
      spaces[8].innerText === currentPlayer &&
      spaces[14].innerText === currentPlayer &&
      spaces[20].innerText === currentPlayer) ||
    (spaces[3].innerText === currentPlayer &&
      spaces[9].innerText === currentPlayer &&
      spaces[15].innerText === currentPlayer &&
      spaces[21].innerText === currentPlayer) ||
    (spaces[4].innerText === currentPlayer &&
      spaces[10].innerText === currentPlayer &&
      spaces[16].innerText === currentPlayer &&
      spaces[22].innerText === currentPlayer) ||
    (spaces[5].innerText === currentPlayer &&
      spaces[11].innerText === currentPlayer &&
      spaces[17].innerText === currentPlayer &&
      spaces[23].innerText === currentPlayer) ||
    (spaces[6].innerText === currentPlayer &&
      spaces[12].innerText === currentPlayer &&
      spaces[18].innerText === currentPlayer &&
      spaces[24].innerText === currentPlayer) ||
    (spaces[7].innerText === currentPlayer &&
      spaces[13].innerText === currentPlayer &&
      spaces[19].innerText === currentPlayer &&
      spaces[25].innerText === currentPlayer) ||
    (spaces[8].innerText === currentPlayer &&
      spaces[14].innerText === currentPlayer &&
      spaces[20].innerText === currentPlayer &&
      spaces[26].innerText === currentPlayer) ||
    (spaces[9].innerText === currentPlayer &&
      spaces[15].innerText === currentPlayer &&
      spaces[21].innerText === currentPlayer &&
      spaces[27].innerText === currentPlayer) ||
    (spaces[10].innerText === currentPlayer &&
      spaces[16].innerText === currentPlayer &&
      spaces[22].innerText === currentPlayer &&
      spaces[28].innerText === currentPlayer) ||
    (spaces[11].innerText === currentPlayer &&
      spaces[17].innerText === currentPlayer &&
      spaces[23].innerText === currentPlayer &&
      spaces[29].innerText === currentPlayer) ||
    (spaces[12].innerText === currentPlayer &&
      spaces[18].innerText === currentPlayer &&
      spaces[24].innerText === currentPlayer &&
      spaces[30].innerText === currentPlayer) ||
    (spaces[13].innerText === currentPlayer &&
      spaces[19].innerText === currentPlayer &&
      spaces[25].innerText === currentPlayer &&
      spaces[31].innerText === currentPlayer) ||
    (spaces[14].innerText === currentPlayer &&
      spaces[20].innerText === currentPlayer &&
      spaces[26].innerText === currentPlayer &&
      spaces[32].innerText === currentPlayer) ||
    (spaces[15].innerText === currentPlayer &&
      spaces[21].innerText === currentPlayer &&
      spaces[27].innerText === currentPlayer &&
      spaces[33].innerText === currentPlayer) ||
    (spaces[16].innerText === currentPlayer &&
      spaces[22].innerText === currentPlayer &&
      spaces[28].innerText === currentPlayer &&
      spaces[34].innerText === currentPlayer) ||
    (spaces[17].innerText === currentPlayer &&
      spaces[23].innerText === currentPlayer &&
      spaces[29].innerText === currentPlayer &&
      spaces[35].innerText === currentPlayer) ||
    (spaces[18].innerText === currentPlayer &&
      spaces[24].innerText === currentPlayer &&
      spaces[30].innerText === currentPlayer &&
      spaces[36].innerText === currentPlayer) ||
    (spaces[19].innerText === currentPlayer &&
      spaces[25].innerText === currentPlayer &&
      spaces[31].innerText === currentPlayer &&
      spaces[37].innerText === currentPlayer) ||
    (spaces[20].innerText === currentPlayer &&
      spaces[26].innerText === currentPlayer &&
      spaces[32].innerText === currentPlayer &&
      spaces[38].innerText === currentPlayer) ||
    (spaces[21].innerText === currentPlayer &&
      spaces[27].innerText === currentPlayer &&
      spaces[33].innerText === currentPlayer &&
      spaces[39].innerText === currentPlayer) ||
    (spaces[22].innerText === currentPlayer &&
      spaces[28].innerText === currentPlayer &&
      spaces[34].innerText === currentPlayer &&
      spaces[40].innerText === currentPlayer) ||
    (spaces[23].innerText === currentPlayer &&
      spaces[29].innerText === currentPlayer &&
      spaces[35].innerText === currentPlayer &&
      spaces[41].innerText === currentPlayer) ||
    (spaces[2].innerText === currentPlayer &&
      spaces[9].innerText === currentPlayer &&
      spaces[16].innerText === currentPlayer &&
      spaces[23].innerText === currentPlayer) ||
    (spaces[1].innerText === currentPlayer &&
      spaces[8].innerText === currentPlayer &&
      spaces[15].innerText === currentPlayer &&
      spaces[22].innerText === currentPlayer) ||
    (spaces[0].innerText === currentPlayer &&
      spaces[7].innerText === currentPlayer &&
      spaces[14].innerText === currentPlayer &&
      spaces[21].innerText === currentPlayer) ||
    (spaces[8].innerText === currentPlayer &&
      spaces[15].innerText === currentPlayer &&
      spaces[22].innerText === currentPlayer &&
      spaces[29].innerText === currentPlayer) ||
    (spaces[7].innerText === currentPlayer &&
      spaces[14].innerText === currentPlayer &&
      spaces[21].innerText === currentPlayer &&
      spaces[28].innerText === currentPlayer) ||
    (spaces[6].innerText === currentPlayer &&
      spaces[13].innerText === currentPlayer &&
      spaces[20].innerText === currentPlayer &&
      spaces[27].innerText === currentPlayer) ||
    (spaces[14].innerText === currentPlayer &&
      spaces[21].innerText === currentPlayer &&
      spaces[28].innerText === currentPlayer &&
      spaces[35].innerText === currentPlayer) ||
    (spaces[13].innerText === currentPlayer &&
      spaces[20].innerText === currentPlayer &&
      spaces[27].innerText === currentPlayer &&
      spaces[34].innerText === currentPlayer) ||
    (spaces[12].innerText === currentPlayer &&
      spaces[19].innerText === currentPlayer &&
      spaces[26].innerText === currentPlayer &&
      spaces[33].innerText === currentPlayer) ||
    (spaces[18].innerText === currentPlayer &&
      spaces[25].innerText === currentPlayer &&
      spaces[32].innerText === currentPlayer &&
      spaces[39].innerText === currentPlayer) ||
    (spaces[20].innerText === currentPlayer &&
      spaces[27].innerText === currentPlayer &&
      spaces[34].innerText === currentPlayer &&
      spaces[41].innerText === currentPlayer) ||
    (spaces[19].innerText === currentPlayer &&
      spaces[26].innerText === currentPlayer &&
      spaces[33].innerText === currentPlayer &&
      spaces[40].innerText === currentPlayer) ||
    (spaces[18].innerText === currentPlayer &&
      spaces[25].innerText === currentPlayer &&
      spaces[32].innerText === currentPlayer &&
      spaces[39].innerText === currentPlayer) ||
    (spaces[3].innerText === currentPlayer &&
      spaces[8].innerText === currentPlayer &&
      spaces[13].innerText === currentPlayer &&
      spaces[18].innerText === currentPlayer) ||
    (spaces[4].innerText === currentPlayer &&
      spaces[9].innerText === currentPlayer &&
      spaces[14].innerText === currentPlayer &&
      spaces[19].innerText === currentPlayer) ||
    (spaces[5].innerText === currentPlayer &&
      spaces[10].innerText === currentPlayer &&
      spaces[15].innerText === currentPlayer &&
      spaces[20].innerText === currentPlayer) ||
    (spaces[9].innerText === currentPlayer &&
      spaces[14].innerText === currentPlayer &&
      spaces[19].innerText === currentPlayer &&
      spaces[24].innerText === currentPlayer) ||
    (spaces[10].innerText === currentPlayer &&
      spaces[15].innerText === currentPlayer &&
      spaces[20].innerText === currentPlayer &&
      spaces[25].innerText === currentPlayer) ||
    (spaces[11].innerText === currentPlayer &&
      spaces[16].innerText === currentPlayer &&
      spaces[21].innerText === currentPlayer &&
      spaces[26].innerText === currentPlayer) ||
    (spaces[15].innerText === currentPlayer &&
      spaces[20].innerText === currentPlayer &&
      spaces[25].innerText === currentPlayer &&
      spaces[30].innerText === currentPlayer) ||
    (spaces[16].innerText === currentPlayer &&
      spaces[21].innerText === currentPlayer &&
      spaces[26].innerText === currentPlayer &&
      spaces[31].innerText === currentPlayer) ||
    (spaces[17].innerText === currentPlayer &&
      spaces[22].innerText === currentPlayer &&
      spaces[27].innerText === currentPlayer &&
      spaces[32].innerText === currentPlayer) ||
    (spaces[21].innerText === currentPlayer &&
      spaces[26].innerText === currentPlayer &&
      spaces[31].innerText === currentPlayer &&
      spaces[36].innerText === currentPlayer) ||
    (spaces[22].innerText === currentPlayer &&
      spaces[27].innerText === currentPlayer &&
      spaces[32].innerText === currentPlayer &&
      spaces[37].innerText === currentPlayer) ||
    (spaces[23].innerText === currentPlayer &&
      spaces[28].innerText === currentPlayer &&
      spaces[33].innerText === currentPlayer &&
      spaces[39].innerText === currentPlayer)
  ) {
    gameOver = true;
    return true;
  } else {
    let x = 0;
    let o = 0;
    for (let i = 0; i < spaces.length; i++) {
      if (spaces[i].innerText === 'x') {
        x++;
      } else if (spaces[i].innerText === 'o') {
        o++;
      }
    }
    if (x + o === 42) {
      gameResult.innerText = 'DRAW!';
    }
  }
}

for (let i = 0; i < spaces.length; i++) {
  spaces[i].addEventListener('click', function () {
    if (gameOver === true) {
      return;
    }
    if (
      (spaces[i].innerText == 'x' && spaces[i].innerText != 'o') ||
      (spaces[i].innerText == 'o' && spaces[i].innerText != 'x')
    ) {
      return;
    }

    if (currentPlayer === 'x') {
      spaces[i].innerText = 'x';
      checkStatus();
      if (checkStatus()) {
        gameResult.innerText = 'Player 1 Wins!';
        gameOver = true;
      } else {
        turn.innerText = `Player 1's Turn`;
        gameOver = false;
      }

      currentPlayer = 'o';
    } else if (currentPlayer === 'o') {
      spaces[i].innerText = 'o';
      checkStatus();
      if (checkStatus()) {
        gameResult.innerText = 'Player 2 Wins!';
        gameOver = true;
      } else {
        turn.innerText = `Player 2's Turn`;
        gameOver = false;
      }
      currentPlayer = 'x';
    }
  });
}

for (let i = 0; i < spaces.length; i++) {
  resetGame.addEventListener('click', function () {
    spaces[i].innerText = '';
    gameResult.innerText = '';
    turn.innerText = `Player 1's Turn`;
    gameOver = false;
  });
}
