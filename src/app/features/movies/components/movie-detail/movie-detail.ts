import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Movie } from '../../data/movie.model';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './movie-detail.html',
  styleUrls: ['./movie-detail.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Movie) {}
}
