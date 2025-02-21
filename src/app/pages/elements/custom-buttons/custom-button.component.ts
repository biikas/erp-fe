// custom-button.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule } from '@nebular/theme';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [CommonModule, NbButtonModule],
  template: `<button nbButton status="primary" [disabled]="disabled">{{ label }}</button>`,
  styles: [`
    button {
      margin: 0.5rem;
    }
  `]
})
export class CustomButtonComponent {
  @Input() label: string = 'Button';
  @Input() disabled: boolean = false;
}
