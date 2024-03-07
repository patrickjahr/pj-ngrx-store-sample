import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Conference } from '@lt/shared/typescript/domain';

@Injectable()
export class ApiConferencesService {
  private readonly http = inject(HttpClient);

  getAllConferences(): Observable<Conference[]> {
    return this.http.get<Conference[]>('api/conferences').pipe(
      catchError((err) => {
        console.error(`Request conferences failed. Error: ${err}`);
        return [];
      })
    );
  }

  getConference(id: string): Observable<Conference | undefined> {
    return this.http.get<Conference>(`api/conferences/${id}`).pipe(
      catchError((err) => {
        console.error(`Request conference for if ${id} failed. Error: ${err}`);
        return of(undefined);
      })
    );
  }
}