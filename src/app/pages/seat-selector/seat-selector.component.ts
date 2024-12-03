import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { NbLayoutModule, NbCardModule, NbIconModule, NbCheckboxModule, NbSidebarModule, NbMenuModule, NbActionsModule, NbInputModule, NbSidebarService } from "@nebular/theme";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'tool-password-generator',
    templateUrl: './seat-selector.component.html',
    styleUrls: ['./seat-selector.component.scss'],
    standalone: true,
    imports: [NbLayoutModule,NbEvaIconsModule,NbCardModule,NbIconModule,NbCheckboxModule,FormsModule,ReactiveFormsModule, NbSidebarModule, NbMenuModule, HeaderComponent, RouterOutlet, NbActionsModule, CommonModule, FormsModule, NbInputModule,],
    providers: [NbSidebarService]
})
export class SeatSelectorComponent{


    seats = [
        { label: 'A1', status: 'available' },
        { label: 'A2', status: 'booked' },
        { label: 'A3', status: 'available' },
        { label: 'A4', status: 'booked' },
        { label: 'A5', status: 'available' },
        { label: 'A6', status: 'available' },
        { label: 'A7', status: 'booked' },
        { label: 'A8', status: 'available' },
        { label: 'A9', status: 'available' },
        { label: 'A10', status: 'available' },
        // Add more rows and seats as needed
      ];
    
      selectedSeats: string[] = [];
    
      selectSeat(seat: { label: string; status: string }) {
        if (seat.status === 'available') {
          seat.status = 'selected';
          this.selectedSeats.push(seat.label);
        }
      }
    
}