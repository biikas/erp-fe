import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { DynamicMenuComponent } from '../menu/dynamic-menu.component';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,      // ✅ Import RouterModule for <router-outlet>
    NbLayoutModule, 
    NbSidebarModule, 
    HeaderComponent, 
    DynamicMenuComponent
  ],
  template: `
    <nb-layout>
      <nb-layout-header fixed>
        <app-header (toggleSidebar)="toggleSidebar()"></app-header>
      </nb-layout-header>
      
      <nb-sidebar [(state)]="sidebarState" tag="menu-sidebar">
        <app-dynamic-menu></app-dynamic-menu>
      </nb-sidebar>
      
      <nb-layout-column>
        <router-outlet></router-outlet>
      </nb-layout-column>
    </nb-layout>
  `,
  styles: [`
    nb-layout {
      min-height: 100vh;
    }
  `]
})
export class LayoutComponent {
  sidebarState: 'expanded' | 'collapsed' | 'compacted' = 'expanded'; // ✅ Fixed Type

  toggleSidebar() {
    // ✅ Ensure that "compacted" is also handled properly
    this.sidebarState = this.sidebarState === 'expanded' ? 'collapsed' : 'expanded';
  }
}
