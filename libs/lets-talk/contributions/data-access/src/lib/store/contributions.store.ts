import { ComponentStore, OnStoreInit } from '@ngrx/component-store';
import { Contribution } from '@lt/shared/typescript/domain';
import {
  catchError,
  EMPTY,
  finalize,
  Observable,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { ApiContributionsService } from '../services/api-contributions.service';

export interface ContributionState {
  isLoading: boolean;
  contributions: Contribution[];
  selected?: Contribution;
}

@Injectable()
export class ContributionsStore
  extends ComponentStore<ContributionState>
  implements OnStoreInit
{
  private readonly contributionsService = inject(ApiContributionsService);

  contributions = this.selectSignal((state) => state.contributions);
  selected = this.selectSignal((state) => state.selected);
  isLoading = this.selectSignal((state) => state.isLoading);

  loadContributions = this.effect((trigger$: Observable<void>) =>
    trigger$.pipe(
      tap(() => this.patchState({ isLoading: true })),
      switchMap(() => this.contributionsService.getAllContributions()),
      tap((contributions) =>
        this.patchState({ isLoading: false, contributions })
      ),
      catchError(() => EMPTY),
      finalize(() => this.patchState({ isLoading: false }))
    )
  );

  loadContribution = this.effect((data$: Observable<string | undefined>) =>
    data$.pipe(
      tap((id) => this.patchState({ isLoading: !!id, selected: undefined })),
      switchMap((id) => {
        if (!id) {
          this.patchState({ selected: undefined });
          return EMPTY;
        }

        return this.contributionsService.getContribution(id);
      }),
      tap((contribution) =>
        this.patchState({ isLoading: false, selected: contribution })
      ),
      catchError(() => EMPTY),
      finalize(() => this.patchState({ isLoading: false }))
    )
  );

  updateContribution = this.effect((data$: Observable<Contribution>) =>
    data$.pipe(
      withLatestFrom(this.select((state) => state.contributions)),
      tap(([contribution, contributions]) => {
        const existingContribution = contributions.findIndex(
          (c) => c.id === contribution.id
        );
        if (existingContribution > -1) {
          contributions[existingContribution] = contribution;
          this.patchState({ contributions });
        }
      })
    )
  );

  constructor() {
    super({
      isLoading: false,
      contributions: [],
    });
  }

  ngrxOnStoreInit(): void {
    this.loadContributions();
  }
}
