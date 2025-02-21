// dynamic-menu.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbMenuModule, NbMenuItem, NbPopoverModule } from '@nebular/theme';
import { NbUserModule } from '@nebular/theme';

@Component({
  selector: 'app-dynamic-menu',
  standalone: true,
  imports: [CommonModule, NbMenuModule, NbUserModule, NbPopoverModule],
  template: `
    <div class="modern-sidebar-container">
      <div class="nav-menu">
<nb-menu [items]="navMenuItems" ></nb-menu>
      </div>
      <div class="profile-menu">
        <nb-user 
          [name]="userName" 
          [picture]="userPicture" 
          size="small"
          nbPopoverTrigger="click"
          nbPopoverPlacement="top"
          [nbPopover]="profileMenuTemplate">
        </nb-user>
        <ng-template #profileMenuTemplate>
          <nb-menu [items]="profileMenuItems"></nb-menu>
        </ng-template>
      </div>
    </div>
  `,
  styles: [`
    :host {
      font-family: 'Poppins', sans-serif;
    }
    .modern-sidebar-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: #fff;
      border-right: 1px solid #e0e0e0;
    }
    .nav-menu {
      flex: 1;
      overflow-y: auto;
    }
    .profile-menu {
      padding: 1rem;
      border-top: 1px solid #e0e0e0;
    }
    /* Modern nav menu styling */
    ::ng-deep nb-menu a {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
      color: #4a4a4a;
      transition: background 0.3s, color 0.3s;
      border-radius: 8px;
    }
    ::ng-deep nb-menu a:hover, ::ng-deep nb-menu a.active {
      background-color: #f0f4ff;
      color: #3c82f6;
    }
    ::ng-deep nb-menu ul nb-menu a {
      padding-left: 2.5rem;
      font-size: 0.95rem;
    }
  `]
})
export class DynamicMenuComponent implements OnInit {
  navMenuItems: NbMenuItem[] = [];
  profileMenuItems: NbMenuItem[] = [];
  userName: string = 'John Doe';
  userPicture: string = 'https://i.pravatar.cc/150?img=3';

  ngOnInit(): void {
    this.navMenuItems = [
      { title: 'Dashboard', icon: 'home-outline', link: '/dashboard' },
      { 
        title: 'Employee Management', 
        icon: 'people-outline', 
        children: [
          { title: 'Add Employee', icon: 'person-add-outline', link: '/employee/add' },
          { title: 'View Employees', icon: 'people-outline', link: '/employee/view' },
          { title: 'Departments', icon: 'layers-outline', link: '/employee/departments' }
        ]
      },
      { 
        title: 'Leave Management', 
        icon: 'calendar-outline', 
        children: [
          { title: 'Apply Leave', icon: 'edit-outline', link: '/leave/apply' },
          { title: 'Leave History', icon: 'clock-outline', link: '/leave/history' }
        ]
      }
    ];
    this.profileMenuItems = [
      { title: 'Profile', icon: 'person-outline' },
      { title: 'Settings', icon: 'settings-outline' },
      { title: 'Logout', icon: 'log-out-outline' }
    ];
  }
}
