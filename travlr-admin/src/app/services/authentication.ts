import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/login`, user).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('travlr-token', response.token);
        }
      })
    );
  }

  register(user: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/register`, user);
  }

  getToken(): string | null {
    return localStorage.getItem('travlr-token');
  }

  logout(): void {
    localStorage.removeItem('travlr-token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
