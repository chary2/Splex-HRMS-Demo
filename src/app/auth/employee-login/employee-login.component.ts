import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-login.component.html',
  styleUrl: './employee-login.component.css'
})
export class EmployeeLoginComponent {
  email = '';
  password = '';
  rememberMe = false;
  showPassword = false;

  constructor(private router: Router) {}

  login(): void {
    if (!this.email.trim() || !this.password.trim()) {
      alert('Please enter email and password.');
      return;
    }

    // Demo authentication only.
    // Replace this with your real authentication API.
    localStorage.setItem('hrms_demo_logged_in', 'true');
    this.router.navigate(['/employee/dashboard']);
  }
}