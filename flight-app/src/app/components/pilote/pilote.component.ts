import { Component } from '@angular/core';
import { Pilote } from '../../model/pilote';
import { PiloteService } from '../../services/pilote.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from '../../services/shared.service';



@Component({
  selector: 'app-pilote',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './pilote.component.html',
  styleUrl: './pilote.component.css'
})
export class PiloteComponent{
 
  pilotes: Pilote[] = [];
  selectedPilote: Pilote | null = null;

  constructor(private piloteService: PiloteService, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.piloteService.getAllPilotes().subscribe(pilotes => this.pilotes = pilotes);
  }
 

  selectPilote(pilote: Pilote): void {
    this.selectedPilote = pilote;
    this.sharedService.setSelectedPilote(pilote);
  }
  
    
}
