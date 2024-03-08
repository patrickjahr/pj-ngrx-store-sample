import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '@lt/shared/angular/ui';
import {
  conferencesFeature,
  ConferencesPageActions,
} from '@lt/lets-talk/conferences/data-access';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ConferenceDetailComponent } from '../conference-detail/conference-detail.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

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
    conferencesFeature.selectLoading
  );

  readonly activeId = toSignal(
    this.store
      .select(conferencesFeature.selectSelectedConference)
      .pipe(map((conf) => conf?.id))
  );

  async selectConf(id: string): Promise<void> {
    this.store.dispatch(ConferencesPageActions.selectItem({ id }));
    setTimeout(() => this.router.navigate([`conferences/${id}`]), 32);
  }
}
