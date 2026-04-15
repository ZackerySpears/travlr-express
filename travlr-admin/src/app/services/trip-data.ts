import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../trip';
import { AuthenticationService } from './authentication';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiBaseUrl = 'http://localhost:3000/api/trips';

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  private getHeaders(): HttpHeaders {
    const token = this.authenticationService.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token || ''}`
    });
  }

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiBaseUrl);
  }

  getTrip(tripId: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.apiBaseUrl}/${tripId}`);
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.apiBaseUrl, trip, { headers: this.getHeaders() });
  }

  updateTrip(tripId: string, trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.apiBaseUrl}/${tripId}`, trip, { headers: this.getHeaders() });
  }

  deleteTrip(tripId: string): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/${tripId}`, { headers: this.getHeaders() });
  }
}