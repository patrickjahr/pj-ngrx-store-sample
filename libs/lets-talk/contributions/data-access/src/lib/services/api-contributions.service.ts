import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { Contribution } from '@lt/shared/typescript/domain';

@Injectable()
export class ApiContributionsService {
  private readonly http = inject(HttpClient);

  getAllContributions(): Observable<Contribution[]> {
    return this.http.get<Contribution[]>('api/contributions').pipe(
      catchError((err) => {
        console.error(`Request contributions failed. Error: ${err}`);
        return [];
      })
    );
  }

  getContribution(id: string): Observable<Contribution | undefined> {
    console.log('Call api with data', id);
    return this.http.get<Contribution>(`api/contributions/${id}`).pipe(
      catchError((err) => {
        console.error(
          `Request contribution for if ${id} failed. Error: ${err}`
        );
        return of(undefined);
      })
    );
  }

  updateContribution(id: string, data: Contribution): Observable<void> {
    return this.http.put<void>(`api/contributions/${id}`, data).pipe(
      catchError((err) => {
        console.error(
          `Request contribution for if ${id} failed. Error: ${err}`
        );
        return EMPTY;
      })
    );
  }

  deleteContribution(id: string): Observable<void> {
    return this.http.delete<void>(`api/contributions/${id}`).pipe(
      catchError((err) => {
        console.error(
          `Delete contribution with if ${id} failed. Error: ${err}`
        );
        return EMPTY;
      })
    );
  }
}
