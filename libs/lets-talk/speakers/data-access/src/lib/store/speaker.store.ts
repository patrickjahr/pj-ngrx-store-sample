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
import {
  catchError,
  concatMap,
  EMPTY,
  finalize,
  map,
  pipe,
  switchMap,
  tap,
} from 'rxjs';
import {
  addEntities,
  removeEntity,
  updateEntity,
  withEntities,
} from '@ngrx/signals/entities';
import { withLogger } from '@lt/shared/angular/ui';
import { tapResponse } from '@ngrx/component-store';
import { Socket } from 'ngx-socket-io';

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

    updateSpeaker: rxMethod<Speaker>(
      pipe(
        map((speaker) => ({
          ...speaker,
          name: `${speaker.firstName} ${speaker.lastName}`,
        })),
        concatMap((speaker) => {
          return apiService.updateSpeaker(speaker.id, speaker).pipe(
            tapResponse({
              next: () =>
                patchState(
                  store,
                  updateEntity({
                    id: speaker.id,
                    changes: { ...speaker },
                  })
                ),
              error: console.error,
            })
          );
        })
      )
    ),

    deleteSpeaker: rxMethod<string>(
      pipe(
        concatMap((id) => {
          return apiService.deleteSpeaker(id).pipe(
            tapResponse({
              next: () => patchState(store, removeEntity(id)),
              error: console.error,
            })
          );
        })
      )
    ),

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
    onInit(store, socket = inject(Socket)) {
      socket.on('speakerDeleted', (id: string) => {
        console.log('Speaker deleted message from socket');
        patchState(store, removeEntity(id));
      });
      store.loadSpeakers();
    },
    onDestroy(store, socket = inject(Socket)) {
      socket.off('speakerDeleted');
    },
  })
);
