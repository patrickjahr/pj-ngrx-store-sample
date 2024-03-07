import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '@lt/shared/angular/ui';
import { ContributionsStore } from '@lt/lets-talk/contributions/data-access';
import { ContributionDetailsComponent } from '../contribution-details/contribution-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'lt-contribution-collection',
  standalone: true,
  imports: [CommonModule, CardComponent, ContributionDetailsComponent],
  templateUrl: './contribution-collection.component.html',
  styleUrl: './contribution-collection.component.scss',
})
export class ContributionCollectionComponent {
  private readonly store = inject(ContributionsStore);
  private readonly router = inject(Router);

  readonly isLoading = this.store.isLoading;
  readonly contributions = this.store.contributions;
  readonly selected = this.store.selected;

  async selectContribution(id: string): Promise<void> {
    this.store.loadContribution(id);
    setTimeout(() => this.router.navigate([`contributions/${id}`]), 32);
  }
}
