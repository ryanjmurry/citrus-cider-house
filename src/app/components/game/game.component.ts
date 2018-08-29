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
  BOARD_SIZE = 18


  private dropletMoves;
  private catchInterval;

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
    clearInterval(this.dropletMoves);
    clearInterval(this.catchInterval);
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
    this.dropletMoves = setInterval(() => {this.droplet.y ++}, 200);
    }
  }

  checkCatch(): void {
    this.catchInterval = setInterval(() => {
      if (this.droplet.y === this.cup.y && this.droplet.x === this.cup.x) {
        this.score ++
        this.droplet.x = this.randomNumber();
        this.droplet.y = 0;
      } else if (this.droplet.y > 17) {
        this.misses ++
        this.droplet.x = this.randomNumber();
        this.droplet.y = 0;
      }
    }, 100);
  }

  randomNumber(): any { return Math.floor(Math.random() * this.BOARD_SIZE); }

  handleKeyboardEvents(e: KeyboardEvent) {
    console.log(e)
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
      return '#86B5BD'
    } else if (this.droplet.x === row && this.droplet.y === col) {
      return 'orange'
    } else if (this.cup.x === row && this.cup.y === col) {
      return '#336E7B'
    } else if (this.board[col][row] === true) {
      return '#86B5BD'
    }

    return '#86B5BD'
  };

}
