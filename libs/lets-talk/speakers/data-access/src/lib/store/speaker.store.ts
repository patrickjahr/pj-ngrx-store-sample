import { Speaker } from '@lt/shared/typescript/domain';
import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { inject } from '@angular/core';
import { ApiSpeakersService } from '../services/api-speakers.service';
import { catchError, EMPTY, finalize, pipe, switchMap, tap } from 'rxjs';
import {
  addEntities,
  updateEntity,
  withEntities,
} from '@ngrx/signals/entities';
import { withLogger } from '@lt/shared/angular/ui';

export interface SpeakerState {
  selected: Speaker | undefined;
  isLoading: boolean;
}

export const initialState: SpeakerState = {
  selected: undefined,
  isLoading: false,
};

export const speakerStore = signalStore(
  withState(initialState),
  withEntities<Speaker>(),
  withLogger('speaker'),
  withMethods((store, apiService = inject(ApiSpeakersService)) => ({
    loadSpeakers: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => apiService.getAllSpeakers()),
        tap((speakers) =>
          patchState(store, { isLoading: true }, addEntities(speakers))
        ),
        catchError(() => EMPTY),
        finalize(() => patchState(store, { isLoading: false }))
      )
    ),

    updateSpeaker(speaker: Speaker): void {
      patchState(
        store,
        updateEntity({
          id: speaker.id,
          changes: {
            ...speaker,
            name: `${speaker.firstName} ${speaker.lastName}`,
          },
        })
      );
    },

    selectSpeaker: rxMethod<string>(
      pipe(
        switchMap((id) => {
          patchState(store, { isLoading: true });
          return apiService.getSpeaker(id).pipe(
            tap((selected) =>
              patchState(store, { selected, isLoading: false })
            ),
            catchError(() => EMPTY),
            finalize(() => patchState(store, { isLoading: false }))
          );
        })
      )
    ),
  })),
  withHooks({
    onInit(store) {
      store.loadSpeakers();
    },
  })
);
