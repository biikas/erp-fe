import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbIconModule } from '@nebular/theme';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NbButtonModule, NbIconModule],
  template: `
    <div class="header-container">
      <button nbButton ghost status="info" (click)="toggle.emit()" class="menu-toggle">
        <nb-icon icon="menu-2-outline" ></nb-icon>
      </button>
      <span class="brand">HRMS</span>
    </div>
  `,
  styles: [`
    .header-container {
      display: flex;
      align-items: center;
      background: #fff;
      padding: 0.5rem 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  `]
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter<void>();
}
