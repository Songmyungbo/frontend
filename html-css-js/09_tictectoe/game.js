class TicTacToe {
  constructor(p1, p2) {
    this.container = document.querySelector('.container');
    this.btnStart = document.querySelector('#start');
    this.off = document.querySelector('.off');
    this.p1 = p1; // 핑크의 주소
    this.p2 = p2; // 블루의 주소
    this.cnt = 0;
    this.winner = null;
    this.player = null;
    this.tdList = [];
    this.turn = false;
    this.init();
  }

  init() {
    this.btnStart.addEventListener('click', () => {
      this.addBox();
      this.createTdList();
      this.player = this.p1;
      this.cnt = 0;
      this.winner = null;
      this.turn = false;
    })
  }

  addBox() {
    this.container.innerHTML = `<table>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>`;
  }
  createTdList() {
    this.tdList = [];
    const tds = document.querySelectorAll('td');
    let cnt = 0;
    for (let i = 0; i < 3; i++) {
      let arr = [tds[cnt], tds[cnt + 1], tds[cnt + 2]];
      cnt += 3;
      this.tdList.push(arr);
    }
    this.tdList.forEach((tds) => {
      tds.forEach((td) => {
        td.addEventListener('click', (e) => {
          console.log(e.target);
          if (!this.turn) {
            this.playGame(e.target);
          }
        });
      });
    });
  }
  playGame(td) {
    if (td.innerHTML) return;
    this.turn = true;
    td.innerHTML = this.player.shape;
    td.classList.add(this.player.color);
    this.winCheck(this.player.shape);
    this.cnt += 1;
    console.log(this.cnt);

  }
  winCheck(shape) {
    let winCnt = 0;
    winCnt = this.check(shape);
    if (winCnt === 1) {
      this.winner = this.player == this.p1 ? this.p1 : this.p2;
      this.turn = true;
    } else {
      this.turn = false;
    }
    if (!this.winner) {
      this.player = this.player == this.p1 ? this.p2 : this.p1;
    } else {
      this.finish();
    }
  }
  check(shape) {
    let winCnt = 0;
    for (let i = 0; i < 3; i++) {
      if (this.tdList[0][i].innerHTML == shape && this.tdList[1][i].innerHTML == shape && this.tdList[2][i].innerHTML == shape) {
        winCnt = 1;
      } else if (this.tdList[i][0].innerHTML == shape && this.tdList[i][1].innerHTML == shape && this.tdList[i][2].innerHTML == shape) {
        winCnt = 1;
      } else if (this.tdList[0][0].innerHTML == shape && this.tdList[1][1].innerHTML == shape && this.tdList[2][2].innerHTML == shape) {
        winCnt = 1;
      } else if (this.tdList[0][2].innerHTML == shape && this.tdList[1][1].innerHTML == shape && this.tdList[2][0].innerHTML == shape) {
        winCnt = 1;
      }
      return winCnt;
    }
  }
  finish() {
    setTimeout(() => {
      this.winView();
    }, 500);
  }

  winView() {
    this.container.innerHTML = '';
    this.off.classList.remove('off');

    this.off.classList.add('on');
    if (!this.winner || this.cnt === 9) {
      this.off.innerHTML = '무승부 게임종료!';
    } else {
      this.off.innerHTML = `${this.winner.name} 승리!!<br> 게임종료`;
    }
    this.btnStart.innerHTML = '게임 다시시작';
    this.container.appendChild(this.off);
    this.container.appendChild(this.btnStart);
  }
}

class Player {
  constructor(name, color, shape) { // 핑크 pink o
    this.name = name;
    this.color = color;
    this.shape = shape;
  }
}





window.addEventListener("load", () => {
  window.game = new TicTacToe(new Player('핑크', 'pink', 'O'), new Player('블루', 'blue', 'X'))
})
