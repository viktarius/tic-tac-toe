import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WINNER_COMBINATIONS } from '../core/constants';
import { Player } from '../core/core.interfaces';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent implements OnInit {
  public squares: (Player | null)[];
  public winner: Player | null;
  public currentPlayer: Player = 'X';

  public ngOnInit() {
    this.startGame();
  }

  public startGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
  }


  public makeMove(position: number, event: Event) {
    if (!this.squares[position] && !this.winner) {
      this.squares.splice(position, 1, this.currentPlayer);
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
    this.winner = this.calculateWinner();
    event.preventDefault();
    event.stopPropagation();
  }

  private calculateWinner(): 'X' | 'O' {
    for (const line of WINNER_COMBINATIONS) {
      const [a, b, c] = line;
      if (this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }
    return null;
  }

}
