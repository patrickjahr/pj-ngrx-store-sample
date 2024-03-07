import { Conference } from '@lt/shared/typescript/domain';
import { createFeature, createReducer, on } from '@ngrx/store';
import {
  ConferencesApiActions,
  ConferencesPageActions,
} from './conference.actions';

interface State {
  conferences: Conference[];
  selectedConference: Conference | null;
  loadingCollection: boolean;
  error: string | null;
}

const initialState: State = {
  conferences: [],
  selectedConference: null,
  loadingCollection: false,
  error: null,
};

export const conferencesFeature = createFeature({
  name: 'conferencesFeature',
  reducer: createReducer(
    initialState,
    on(ConferencesPageActions.opened, (state) => ({
      ...state,
      loadingCollection: true,
    })),
    on(ConferencesPageActions.selectItem, (state) => ({
      ...state,
      loadingCollection: true,
    })),
    on(
      ConferencesApiActions.conferencesLoadedSuccess,
      (state, { conferences }) => ({
        ...state,
        conferences,
        loadingCollection: false,
      })
    ),
    on(
      ConferencesApiActions.conferenceLoadedSuccess,
      (state, { conference }) => ({
        ...state,
        selectedConference: conference,
        loadingCollection: false,
      })
    ),
    on(
      ConferencesApiActions.conferenceUpdatedSuccess,
      (state, { conference }) => {
        const collection = [...state.conferences];
        const exists = collection.findIndex((c) => c.id === conference.id);
        if (exists > -1) {
          collection[exists] = conference;
        }
        return { ...state, conferences: collection };
      }
    ),
    on(
      ConferencesApiActions.conferenceLoadedFailure,
      (state, { errorMsg }) => ({
        ...state,
        selectedConference: null,
        error: errorMsg,
        loadingCollection: false,
      })
    )
  ),
});
