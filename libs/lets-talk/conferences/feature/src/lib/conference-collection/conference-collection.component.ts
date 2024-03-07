import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '@lt/shared/angular/ui';
import { conferencesFeature } from '@lt/lets-talk/conferences/data-access';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ConferenceDetailComponent } from '../conference-detail/conference-detail.component';

@Component({
  selector: 'lt-conference-collection',
  standalone: true,
  imports: [CommonModule, CardComponent, ConferenceDetailComponent],
  templateUrl: './conference-collection.component.html',
  styleUrl: './conference-collection.component.scss',
})
export class ConferenceCollectionComponent {
  private readonly router = inject(Router);
  private readonly store = inject(Store);

  id = input<string | undefined>(undefined);

  readonly conferences = this.store.selectSignal(
    conferencesFeature.selectConferences
  );

  readonly isLoading = this.store.selectSignal(
    conferencesFeature.selectLoadingCollection
  );

  async selectConf(id: string): Promise<void> {
    await this.router.navigate([`conferences/${id}`]);
  }
}
