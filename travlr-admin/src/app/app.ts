import { Component } from '@angular/core';
import { Trip } from './trip';
import { TripForm } from './trip-form/trip-form';
import { TripList } from './trip-list/trip-list';
import { Login } from './login/login';
import { AuthenticationService } from './services/authentication';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Login, TripForm, TripList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedTrip?: Trip;

  constructor(public authenticationService: AuthenticationService) {}

  onTripEdit(trip: Trip): void {
    this.selectedTrip = { ...trip };
  }

  onTripSaved(): void {
    this.selectedTrip = undefined;
  }

  logout(): void {
    this.authenticationService.logout();
    window.location.reload();
  }
}