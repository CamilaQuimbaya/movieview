import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';


import { MovieService } from '../../data/movie.service.ts';
import { Movie } from '../../data/movie.model';
import { SharedTableComponent } from '../../../../shared/components/table/shared-table/shared-table';
import { MovieDetailComponent } from '../../components/movie-detail/movie-detail.js';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,   // 👈 importante
    SharedTableComponent
  ],
  templateUrl: './movies-list.html',
  styleUrls: ['./movies-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent implements OnInit {
  private svc = inject(MovieService);
  private cdr = inject(ChangeDetectorRef);
  private dialog = inject(MatDialog);

  displayedColumns = ['poster', 'title', 'release_date', 'vote_average'];
  data: Movie[] = [];
  totalResults = 0;
  pageSize = 10;
  pageIndex = 0;
  loading = false;
  lastQuery = '';

  searchControl = new FormControl(''); // 👈 nuevo

  ngOnInit() {
    this.loadMovies();

    // 👇 optimización: debounce y cancelación
    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(query => {
        this.pageIndex = 0;
        this.loading = true;
      }),
      switchMap(query => this.svc.getPopular(1, query ?? ''))
    ).subscribe({
      next: res => {
        this.data = res.results;
        this.totalResults = res.total_results;
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: err => {
        console.error('Error TMDB:', err);
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }

  loadMovies(page: number = 1, query?: string) {
    this.loading = true;
    this.lastQuery = query ?? this.lastQuery;
    this.svc.getPopular(page, this.lastQuery).subscribe({
      next: (res) => {
        this.data = res.results;
        this.totalResults = res.total_results;
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error TMDB:', err);
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadMovies(this.pageIndex + 1);
  }

  openDetail(movie: Movie) {
    this.dialog.open(MovieDetailComponent, {
      width: '600px',
      data: movie
    });
  }
}