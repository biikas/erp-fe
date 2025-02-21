import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbMenuModule, NbMenuItem, NbIconModule, NbUserModule } from '@nebular/theme';

@Component({
  selector: 'app-dynamic-menu',
  standalone: true,
  imports: [CommonModule, NbMenuModule, NbIconModule, NbUserModule],
  template: `
    <div class="sidebar">

      <!-- Profile Section Inside Fully Curved Top -->
      <div class="sidebar-header">
        <nb-user name="Aaron Hamilton" title="Regional HR Manager" [picture]="'https://i.pravatar.cc/100?img=8'"></nb-user>
      </div>

      <!-- Sidebar Menu -->
      <div class="menu-container">
        <nb-menu [items]="menuItems"></nb-menu>
      </div>

      <!-- Logout Section at Bottom -->
      <div class="logout-section">
        <button nbButton class="logout-button" status="danger">Log Out</button>
      </div>

    </div>
  `,
  styles: [`
    :host {
      font-family: 'Poppins', sans-serif;
    }

    /* Sidebar with Fully Curved Shape */
    .sidebar {
      width: 270px;
      height: 100vh;
      background: white;
      box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem;
      position: fixed;
      left: 0;
      top: 0;
      border-radius: 50px; /* Full curves on both sides */
      overflow: hidden;
    }

    /* Sidebar Header with Curved Background */
    .sidebar-header {
      text-align: center;
      padding: 2rem;
      background: #0D47A1;
      color: white;
      font-size: 1.2rem;
      font-weight: 700;
      border-radius: 50px 50px 0 0;
    }

    /* Sidebar Menu */
    .menu-container {
      flex-grow: 1;
      padding: 1rem;
    }

    ::ng-deep nb-menu a {
      display: flex;
      align-items: center;
      padding: 0.9rem;
      font-size: 1rem;
      color: #334155;
      border-radius: 15px;
      transition: all 0.3s ease-in-out;
      margin-bottom: 5px;
      background: #F8FAFC;
    }

    ::ng-deep nb-menu a:hover {
      background: #E3F2FD;
      color: #0D47A1;
      transform: translateX(5px);
    }

    ::ng-deep nb-menu a.active {
      background: #0D47A1;
      color: white;
    }

    /* Logout Section */
    .logout-section {
      padding: 1.5rem;
      text-align: center;
      border-radius: 0 0 50px 50px; /* Curve at bottom */
      background: #E3F2FD;
    }

    .logout-button {
      width: 100%;
      border-radius: 20px;
      font-weight: 600;
    }
  `]
})
export class DynamicMenuComponent {
  menuItems: NbMenuItem[] = [
    { title: 'HR Administration', icon: 'people-outline', link: '/hr-admin' },
    { title: 'Employee Management', icon: 'briefcase-outline', link: '/employee' },
    { title: 'Reports & Analytics', icon: 'bar-chart-outline', link: '/reports' },
    { title: 'Leave', icon: 'calendar-outline', link: '/leave' },
    { title: 'Time Tracking', icon: 'clock-outline', link: '/time-tracking' },
    { title: 'Attendance', icon: 'checkmark-circle-outline', link: '/attendance' },
    { title: 'Recruitment (ATS)', icon: 'file-text-outline', link: '/recruitment' },
    { title: 'On/Offboarding', icon: 'swap-outline', link: '/onboarding' },
    { title: 'More', icon: 'more-horizontal-outline', link: '/more' },
  ];
}
