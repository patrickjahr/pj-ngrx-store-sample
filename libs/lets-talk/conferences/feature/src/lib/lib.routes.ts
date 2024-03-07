import { Route } from '@angular/router';
import { ConferenceCollectionComponent } from './conference-collection/conference-collection.component';
import { provideState } from '@ngrx/store';
import {
  ApiConferencesService,
  ConferenceEffects,
  conferencesFeature,
} from '@lt/lets-talk/conferences/data-access';
import { provideEffects } from '@ngrx/effects';
import { ConferenceDetailComponent } from './conference-detail/conference-detail.component';

export const featureConferencesRoutes: Route[] = [
  {
    path: 'conferences',
    providers: [
      ApiConferencesService,
      provideState(conferencesFeature),
      provideEffects(ConferenceEffects),
    ],
    children: [
      {
        path: '',
        component: ConferenceCollectionComponent,
      },
      {
        path: ':id',
        component: ConferenceDetailComponent,
      },
    ],
  },
];
