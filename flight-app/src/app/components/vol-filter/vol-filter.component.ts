import { Component, OnInit } from '@angular/core';
import { Vol } from '../../model/vol';
import { VolService } from '../../services/vol.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { SharedService } from '../../services/shared.service';
import { Pilote } from '../../model/pilote';
import { Avion } from '../../model/avion';
import { PiloteService } from '../../services/pilote.service';
import { AvionService } from '../../services/avion.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vol-filter',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './vol-filter.component.html',
  styleUrl: './vol-filter.component.css'
})
export class VolFilterComponent implements OnInit {
  vols: Vol[] = []; 
  pilotes: Pilote[] = [];
  avions: Avion[] = []; 

  selectedPilote: number | null = null; 
  selectedAvion: number | null = null; 

  constructor(private volService: VolService, private sharedService: SharedService, private piloteService:PiloteService, private avionService : AvionService ) {}

  ngOnInit(): void {
    // Récupérer les pilotes et les avions
    this.piloteService.getAllPilotes().subscribe((data: Pilote[]) => {
      this.pilotes = data;
    });
    
    this.avionService.getAllAvions().subscribe((data: Avion[]) => {
      this.avions = data;
    });

    
    this.sharedService.selectedPilote$.subscribe((pilote: Pilote | null) => {
      if (pilote) {
        this.selectedPilote = pilote.numPilote;
       
      }
    });

    this.sharedService.selectedAvion$.subscribe((avion: Avion | null) => {
      if (avion) {
        this.selectedAvion = avion.numAvion;
       
      }
    });
  }

  
 


  getFilteredVols(): void {
    if (this.selectedPilote && this.selectedAvion) {
      console.log(this.selectedPilote+"   "+ this.selectedAvion);
      this.volService.getFilteredVols(this.selectedPilote, this.selectedAvion).subscribe(vols => {
        this.vols = vols;
      });
    } else {
      
      this.vols = [];
    }
  }
  filterVols(): void {
    this.getFilteredVols();
  }
}
