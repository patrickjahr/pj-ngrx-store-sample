import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Speaker } from '@lt/shared/typescript/domain';

@Injectable()
export class ApiSpeakersService {
  private readonly http = inject(HttpClient);

  getAllSpeakers(): Observable<Speaker[]> {
    return this.http.get<Speaker[]>('api/speakers').pipe(
      catchError((err) => {
        console.error(`Request speakers failed. Error: ${err}`);
        return [];
      })
    );
  }

  getSpeaker(id: string): Observable<Speaker | undefined> {
    console.log('Call api with data', id);
    return this.http.get<Speaker>(`api/speakers/${id}`).pipe(
      catchError((err) => {
        console.error(`Request speaker for if ${id} failed. Error: ${err}`);
        return of(undefined);
      })
    );
  }
}
