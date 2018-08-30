import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  host: {
    '(document:keydown)': 'handleKeyboardEvents($event)'
  }
})
export class GameComponent implements OnInit {
  public board = [];
  public isGameStart = false;
  public isGameOver = false;
  public score = 0;
  public misses = 0;
  public finalScore;
  private dropletInterval: number = 200;
  private checkInterval: number = 100
  BOARD_SIZE = 18


  private dropletMoves;
  private catchInterval;
  private scoreInterval;

  constructor() {
    this.setBoard();
  }

  ngOnInit() {
  }

  private cup = {
    x: 8,
    y: 15
  };

  private droplet = {
    x: 0,
    y: 0
  };

  setBoard(): void {
    this.board = [];

    for (let i = 0; i < this.BOARD_SIZE; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.BOARD_SIZE; j++) {
        this.board[i][j] = false;
      }
    }
  }

  startGame(){
    this.isGameOver = false;
    this.isGameStart = true;
    this.dropletMovement();
    this.checkCatch();
  }

  restartGame(){
    this.finalScore = this.score;
    clearInterval(this.dropletMoves);
    this.dropletInterval = 200;
    clearInterval(this.catchInterval);
    this.checkInterval = 100;
    clearInterval(this.scoreInterval);
    this.droplet.x = this.randomNumber();
    this.droplet.y = 0;
    this.cup.x = 8;
    this.cup.y = 15;
    this.isGameOver = true;
    this.isGameStart = false;
    this.score = 0;
    this.misses = 0;
  }

  dropletMovement(): void {
    if (this.isGameStart == true) {
    this.dropletMoves = setInterval(() => {this.droplet.y ++}, this.dropletInterval);
    }
  }

  checkCatch(): void {
    this.catchInterval = setInterval(() => {
      if (this.droplet.y === this.cup.y && this.droplet.x === this.cup.x) {
        this.score ++
        this.droplet.x = this.randomNumber();
        this.droplet.y = 0;
        this.checkScore();
      } else if (this.droplet.y > 17) {
        this.misses ++
        this.droplet.x = this.randomNumber();
        this.droplet.y = 0;
        this.checkMisses();
      }
    }, this.checkInterval);
  }

  updateInterval() {
    clearInterval(this.dropletMoves);
    clearInterval(this.catchInterval);
    this.dropletMovement();
    this.checkCatch();
  }

  checkMisses() {
    if (this.misses >= 10) {
      this.restartGame();
    }
  }

  checkScore(): void {
    if (this.score === 5) {
      this.dropletInterval -= 35
      this.checkInterval -= 30
    } else if (this.score === 15) {
      this.dropletInterval -= 35
      this.checkInterval -= 30
    } else if (this.score === 25) {
      this.dropletInterval -= 35
      this.checkInterval -= 30
    }
    this.checkMisses();
    this.updateInterval();
  }

  randomNumber(): any { return Math.floor(Math.random() * this.BOARD_SIZE); }

  handleKeyboardEvents(e: KeyboardEvent) {
    if (e.key === 'ArrowRight') {
      this.cup.x < 17 ? this.cup.x ++: this.cup.x;
    } else if (e.key === 'ArrowLeft') {
      this.cup.x > 0 ? this.cup.x --: this.cup.x;
    } else if (e.key === ' ') {
      this.startGame();
    }
  }

  setColors(col: number, row: number): string {
    if (this.isGameOver) {
      return 'url(../assets/game-bg.svg)'
    } else if (this.droplet.x === row && this.droplet.y === col) {
      return 'url(../assets/drop.svg)'
    } else if (this.cup.x === row && this.cup.y === col) {
      return 'url(../assets/pint.svg)'
    } else if (this.board[col][row] === true) {
      return 'url(../assets/game-bg.svg)'
    }

    return 'url(../assets/game-bg.svg)'
  };

}
