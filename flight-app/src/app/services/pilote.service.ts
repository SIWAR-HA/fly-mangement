
import { Observable, of } from 'rxjs';
import { Pilote } from '../model/pilote';

import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

export class PiloteService {
  private readonly hostUrl = 'http://localhost:8081/api/v1/pilotes/all';

  constructor(private http: HttpClient) {}

  public getAllPilotes(): Observable<Pilote[]> {
    return this.http.get<Pilote[]>(this.hostUrl).pipe(
      tap(pilotes => console.log('Pilotes récupérés:', pilotes)),
      catchError(this.handleError<Pilote[]>('getAllPilotes', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}