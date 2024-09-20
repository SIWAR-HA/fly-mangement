import { Component } from '@angular/core';
import { AvionService } from '../../services/avion.service';
import { Avion } from '../../model/avion';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-avion',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './avion.component.html',
  styleUrl: './avion.component.css'
})
export class AvionComponent {
  avions: Avion[] = [];
  selectedAvion: Avion      | null= null;
  constructor(private avionService: AvionService, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.avionService.getAllAvions().subscribe(avions => this.avions = avions);
  }
  selectAvion(avion: Avion): void {
    this.selectedAvion = avion;
    this.sharedService.setSelectedAvion(avion);  
  }

}
