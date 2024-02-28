import { Route } from '@angular/router';
import { featureConferencesRoutes } from '@lt/lets-talk/conferences/feature';
import { featureSpeakersRoutes } from '@lt/lets-talk/speakers/feature';
import { featureContributionsRoutes } from '@lt/lets-talk/contributions/feature';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'contributions',
  },
  ...featureConferencesRoutes,
  ...featureSpeakersRoutes,
  ...featureContributionsRoutes,
];
