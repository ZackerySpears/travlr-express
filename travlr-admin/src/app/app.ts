import { Component } from '@angular/core';
import { Trip } from './trip';
import { TripForm } from './trip-form/trip-form';
import { TripList } from './trip-list/trip-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TripForm, TripList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedTrip?: Trip;

  onTripEdit(trip: Trip): void {
    this.selectedTrip = { ...trip };
  }

  onTripSaved(): void {
    this.selectedTrip = undefined;
  }
}