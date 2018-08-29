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
  public isGameOver = false;
  public score = 0;
  BOARD_SIZE = 18

  constructor() {
    this.setBoard();
  }

  private cup = {
    x: 8,
    y: 15
  };

  private droplet = {
    x: 0,
    y: 0
  };

  dropletMovement(): void{
    setInterval(() => {this.droplet.y ++}, 1000);
  }

  checkCatch(): void{
    setInterval(() => {
      if (this.droplet.y === this.cup.y && this.droplet.x === this.cup.x) {
        this.score ++
        this.droplet.x = this.randomNumber();
        this.droplet.y = 0;
      } else if (this.droplet.y > 17) {
        this.droplet.x = this.randomNumber();
        this.droplet.y = 0;
      }
    }, 100);
  }

  randomNumber(): any {
    return Math.floor(Math.random() * this.BOARD_SIZE);
  }

  ngOnInit() {
  }

  handleKeyboardEvents(e: KeyboardEvent) {
    if (e.key === 'ArrowRight') {
      if (this.cup.x < 17) {
        this.cup.x ++;
      }
    } else if (e.key === 'ArrowLeft') {
      if (this.cup.x > 0) {
        this.cup.x --;
      }
    }
  }

  setBoard(): void {
    this.dropletMovement();
    this.checkCatch();
    this.board = [];

    for (let i = 0; i < this.BOARD_SIZE; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.BOARD_SIZE; j++) {
        this.board[i][j] = false;
      }
    }
  }

  setColors(col: number, row: number): string {
    if (this.isGameOver) {
      console.log("Game Over")
    } else if (this.droplet.x === row && this.droplet.y === col) {
      return 'orange'
    } else if (this.cup.x === row && this.cup.y === col) {
      return '#336E7B'
    } else if (this.board[col][row] === true) {
      console.log("Stuff")
    }

    return '#86B5BD'
  };

}
