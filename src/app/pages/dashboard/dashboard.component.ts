// dashboard.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from '../elements/custom-buttons/custom-button.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CustomButtonComponent],
  template: `
    <div class="dashboard-container">
      <h1>Welcome to the Dashboard</h1>
      <p>This is your HRMS dashboard with its own dedicated styling.</p>
      <app-custom-button label="Primary Action"></app-custom-button>
      <app-custom-button label="Secondary Action" [disabled]="true"></app-custom-button>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 2rem;
      background-color: #f5f5f5;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.05);
      margin: 1rem;
    }
    h1 {
      color: #333;
      margin-bottom: 1rem;
    }
    p {
      color: #666;
      margin-bottom: 2rem;
    }
  `]
})
export class DashboardComponent {}
