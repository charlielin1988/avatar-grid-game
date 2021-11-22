const turn = document.querySelector('.turn');

const spaces = document.querySelectorAll('.space');

const resetGame = document.querySelector('.reset-game');

let currentPlayer = 'momo';

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
    (spaces[0].innerHTML === currentPlayer &&
      spaces[1].innerHTML === currentPlayer &&
      spaces[2].innerHTML === currentPlayer &&
      spaces[3].innerHTML === currentPlayer) ||
    (spaces[6].innerHTML === currentPlayer &&
      spaces[7].innerHTML === currentPlayer &&
      spaces[8].innerHTML === currentPlayer &&
      spaces[9].innerHTML === currentPlayer) ||
    (spaces[12].innerHTML === currentPlayer &&
      spaces[13].innerHTML === currentPlayer &&
      spaces[14].innerHTML === currentPlayer &&
      spaces[15].innerHTML === currentPlayer) ||
    (spaces[18].innerHTML === currentPlayer &&
      spaces[19].innerHTML === currentPlayer &&
      spaces[20].innerHTML === currentPlayer &&
      spaces[21].innerHTML === currentPlayer) ||
    (spaces[24].innerHTML === currentPlayer &&
      spaces[25].innerHTML === currentPlayer &&
      spaces[26].innerHTML === currentPlayer &&
      spaces[27].innerHTML === currentPlayer) ||
    (spaces[30].innerHTML === currentPlayer &&
      spaces[31].innerHTML === currentPlayer &&
      spaces[32].innerHTML === currentPlayer &&
      spaces[33].innerHTML === currentPlayer) ||
    (spaces[36].innerHTML === currentPlayer &&
      spaces[37].innerHTML === currentPlayer &&
      spaces[38].innerHTML === currentPlayer &&
      spaces[39].innerHTML === currentPlayer) ||
    (spaces[1].innerHTML === currentPlayer &&
      spaces[2].innerHTML === currentPlayer &&
      spaces[3].innerHTML === currentPlayer &&
      spaces[4].innerHTML === currentPlayer) ||
    (spaces[7].innerHTML === currentPlayer &&
      spaces[8].innerHTML === currentPlayer &&
      spaces[9].innerHTML === currentPlayer &&
      spaces[10].innerHTML === currentPlayer) ||
    (spaces[13].innerHTML === currentPlayer &&
      spaces[14].innerHTML === currentPlayer &&
      spaces[15].innerHTML === currentPlayer &&
      spaces[16].innerHTML === currentPlayer) ||
    (spaces[19].innerHTML === currentPlayer &&
      spaces[20].innerHTML === currentPlayer &&
      spaces[21].innerHTML === currentPlayer &&
      spaces[22].innerHTML === currentPlayer) ||
    (spaces[31].innerHTML === currentPlayer &&
      spaces[32].innerHTML === currentPlayer &&
      spaces[33].innerHTML === currentPlayer &&
      spaces[34].innerHTML === currentPlayer) ||
    (spaces[37].innerHTML === currentPlayer &&
      spaces[38].innerHTML === currentPlayer &&
      spaces[39].innerHTML === currentPlayer &&
      spaces[40].innerHTML === currentPlayer) ||
    (spaces[2].innerHTML === currentPlayer &&
      spaces[3].innerHTML === currentPlayer &&
      spaces[4].innerHTML === currentPlayer &&
      spaces[5].innerHTML === currentPlayer) ||
    (spaces[8].innerHTML === currentPlayer &&
      spaces[9].innerHTML === currentPlayer &&
      spaces[10].innerHTML === currentPlayer &&
      spaces[11].innerHTML === currentPlayer) ||
    (spaces[14].innerHTML === currentPlayer &&
      spaces[15].innerHTML === currentPlayer &&
      spaces[16].innerHTML === currentPlayer &&
      spaces[17].innerHTML === currentPlayer) ||
    (spaces[20].innerHTML === currentPlayer &&
      spaces[21].innerHTML === currentPlayer &&
      spaces[22].innerHTML === currentPlayer &&
      spaces[23].innerHTML === currentPlayer) ||
    (spaces[26].innerHTML === currentPlayer &&
      spaces[27].innerHTML === currentPlayer &&
      spaces[28].innerHTML === currentPlayer &&
      spaces[29].innerHTML === currentPlayer) ||
    (spaces[32].innerHTML === currentPlayer &&
      spaces[33].innerHTML === currentPlayer &&
      spaces[34].innerHTML === currentPlayer &&
      spaces[35].innerHTML === currentPlayer) ||
    (spaces[38].innerHTML === currentPlayer &&
      spaces[39].innerHTML === currentPlayer &&
      spaces[40].innerHTML === currentPlayer &&
      spaces[41].innerHTML === currentPlayer) ||
    (spaces[0].innerHTML === currentPlayer &&
      spaces[6].innerHTML === currentPlayer &&
      spaces[12].innerHTML === currentPlayer &&
      spaces[18].innerHTML === currentPlayer) ||
    (spaces[1].innerHTML === currentPlayer &&
      spaces[7].innerHTML === currentPlayer &&
      spaces[13].innerHTML === currentPlayer &&
      spaces[19].innerHTML === currentPlayer) ||
    (spaces[2].innerHTML === currentPlayer &&
      spaces[8].innerHTML === currentPlayer &&
      spaces[14].innerHTML === currentPlayer &&
      spaces[20].innerHTML === currentPlayer) ||
    (spaces[3].innerHTML === currentPlayer &&
      spaces[9].innerHTML === currentPlayer &&
      spaces[15].innerHTML === currentPlayer &&
      spaces[21].innerHTML === currentPlayer) ||
    (spaces[4].innerHTML === currentPlayer &&
      spaces[10].innerHTML === currentPlayer &&
      spaces[16].innerHTML === currentPlayer &&
      spaces[22].innerHTML === currentPlayer) ||
    (spaces[5].innerHTML === currentPlayer &&
      spaces[11].innerHTML === currentPlayer &&
      spaces[17].innerHTML === currentPlayer &&
      spaces[23].innerHTML === currentPlayer) ||
    (spaces[6].innerHTML === currentPlayer &&
      spaces[12].innerHTML === currentPlayer &&
      spaces[18].innerHTML === currentPlayer &&
      spaces[24].innerHTML === currentPlayer) ||
    (spaces[7].innerHTML === currentPlayer &&
      spaces[13].innerHTML === currentPlayer &&
      spaces[19].innerHTML === currentPlayer &&
      spaces[25].innerHTML === currentPlayer) ||
    (spaces[8].innerHTML === currentPlayer &&
      spaces[14].innerHTML === currentPlayer &&
      spaces[20].innerHTML === currentPlayer &&
      spaces[26].innerHTML === currentPlayer) ||
    (spaces[9].innerHTML === currentPlayer &&
      spaces[15].innerHTML === currentPlayer &&
      spaces[21].innerHTML === currentPlayer &&
      spaces[27].innerHTML === currentPlayer) ||
    (spaces[10].innerHTML === currentPlayer &&
      spaces[16].innerHTML === currentPlayer &&
      spaces[22].innerHTML === currentPlayer &&
      spaces[28].innerHTML === currentPlayer) ||
    (spaces[11].innerHTML === currentPlayer &&
      spaces[17].innerHTML === currentPlayer &&
      spaces[23].innerHTML === currentPlayer &&
      spaces[29].innerHTML === currentPlayer) ||
    (spaces[12].innerHTML === currentPlayer &&
      spaces[18].innerHTML === currentPlayer &&
      spaces[24].innerHTML === currentPlayer &&
      spaces[30].innerHTML === currentPlayer) ||
    (spaces[13].innerHTML === currentPlayer &&
      spaces[19].innerHTML === currentPlayer &&
      spaces[25].innerHTML === currentPlayer &&
      spaces[31].innerHTML === currentPlayer) ||
    (spaces[14].innerHTML === currentPlayer &&
      spaces[20].innerHTML === currentPlayer &&
      spaces[26].innerHTML === currentPlayer &&
      spaces[32].innerHTML === currentPlayer) ||
    (spaces[15].innerHTML === currentPlayer &&
      spaces[21].innerHTML === currentPlayer &&
      spaces[27].innerHTML === currentPlayer &&
      spaces[33].innerHTML === currentPlayer) ||
    (spaces[16].innerHTML === currentPlayer &&
      spaces[22].innerHTML === currentPlayer &&
      spaces[28].innerHTML === currentPlayer &&
      spaces[34].innerHTML === currentPlayer) ||
    (spaces[17].innerHTML === currentPlayer &&
      spaces[23].innerHTML === currentPlayer &&
      spaces[29].innerHTML === currentPlayer &&
      spaces[35].innerHTML === currentPlayer) ||
    (spaces[18].innerHTML === currentPlayer &&
      spaces[24].innerHTML === currentPlayer &&
      spaces[30].innerHTML === currentPlayer &&
      spaces[36].innerHTML === currentPlayer) ||
    (spaces[19].innerHTML === currentPlayer &&
      spaces[25].innerHTML === currentPlayer &&
      spaces[31].innerHTML === currentPlayer &&
      spaces[37].innerHTML === currentPlayer) ||
    (spaces[20].innerHTML === currentPlayer &&
      spaces[26].innerHTML === currentPlayer &&
      spaces[32].innerHTML === currentPlayer &&
      spaces[38].innerHTML === currentPlayer) ||
    (spaces[21].innerHTML === currentPlayer &&
      spaces[27].innerHTML === currentPlayer &&
      spaces[33].innerHTML === currentPlayer &&
      spaces[39].innerHTML === currentPlayer) ||
    (spaces[22].innerHTML === currentPlayer &&
      spaces[28].innerHTML === currentPlayer &&
      spaces[34].innerHTML === currentPlayer &&
      spaces[40].innerHTML === currentPlayer) ||
    (spaces[23].innerHTML === currentPlayer &&
      spaces[29].innerHTML === currentPlayer &&
      spaces[35].innerHTML === currentPlayer &&
      spaces[41].innerHTML === currentPlayer) ||
    (spaces[2].innerHTML === currentPlayer &&
      spaces[9].innerHTML === currentPlayer &&
      spaces[16].innerHTML === currentPlayer &&
      spaces[23].innerHTML === currentPlayer) ||
    (spaces[1].innerHTML === currentPlayer &&
      spaces[8].innerHTML === currentPlayer &&
      spaces[15].innerHTML === currentPlayer &&
      spaces[22].innerHTML === currentPlayer) ||
    (spaces[0].innerHTML === currentPlayer &&
      spaces[7].innerHTML === currentPlayer &&
      spaces[14].innerHTML === currentPlayer &&
      spaces[21].innerHTML === currentPlayer) ||
    (spaces[8].innerHTML === currentPlayer &&
      spaces[15].innerHTML === currentPlayer &&
      spaces[22].innerHTML === currentPlayer &&
      spaces[29].innerHTML === currentPlayer) ||
    (spaces[7].innerHTML === currentPlayer &&
      spaces[14].innerHTML === currentPlayer &&
      spaces[21].innerHTML === currentPlayer &&
      spaces[28].innerHTML === currentPlayer) ||
    (spaces[6].innerHTML === currentPlayer &&
      spaces[13].innerHTML === currentPlayer &&
      spaces[20].innerHTML === currentPlayer &&
      spaces[27].innerHTML === currentPlayer) ||
    (spaces[14].innerHTML === currentPlayer &&
      spaces[21].innerHTML === currentPlayer &&
      spaces[28].innerHTML === currentPlayer &&
      spaces[35].innerHTML === currentPlayer) ||
    (spaces[13].innerHTML === currentPlayer &&
      spaces[20].innerHTML === currentPlayer &&
      spaces[27].innerHTML === currentPlayer &&
      spaces[34].innerHTML === currentPlayer) ||
    (spaces[12].innerHTML === currentPlayer &&
      spaces[19].innerHTML === currentPlayer &&
      spaces[26].innerHTML === currentPlayer &&
      spaces[33].innerHTML === currentPlayer) ||
    (spaces[18].innerHTML === currentPlayer &&
      spaces[25].innerHTML === currentPlayer &&
      spaces[32].innerHTML === currentPlayer &&
      spaces[39].innerHTML === currentPlayer) ||
    (spaces[20].innerHTML === currentPlayer &&
      spaces[27].innerHTML === currentPlayer &&
      spaces[34].innerHTML === currentPlayer &&
      spaces[41].innerHTML === currentPlayer) ||
    (spaces[19].innerHTML === currentPlayer &&
      spaces[26].innerHTML === currentPlayer &&
      spaces[33].innerHTML === currentPlayer &&
      spaces[40].innerHTML === currentPlayer) ||
    (spaces[18].innerHTML === currentPlayer &&
      spaces[25].innerHTML === currentPlayer &&
      spaces[32].innerHTML === currentPlayer &&
      spaces[39].innerHTML === currentPlayer) ||
    (spaces[3].innerHTML === currentPlayer &&
      spaces[8].innerHTML === currentPlayer &&
      spaces[13].innerHTML === currentPlayer &&
      spaces[18].innerHTML === currentPlayer) ||
    (spaces[4].innerHTML === currentPlayer &&
      spaces[9].innerHTML === currentPlayer &&
      spaces[14].innerHTML === currentPlayer &&
      spaces[19].innerHTML === currentPlayer) ||
    (spaces[5].innerHTML === currentPlayer &&
      spaces[10].innerHTML === currentPlayer &&
      spaces[15].innerHTML === currentPlayer &&
      spaces[20].innerHTML === currentPlayer) ||
    (spaces[9].innerHTML === currentPlayer &&
      spaces[14].innerHTML === currentPlayer &&
      spaces[19].innerHTML === currentPlayer &&
      spaces[24].innerHTML === currentPlayer) ||
    (spaces[10].innerHTML === currentPlayer &&
      spaces[15].innerHTML === currentPlayer &&
      spaces[20].innerHTML === currentPlayer &&
      spaces[25].innerHTML === currentPlayer) ||
    (spaces[11].innerHTML === currentPlayer &&
      spaces[16].innerHTML === currentPlayer &&
      spaces[21].innerHTML === currentPlayer &&
      spaces[26].innerHTML === currentPlayer) ||
    (spaces[15].innerHTML === currentPlayer &&
      spaces[20].innerHTML === currentPlayer &&
      spaces[25].innerHTML === currentPlayer &&
      spaces[30].innerHTML === currentPlayer) ||
    (spaces[16].innerHTML === currentPlayer &&
      spaces[21].innerHTML === currentPlayer &&
      spaces[26].innerHTML === currentPlayer &&
      spaces[31].innerHTML === currentPlayer) ||
    (spaces[17].innerHTML === currentPlayer &&
      spaces[22].innerHTML === currentPlayer &&
      spaces[27].innerHTML === currentPlayer &&
      spaces[32].innerHTML === currentPlayer) ||
    (spaces[21].innerHTML === currentPlayer &&
      spaces[26].innerHTML === currentPlayer &&
      spaces[31].innerHTML === currentPlayer &&
      spaces[36].innerHTML === currentPlayer) ||
    (spaces[22].innerHTML === currentPlayer &&
      spaces[27].innerHTML === currentPlayer &&
      spaces[32].innerHTML === currentPlayer &&
      spaces[37].innerHTML === currentPlayer) ||
    (spaces[23].innerHTML === currentPlayer &&
      spaces[28].innerHTML === currentPlayer &&
      spaces[33].innerHTML === currentPlayer &&
      spaces[39].innerHTML === currentPlayer)
  ) {
    gameOver = true;
    return true;
  } else {
    let momo = 0;
    let appa = 0;
    for (let i = 0; i < spaces.length; i++) {
      if (spaces[i].innerHTML === 'momo') {
        momo++;
      } else if (spaces[i].innerHTML === 'appa') {
        appa++;
      }
    }
    if (momo + appa === 42) {
      gameResult.innerHTML = 'DRAW!';
    }
  }
}

for (let i = 0; i < spaces.length; i++) {
  spaces[i].addEventListener('click', function () {
    if (gameOver === true) {
      return;
    }
    if (
      (spaces[i].innerHTML == 'momo' && spaces[i].innerHTML != 'appa') ||
      (spaces[i].innerHTML == 'appa' && spaces[i].innerHTML != 'momo')
    ) {
      return;
    }

    if (currentPlayer === 'momo') {
      spaces[i].innerHTML = 'momo';
      checkStatus();
      if (checkStatus()) {
        gameResult.innerHTML = 'Momo Wins!';
        gameOver = true;
      } else {
        turn.innerHTML = `Appa's Turn`;
        gameOver = false;
      }

      currentPlayer = 'appa';
    } else if (currentPlayer === 'appa') {
      spaces[i].innerHTML = 'appa';
      checkStatus();
      if (checkStatus()) {
        gameResult.innerHTML = 'Appa Wins!';
        gameOver = true;
      } else {
        turn.innerHTML = `Momo's Turn`;
        gameOver = false;
      }
      currentPlayer = 'momo';
    }
  });
}

for (let i = 0; i < spaces.length; i++) {
  resetGame.addEventListener('click', function () {
    spaces[i].innerHTML = '';
    gameResult.innerHTML = '';
    turn.innerHTML = `Momo's Turn`;
    gameOver = false;
  });
}
