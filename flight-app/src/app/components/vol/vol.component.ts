import { Component } from '@angular/core';
import { Vol } from '../../model/vol';
import { VolService } from '../../services/vol.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-vol',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './vol.component.html',
  styleUrl: './vol.component.css'
})
export class VolComponent {
  vols: Vol[] = []; 

  constructor(private volService: VolService) { }

  ngOnInit(): void {
    this.getAllVols();  // Charger tous les vols au démarrage du composant
  }

  getAllVols(): void {
    this.volService.getAllVols().subscribe(vols => {
      this.vols = vols;
    });
  }

}
