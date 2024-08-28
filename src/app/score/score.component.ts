import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [
    CommonModule,MatIconModule,
  ],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreComponent { 
  @Input() currentScore: number = 0;

}
