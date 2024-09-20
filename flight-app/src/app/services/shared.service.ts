import { Injectable } from '@angular/core';
import { Pilote } from '../model/pilote';
import { Avion } from '../model/avion';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
 
  private selectedPiloteDetail = new BehaviorSubject<Pilote | null>(null);
  selectedPilote$ = this.selectedPiloteDetail.asObservable();
  private selectedAvionDetail = new BehaviorSubject<Avion | null>(null);
  selectedAvion$ = this.selectedAvionDetail.asObservable();
  
  setSelectedPilote(pilote: Pilote): void {
    this.selectedPiloteDetail.next(pilote);
  }

  
  getSelectedPilote(): Pilote | null {
    return this.selectedPiloteDetail.value;
  }
  

  
  setSelectedAvion(avion: Avion): void {
    this.selectedAvionDetail.next(avion);
  }

  
  getSelectedAvion(): Avion | null {
    return this.selectedAvionDetail.value;
  }
}
