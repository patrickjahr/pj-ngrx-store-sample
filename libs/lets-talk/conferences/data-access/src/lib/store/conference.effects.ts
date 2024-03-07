import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import {
  ConferencesApiActions,
  ConferencesPageActions,
} from './conference.actions';
import { Action } from '@ngrx/store';
import { ApiConferencesService } from '../services/api-conferences.service';

@Injectable()
export class ConferenceEffects implements OnInitEffects {
  private readonly conferenceService = inject(ApiConferencesService);
  private readonly actions$ = inject(Actions);

  ngrxOnInitEffects(): Action {
    return ConferencesPageActions.opened();
  }

  loadConferences$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConferencesPageActions.opened),
      exhaustMap(() =>
        this.conferenceService.getAllConferences().pipe(
          map((conferences) =>
            ConferencesApiActions.conferencesLoadedSuccess({ conferences })
          ),
          catchError((err) =>
            of(
              ConferencesApiActions.conferencesLoadedFailure({
                errorMsg: `Error: ${err.message}`,
              })
            )
          )
        )
      )
    )
  );

  loadConference$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConferencesPageActions.selectItem),
      exhaustMap(({ id }) => {
        return this.conferenceService.getConference(id).pipe(
          map((conference) =>
            conference
              ? ConferencesApiActions.conferenceLoadedSuccess({ conference })
              : ConferencesApiActions.conferenceLoadedFailure({
                  errorMsg: `Conference not found for id ${id}`,
                })
          ),
          catchError((err) =>
            of(
              ConferencesApiActions.conferenceLoadedFailure({
                errorMsg: `Error: ${err.message}`,
              })
            )
          )
        );
      })
    )
  );

  updateConference$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConferencesPageActions.updateConference),
      exhaustMap(({ conference }) =>
        this.conferenceService.updateConference(conference.id, conference).pipe(
          map(() =>
            ConferencesApiActions.conferenceUpdatedSuccess({ conference })
          ),
          catchError((err) =>
            of(
              ConferencesApiActions.conferenceUpdatedFailure({
                errorMsg: err.message,
              })
            )
          )
        )
      )
    )
  );
}
