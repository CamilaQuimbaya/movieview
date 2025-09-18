import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesListComponent } from './movies-list';
import { MovieService } from '../../data/movie.service.ts';
import { of } from 'rxjs';

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;
  let movieServiceSpy: jasmine.SpyObj<MovieService>;

  beforeEach(async () => {
    movieServiceSpy = jasmine.createSpyObj('MovieService', ['getPopular']);

    await TestBed.configureTestingModule({
      imports: [MoviesListComponent],
      providers: [{ provide: MovieService, useValue: movieServiceSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
  });

  it('should render title', () => {
    // 👇 devolvemos un observable vacío válido
    movieServiceSpy.getPopular.and.returnValue(of({
      page: 1, results: [], total_pages: 0, total_results: 0
    }));

    fixture.detectChanges(); // dispara ngOnInit
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent)
      .toContain('Películas Populares');
  });

  it('should load movies on init', () => {
    movieServiceSpy.getPopular.and.returnValue(of({
      page: 1, results: [], total_pages: 0, total_results: 0
    }));

    fixture.detectChanges(); // dispara ngOnInit
    expect(movieServiceSpy.getPopular).toHaveBeenCalled();
  });
});