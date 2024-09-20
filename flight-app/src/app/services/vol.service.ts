import { Injectable } from '@angular/core';
import { Vol } from '../model/vol';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, tap, of, catchError } from 'rxjs';
import { VolRequest } from '../model/vol-request';

@Injectable({
  providedIn: 'root'
})
export class VolService {

  private readonly hostUrl = 'http://localhost:8081/api/v1/vols';  

  constructor(private http: HttpClient) {}

  public getAllVols(): Observable<Vol[]> {
    return this.http.get<Vol[]>(`${this.hostUrl}/all`).pipe(
      tap(vols => console.log('Vols récupérés:', vols)),
      catchError(this.handleError<Vol[]>('getAllVols', []))
    );
  }

 
  public getFilteredVols(numpilote: number, numavion: number): Observable<Vol[]> {
   
    const params = new HttpParams()
      .set('numpilote', numpilote.toString())  
      .set('numavion', numavion.toString());   
  
    return this.http.get<Vol[]>(`${this.hostUrl}/filterByPiloteAvion`, { params }).pipe(
      tap(vols => console.log(`Vols filtrés par pilote ${numpilote} et avion ${numavion}:`, vols)),
      catchError(this.handleError<Vol[]>('getFilteredVols', []))
    );
  }

  public saveVol(request: VolRequest): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<string>(this.hostUrl, request, { headers }).pipe(
      tap(response => console.log('Vol ajouté:', response)),
      catchError(this.handleError<string>('saveVol', 'Erreur lors de l\'ajout du vol'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} échouée: ${error.message}`);
      return of(result as T);
    };
  }
}
