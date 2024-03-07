import { Route } from '@angular/router';
import { ContributionCollectionComponent } from './contribution-collection/contribution-collection.component';
import {
  ApiContributionsService,
  ContributionsStore,
} from '@lt/lets-talk/contributions/data-access';
import { provideComponentStore } from '@ngrx/component-store';
import { ContributionDetailsComponent } from './contribution-details/contribution-details.component';

export const featureContributionsRoutes: Route[] = [
  {
    path: 'contributions',
    providers: [
      ApiContributionsService,
      provideComponentStore(ContributionsStore),
    ],
    children: [
      {
        path: '',
        component: ContributionCollectionComponent,
      },
      {
        path: ':id',
        component: ContributionDetailsComponent,
      },
    ],
  },
];
