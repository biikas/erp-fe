import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule,RouterModule],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(private iconLibraries: NbIconLibraries) {
    // Register a custom icon set instead of Eva Icons
    this.iconLibraries.registerSvgPack('custom', {
      home: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',
      people: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm8 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zM8 13c-2.67 0-8 1.34-8 4v2h8v-2c0-.76.29-1.47.8-2.04C8.44 14.64 8.21 14.32 8 14z"/></svg>',
      calendar: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V10h14v11zm0-13H5V5h14v3z"/></svg>',
      settings: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm8.94-5.09l1.82-1.41-2.18-3.77-2.19.76c-.34-.27-.72-.5-1.14-.68l-.3-2.37h-4.3l-.3 2.37c-.42.18-.8.41-1.14.68l-2.19-.76-2.18 3.77 1.82 1.41c-.04.35-.04.71 0 1.07l-1.82 1.41 2.18 3.77 2.19-.76c.34.27.72.5 1.14.68l.3 2.37h4.3l.3-2.37c.42-.18.8-.41 1.14-.68l2.19.76 2.18-3.77-1.82-1.41c.04-.36.04-.72 0-1.07z"/></svg>'
    });

    this.iconLibraries.setDefaultPack('custom'); // ✅ Use Custom Icons
  }
}
