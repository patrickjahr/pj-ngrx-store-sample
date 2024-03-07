import { Conference } from '@lt/shared/typescript/domain';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ConferencesPageActions = createActionGroup({
  source: 'Conferences Page',
  events: {
    Opened: emptyProps(),
    SelectItem: props<{ id: string }>(),
    UpdateConference: props<{ conference: Conference }>(),
  },
});

export const ConferencesApiActions = createActionGroup({
  source: 'Conferences API',
  events: {
    'Conferences loaded success': props<{ conferences: Conference[] }>(),
    'Conferences loaded failure': props<{ errorMsg: string }>(),
    'Conference loaded success': props<{ conference: Conference }>(),
    'Conference loaded failure': props<{ errorMsg: string }>(),
    'Conference updated success': props<{ conference: Conference }>(),
    'Conference updated failure': props<{ errorMsg: string }>(),
  },
});
