import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Contribution } from '@lt/shared/typescript/domain';

@Component({
  selector: 'lt-next-feature-contributions',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './feature-contributions.component.html',
  styleUrl: './feature-contributions.component.scss',
})
export class FeatureContributionsComponent {
  private readonly http = inject(HttpClient);

  readonly contributions$ = this.http.get<Contribution[]>('api/contributions');
}
