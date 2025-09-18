import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie.service.ts';
import { environment } from '../../../../enviroments/environment.development';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });
    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

 it('should fetch popular movies', () => {
  const mockResponse = { 
    page: 1,
    results: [],
    total_pages: 0,        // 👈 agregado
    total_results: 0
  };

  service.getPopular(1).subscribe((res) => {
    expect(res).toEqual(mockResponse);
  });

  const req = httpMock.expectOne(
    `${environment.apiUrl}/movie/popular?api_key=${environment.apiKey}&language=es-ES&page=1&query=`
  );
  expect(req.request.method).toBe('GET');
  req.flush(mockResponse);
});
});
