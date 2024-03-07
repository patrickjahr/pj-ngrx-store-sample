import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';

@Component({
  selector: 'lt-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SideNavigationComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
