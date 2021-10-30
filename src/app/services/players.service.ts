export class PlayersService {

  public players= [
    {
        "name" : ' ',
        "pawn" : 'X',
        "lastIndex" : -1,
        "removeCell": false,
    },
    {
        "name" : ' ',
        "pawn" : 'O',
        "lastIndex" : -1,
        "removeCell": false,
    },
  ];

  public towin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
  ];

  public getFirstPlayer(){
      return this.players[0];
  }

  public getSecdPlayer() {
      return this.players[1];
  }

  public getContentForWin() {
      return this.players[1];
  }

  public setLastMovement(getplayer: boolean, oldIndex: number): void {
      getplayer? this.players[0].lastIndex = oldIndex : this.players[1].lastIndex = oldIndex;
  }

  public getLastMovement(getplayer: boolean): number {
      return getplayer? this.players[0].lastIndex: this.players[1].lastIndex;
  }

  public changeDeleteSate( getplayer : boolean): void {
    getplayer? this.players[0].removeCell = !this.players[0].removeCell :
      this.players[1].removeCell = !this.players[1].removeCell ;
  }

  public getDeletingSate( getplayer : boolean): boolean {
    return getplayer? this.players[0].removeCell : this.players[1].removeCell ;
  }
}
