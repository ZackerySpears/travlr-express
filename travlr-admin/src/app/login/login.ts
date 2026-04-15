import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../services/authentication';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  credentials = {
    email: '',
    password: ''
  };

  message = '';

  constructor(private authenticationService: AuthenticationService) {}

  onSubmit(): void {
    this.authenticationService.login(this.credentials).subscribe({
      next: () => {
        this.message = 'Login successful';
        window.location.reload();
      },
      error: () => {
        this.message = 'Login failed';
      }
    });
  }
}