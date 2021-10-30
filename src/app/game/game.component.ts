import { Component, OnInit } from '@angular/core';
import {PlayersService} from "../services/players.service";

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

  private static readonly ILLEGAL: boolean = false;
  public static readonly EMPTY_CELL: string = ' ';

  /**
   * variable that determines which of the two players will start
   * @private
   */
  private nextPlayer : boolean;

  public errorMessage: string = ' ';

  player: object[];

  public player_1 = { name : '', pawn: '', lastIndex: 4, removeCell: false };
  public player_2 = { name : '', pawn: '', lastIndex: 4, removeCell: false };



  constructor(private playersService: PlayersService) {
      this.squares = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
      this.nextPlayer = true;
      this.player = [];
      console.log(this.player)
  }

  ngOnInit(): void {
      this.player = this.playersService.players;
      this.player_1 = this.playersService.getFirstPlayer();
      this.player_2 = this.playersService.getSecdPlayer();
  }


  /**
   * cette methode fait une mis a jour de notre tableau de jeu
   * @param index
   */
  public playMove(index: number) {

      if ( GameComponent.playerCantPlay(this.squares, this.isPlayer ()) ===  3) {
          this.removeCell(index);
          console.log()
          return;
      }
      // jouer dans une case
      if (this.checkMove(index) !== GameComponent.ILLEGAL) {
          // on jou un cop a une position donnée
          this.squares[index] = this.isPlayer();
          if (this.playersService.getDeletingSate(this.nextPlayer)) {
              console.log(this.isPlayer() + " remove");
              this.playersService.changeDeleteSate(this.nextPlayer);
          }
          // on compte le coup jouer de chaque joueur
          this.playersService.setLastMovement(this.nextPlayer, index);
          // au tours du deuxieme joueur
          this.nextPlayer = !this.nextPlayer;
          // console.log( this.nextPlayer + " => " + this.playersService.getLastMovement(this.nextPlayer))

      }


  }

  /**
   * cette methode determine qui sera le prochain joueur à jouer
   * @private
   */
  private isPlayer (): string {
      return this.nextPlayer ? this.player_2.pawn : this.player_1.pawn;
  }

  /**
   * cette methode permet de savoir si un coup jouer est legale ou illegale
   * @param index de la case selectionner ou jouer
   * @private
   */
  private checkMove(index: number): boolean {

    if (this.squares[index] !== GameComponent.EMPTY_CELL) {
        console.log("ERROR : Illegal move");
        return false;
    }
    return true;
  }

  private static playerCantPlay (data: Array<string>, pawn: string): number {
      return data.filter (function (value) {
        return value === pawn;
      }).length;
  }

  private removeCell (index: number): void {
      if(this.squares[index] === ' ') {
          console.log('bouger un de vos pion')
      }else if ( this.squares[index] === this.isPlayer()) {
          this.squares[index] = ' ';
          this.playersService.changeDeleteSate(this.nextPlayer);
          this.playersService.setLastMovement(this.nextPlayer,index);
      } else {
          console.log('pas ton pion')
      }
  }
}
