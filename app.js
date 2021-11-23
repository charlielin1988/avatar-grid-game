const turn = document.querySelector('.turn');

const spaces = document.querySelectorAll('.space');

const resetGame = document.querySelector('.reset-game');

const momoMark = '\u{1F463}';

const appaMark = '\u{1F43E}';

let currentPlayer = momoMark;

const gameResult = document.querySelector('.game-result');
let gameOver = false;

function checkStatus() {
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
    let momoMark = 0;
    let appaMark = 0;
    for (let i = 0; i < spaces.length; i++) {
      if (spaces[i].innerHTML === momoMark) {
        momoMark++;
      } else if (spaces[i].innerHTML === appaMark) {
        appaMark++;
      }
    }
    if (momoMark + appaMark === 42) {
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
      (spaces[i].innerHTML == momoMark && spaces[i].innerHTML != appaMark) ||
      (spaces[i].innerHTML == appaMark && spaces[i].innerHTML != momoMark)
    ) {
      return;
    }

    if (currentPlayer === momoMark) {
      spaces[i].innerHTML = momoMark;
      checkStatus();
      if (checkStatus()) {
        gameResult.innerHTML = 'Momo Wins!';
        gameOver = true;
        turn.innerHTML = `Momo's Turn`;
      } else {
        turn.innerHTML = `Appa's Turn`;
        gameOver = false;
      }

      currentPlayer = appaMark;
    } else if (currentPlayer === appaMark) {
      spaces[i].innerHTML = appaMark;
      checkStatus();
      if (checkStatus()) {
        gameResult.innerHTML = 'Appa Wins!';
        gameOver = true;
      } else {
        turn.innerHTML = `Momo's Turn`;
        gameOver = false;
      }
      currentPlayer = momoMark;
    }
  });
}

for (let i = 0; i < spaces.length; i++) {
  resetGame.addEventListener('click', function () {
    spaces[i].innerHTML = '';
    gameResult.innerHTML = '';
    turn.innerHTML = `Momo's Turn`;
    gameOver = false;
    currentPlayer = momoMark;
  });
}
