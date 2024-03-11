import { Conference } from '@lt/shared/typescript/domain';
import { createFeature, createReducer, on } from '@ngrx/store';
import {
  ConferencesApiActions,
  ConferencesPageActions,
} from './conference.actions';

interface State {
  conferences: Conference[];
  selectedConference: Conference | null;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  conferences: [],
  selectedConference: null,
  loading: false,
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
    on(ConferencesPageActions.selectItem, (state, { id }) => ({
      ...state,
      loadingCollection: true,
      selectedConference: id ? state.selectedConference : null,
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
    on(ConferencesApiActions.conferenceDeletedSuccess, (state, { id }) => {
      return {
        ...state,
        conferences: state.conferences.filter((c) => c.id !== id),
      };
    }),
    on(ConferencesApiActions.apiCallFailure, (state, { errorMsg }) => ({
      ...state,
      error: errorMsg,
      loadingCollection: false,
    }))
  ),
});
