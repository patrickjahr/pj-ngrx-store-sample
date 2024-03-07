import { Route } from '@angular/router';
import { SpeakerCollectionComponent } from './speaker-collection/speaker-collection.component';
import {
  ApiSpeakersService,
  speakerStore,
} from '@lt/lets-talk/speakers/data-access';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';

export const featureSpeakersRoutes: Route[] = [
  {
    path: 'speakers',
    providers: [ApiSpeakersService, speakerStore],
    children: [
      { path: '', component: SpeakerCollectionComponent },
      { path: ':id', component: SpeakerDetailsComponent },
    ],
  },
];
