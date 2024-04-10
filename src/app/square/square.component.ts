import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Player } from '../core/core.interfaces';

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquareComponent {
  @Input() public value: Player;
}
