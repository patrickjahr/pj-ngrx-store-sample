import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Conference } from '@lt/shared/typescript/domain';

@Component({
  selector: 'lt-next-feature-conferences',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './feature-conferences.component.html',
  styleUrl: './feature-conferences.component.scss',
})
export class FeatureConferencesComponent {
  private readonly http = inject(HttpClient);

  readonly conferences$ = this.http.get<Conference[]>('api/conferences');
}
