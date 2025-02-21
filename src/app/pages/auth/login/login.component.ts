import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbInputModule, NbIconModule, NbCardModule } from '@nebular/theme';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NbButtonModule,
    NbInputModule,
    NbIconModule,
    NbCardModule
  ],
  template: `
    <div class="login-container">

      <!-- Left Section: Branding & Info -->
      <div class="left-section">
        <h1>Welcome to <span class="brand">MBank Technology</span></h1>
        <p>Smart HR solutions for managing employees, payroll, and performance tracking.</p>
      </div>

      <!-- Right Section: Login Form -->
      <div class="right-section">
        <div class="login-card">
          <div class="logo">
            <span *ngIf="!logoUrl" class="text-logo">MBank Technology</span>
            <img *ngIf="logoUrl" [src]="logoUrl" alt="Company Logo">
          </div>

          <h2>Sign In</h2>
          <p>Enter your credentials to access your dashboard</p>

          <form (ngSubmit)="login()">
            <div class="input-group">
              <nb-icon icon="person-outline"></nb-icon>
              <input nbInput placeholder="Username" [(ngModel)]="username" name="username" required />
            </div>

            <div class="input-group password-box">
              <nb-icon icon="lock-outline"></nb-icon>
              <input nbInput [type]="passwordVisible ? 'text' : 'password'" placeholder="Password"
                [(ngModel)]="password" name="password" required />
              <nb-icon (click)="togglePassword()" class="eye-icon"
                [icon]="passwordVisible ? 'eye-off-outline' : 'eye-outline'"></nb-icon>
            </div>

            <div class="remember-me">
              <input type="checkbox" id="remember" />
              <label for="remember">Keep me logged in for 30 days</label>
            </div>

            <button nbButton type="submit" class="login-button">Login</button>
          </form>

          <div class="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
      </div>

    </div>
  `,
  styles: [`
    :host {
      font-family: 'Poppins', sans-serif;
    }

    /* Full-Screen Layout */
    .login-container {
      display: flex;
      height: 100vh;
      background: linear-gradient(135deg, #E3F2FD, #BBDEFB);
      justify-content: center;
      align-items: center;
      padding: 2rem;
    }

    /* Left Section (Branding) */
    .left-section {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 2rem;
      color: #0D47A1;
    }

    .left-section h1 {
      font-size: 2.5rem;
      font-weight: 700;
    }

    .brand {
      color: #1565C0;
    }

    .left-section p {
      font-size: 1.1rem;
      max-width: 400px;
      margin-bottom: 20px;
      opacity: 0.8;
    }

    /* Right Section (Login Card) */
    .right-section {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .login-card {
      width: 100%;
      max-width: 400px;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(15px);
      padding: 2rem;
      border-radius: 20px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
      text-align: center;
    }

    .logo {
      margin-bottom: 15px;
    }

    .text-logo {
      font-size: 1.4rem;
      font-weight: 600;
      color: #0D47A1;
    }

    .logo img {
      width: 100px;
    }

    .login-card h2 {
      font-size: 1.8rem;
      color: #0D47A1;
      margin-bottom: 10px;
    }

    .login-card p {
      font-size: 1rem;
      color: #4a5568;
      opacity: 0.8;
      margin-bottom: 20px;
    }

    /* Input Fields */
    .input-group {
      display: flex;
      align-items: center;
      background: #E3F2FD;
      padding: 0.8rem;
      border-radius: 12px;
      margin-bottom: 15px;
      transition: box-shadow 0.3s;
    }

    .input-group:hover {
      box-shadow: 0px 0px 10px rgba(13, 71, 161, 0.3);
    }

    .input-group nb-icon {
      font-size: 1.2rem;
      margin-right: 10px;
      color: #0D47A1;
    }

    input[nbInput] {
      flex: 1;
      border: none;
      outline: none;
      background: transparent;
      font-size: 1rem;
      color: #1e293b;
    }

    /* Password Box */
    .password-box {
      position: relative;
    }

    .eye-icon {
      cursor: pointer;
      position: absolute;
      right: 10px;
      color: #0D47A1;
      font-size: 1.2rem;
    }

    /* Login Button */
    .login-button {
      width: 100%;
      padding: 0.9rem;
      border-radius: 12px;
      font-weight: 600;
      background: linear-gradient(to right, #1E88E5, #1565C0);
      color: white;
      transition: background 0.3s, transform 0.2s;
    }

    .login-button:hover {
      background: linear-gradient(to right, #1565C0, #0D47A1);
      transform: scale(1.03);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    }

    /* Forgot Password */
    .forgot-password {
      margin-top: 15px;
    }

    .forgot-password a {
      color: #0D47A1;
      font-weight: 500;
      text-decoration: none;
    }

    .forgot-password a:hover {
      text-decoration: underline;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .login-container {
        flex-direction: column;
      }

      .left-section {
        width: 100%;
        text-align: center;
      }

      .right-section {
        width: 100%;
      }
    }

    @media (max-width: 768px) {
      .login-container {
        flex-direction: column;
        padding: 1rem;
      }

      .left-section {
        display: none;
      }

      .right-section {
        width: 100%;
      }

      .login-card {
        width: 100%;
        max-width: 90%;
      }
    }
  `]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  passwordVisible: boolean = false;
  logoUrl: string = ''; // Set logo URL when available

  constructor() {}

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }

  login() {
    console.log("Login Successful!");
  }
}
