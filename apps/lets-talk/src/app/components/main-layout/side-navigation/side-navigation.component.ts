import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DRAWER_ANIMATIONS } from './side-navigation.animations';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'lt-side-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './side-navigation.component.html',
  styleUrl: './side-navigation.component.scss',
  animations: DRAWER_ANIMATIONS,
})
export class SideNavigationComponent {
  @HostBinding('@drawerInit')
  init = true;
}
