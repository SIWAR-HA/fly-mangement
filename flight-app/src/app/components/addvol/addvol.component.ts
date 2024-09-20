import { Component } from '@angular/core';
import { VolService } from '../../services/vol.service';
import { VolRequest } from '../../model/vol-request';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { Avion } from '../../model/avion';
import { Pilote } from '../../model/pilote';
import { SharedService } from '../../services/shared.service';
import { PiloteService } from '../../services/pilote.service';
import { AvionService } from '../../services/avion.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addvol',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './addvol.component.html',
  styleUrl: './addvol.component.css'
})
export class AddvolComponent {
  volRequest: VolRequest = {
    numVol: '', 
    numPilote: 0,
    numAvion: 0,
    villeDep: '',
    villeArr: '',
    heureDep: '',
    heureArr: ''
  };
  
  isSubmitted: boolean = false;
  message: string = '';

  pilotes: Pilote[] = [];
  avions: Avion[] = []; 

  selectedPilote: number | null = null; 
  selectedAvion: number | null = null; 

  constructor(
    private volService: VolService, 
    private sharedService: SharedService, 
    private piloteService: PiloteService, 
    private avionService: AvionService
  ) {}

  ngOnInit(): void {
    this.piloteService.getAllPilotes().subscribe((data: Pilote[]) => {
      this.pilotes = data;
    });

    this.avionService.getAllAvions().subscribe((data: Avion[]) => {
      this.avions = data;
    });

    this.sharedService.selectedPilote$.subscribe((pilote: Pilote | null) => {
      if (pilote) {
        this.selectedPilote = pilote.numPilote;
        this.volRequest.numPilote = this.selectedPilote;
      }
    });

    this.sharedService.selectedAvion$.subscribe((avion: Avion | null) => {
      if (avion) {
        this.selectedAvion = avion.numAvion;
        this.volRequest.numAvion = this.selectedAvion;
      }
    });
  }

  saveVol(): void {
    this.isSubmitted = true;

    if (this.volRequest.numPilote && this.volRequest.numAvion) {
      console.log(this.selectedPilote+"   "+ this.selectedAvion);
      this.volService.saveVol(this.volRequest).subscribe(response => {
        this.message = 'Vol enregistré avec succès';
      }, error => {
        this.message = 'Erreur lors de l\'enregistrement du vol';
      });
    } else {
      this.message = 'Veuillez sélectionner un pilote et un avion';
    }
  }
}