import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Speaker } from '@lt/shared/typescript/domain';

@Component({
  selector: 'lt-next-feature-speakers',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './feature-speakers.component.html',
  styleUrl: './feature-speakers.component.scss',
})
export class FeatureSpeakersComponent {
  private readonly http = inject(HttpClient);

  readonly speakers$ = this.http.get<Speaker[]>('api/speakers');
}
