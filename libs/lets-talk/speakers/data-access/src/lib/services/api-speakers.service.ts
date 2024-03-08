import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, Observable } from 'rxjs';
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
        return EMPTY;
      })
    );
  }

  updateSpeaker(id: string, data: Speaker): Observable<void> {
    return this.http.put<void>(`api/speakers/${id}`, data).pipe(
      catchError((err) => {
        console.error(`Request speaker for if ${id} failed. Error: ${err}`);
        return EMPTY;
      })
    );
  }

  deleteSpeaker(id: string): Observable<void> {
    return this.http.delete<void>(`api/speakers/${id}`).pipe(
      catchError((err) => {
        console.error(`Delete speaker with if ${id} failed. Error: ${err}`);
        return EMPTY;
      })
    );
  }
}
