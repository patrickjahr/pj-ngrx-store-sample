import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from '../main-layout/main-layout.component';

@Component({
  selector: 'lt-root',
  standalone: true,
  imports: [RouterOutlet, MainLayoutComponent],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss',
})
export class RootComponent {}
