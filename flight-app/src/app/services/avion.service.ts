import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Avion } from '../model/avion';
import { Observable, tap, of, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvionService {

  private readonly hostUrl = 'http://localhost:8081/api/v1/avions/all';

  constructor(private http: HttpClient) {}

  public getAllAvions(): Observable<Avion[]> {
    return this.http.get<Avion[]>(this.hostUrl).pipe(
      tap(avions => console.log('Avions récupérés:', avions)),
      catchError(this.handleError<Avion[]>('getAllAvions', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
