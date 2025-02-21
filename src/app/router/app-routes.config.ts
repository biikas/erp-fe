import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/auth/login/login.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { LayoutComponent } from '../pages/elements/layout/layout.component';



export const AppRoutes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { 
    path: '', 
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      // Additional child routes (e.g., employee, leave) can be added here.
    ]
  },
  { path: '**', redirectTo: 'login' }
];
