import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../enviroments/environment';

@Injectable({ providedIn: 'root' })
export class HttpBaseService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  get<T>(endpoint: string, params?: Record<string, any>) {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, {
      params: { api_key: this.apiKey, language: 'es-ES', ...params }
    });
  }
}
