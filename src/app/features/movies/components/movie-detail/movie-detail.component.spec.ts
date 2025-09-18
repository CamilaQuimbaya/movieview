import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailComponent } from './movie-detail';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('MovieDetailComponent', () => {
  let fixture: ComponentFixture<MovieDetailComponent>;

  const mockMovie = {
    id: 1,
    title: 'Inception',
    poster_path: '/test.jpg',
    release_date: '2010-07-16',
    vote_average: 8.8,
    overview: 'A mind-bending thriller'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDetailComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockMovie }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailComponent);
  });

  it('should display movie title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent)
      .toContain('Inception');
  });

  it('should display movie overview', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('mind-bending thriller');
  });
});
