import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Trip } from '../trip';
import { TripDataService } from '../services/trip-data';

@Component({
  selector: 'app-trip-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trip-form.html',
  styleUrl: './trip-form.css'
})
export class TripForm implements OnChanges {
  @Input() trip?: Trip;
  @Output() saved = new EventEmitter<void>();

  formTrip: Trip = this.emptyTrip();

  constructor(private tripDataService: TripDataService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['trip']) {
      if (this.trip) {
        this.formTrip = { ...this.trip };
      } else {
        this.formTrip = this.emptyTrip();
      }
    }
  }

  onSubmit(): void {
  if (this.formTrip._id) {
    this.tripDataService.updateTrip(this.formTrip._id, this.formTrip).subscribe({
      next: () => {
        this.formTrip = this.emptyTrip();
        this.saved.emit();
        window.location.reload();
      },
      error: (err) => {
        console.error(err);
      }
    });
  } else {
    this.tripDataService.addTrip(this.formTrip).subscribe({
      next: () => {
        this.formTrip = this.emptyTrip();
        this.saved.emit();
        window.location.reload();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}

  cancelEdit(): void {
    this.formTrip = this.emptyTrip();
    this.saved.emit();
  }

  private emptyTrip(): Trip {
    return {
      code: '',
      name: '',
      length: '',
      start: '',
      resort: '',
      perPerson: '',
      image: '',
      description: ''
    };
  }
}