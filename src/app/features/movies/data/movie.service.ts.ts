import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../enviroments/environment';


import { MovieResponse } from './movie.model';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  getPopular(page = 1, query?: string): Observable<MovieResponse> {
    const endpoint = query ? 'search/movie' : 'movie/popular';
    return this.http.get<MovieResponse>(`${this.baseUrl}/${endpoint}`, {
      params: {
        api_key: this.apiKey,
        language: 'es-ES',
        page,
        query: query ?? ''
      }
    });
  }
}
