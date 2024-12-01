import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbLayoutModule, NbCardModule, NbInputModule, NbButtonModule } from '@nebular/theme';

@Component({
    selector: 'app-color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.scss'],
    standalone:true,
    imports: [CommonModule, FormsModule, NbLayoutModule, NbCardModule, NbInputModule,NbButtonModule]
})
export class ColorPickerComponent {
    selectedColor: string = '#ffffff'; // Default white
    colorHex: string = '#ffffff';
    colorRgb: string = '';
    colorHsl: string = '';


    updateColorValues(color: string) {
        this.colorHex = color;
        this.colorRgb = this.hexToRgb(color);
        this.colorHsl = this.hexToHsl(color);
    }

    hexToRgb(hex: string): string {
        let r = parseInt(hex.slice(1, 3), 16);
        let g = parseInt(hex.slice(3, 5), 16);
        let b = parseInt(hex.slice(5, 7), 16);
        return `rgb(${r}, ${g}, ${b})`;
    }

    hexToHsl(hex: string): string {
        let r = parseInt(hex.slice(1, 3), 16) / 255;
        let g = parseInt(hex.slice(3, 5), 16) / 255;
        let b = parseInt(hex.slice(5, 7), 16) / 255;
        let cmin = Math.min(r,g,b),
            cmax = Math.max(r,g,b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;

        if (delta == 0) h = 0;
        else if (cmax == r) h = ((g - b) / delta) % 6;
        else if (cmax == g) h = (b - r) / delta + 2;
        else h = (r - g) / delta + 4;

        h = Math.round(h * 60);
        
        if (h < 0) h += 360;

        l = (cmax + cmin) / 2;
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        return `hsl(${h}, ${s}%, ${l}%)`;
    }
}
