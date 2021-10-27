import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  /**
   * the game board
   */
  public squares: Array<string>;

  /**
   * table that will store the moves of player N ° 1
   * @private
   */
  private playerOneContent: Array<number>;

  /**
   * table that will store the moves of player N ° 2
   * @private
   */
  private playerTwoContent: Array<number>;

  /**
   * variable that determines which of the two players will start
   * @private
   */
  private isFirst : boolean;

  constructor() {
      this.squares = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
      this.playerOneContent = [];
      this.playerTwoContent = [];
      this.isFirst = false;
  }

  ngOnInit(): void {
  }

  private updatePlayerContent(index: number) {

  }



}
