import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trip } from '../trip';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCard {
  @Input() trip!: Trip;
  @Output() edit = new EventEmitter<Trip>();

  editTrip(): void {
    this.edit.emit(this.trip);
  }
}