class Game1To50 {
  constructor() {
    this.nodeList = [];
    this.frontList = [];
    this.backList = [];
    this.btn = document.querySelector('#start');
    this.init();
  }
  init() {
    this.btn.addEventListener(('click', this.createGame()));
    this.timeInit();
    this.container = document.querySelector('.container');


    console.log("Test");
  }
  createGame() {
    this.container.innerHTML = `
    <table>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>`
  }

  getTime() {
    this.h1 = document.querySelector('h1');
    this.today = new Date();
    const diff = Date.now() - today.getTime();
    let sec = Math.floor(diff / 1000);
    let min = Math.floor(sec / 60);
    let milSec = diff % 1000 / 100;
    this.h1.innerHTML = `${min}: ${sec}:${milSec}`;

  }
  timeInit() {
    setInterval(this.getTime, 10);
  }

}

window.game = new Game1To50();