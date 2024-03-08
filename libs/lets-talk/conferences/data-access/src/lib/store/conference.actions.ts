import { Conference } from '@lt/shared/typescript/domain';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ConferencesPageActions = createActionGroup({
  source: 'Conferences Page',
  events: {
    Opened: emptyProps(),
    SelectItem: props<{ id: string }>(),
  },
});

export const ConferencesApiActions = createActionGroup({
  source: 'Conferences API',
  events: {
    'Update conference': props<{ conference: Conference }>(),
    'Delete conference': props<{ id: string }>(),
    'Conferences loaded success': props<{ conferences: Conference[] }>(),
    'Conference loaded success': props<{ conference: Conference }>(),
    'Conference updated success': props<{ conference: Conference }>(),
    'Conference deleted success': props<{ id: string }>(),
    'Api Call failure': props<{ errorMsg: string }>(),
  },
});
