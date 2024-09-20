import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route, Router, RouterModule } from '@angular/router';
import { VolFilterComponent } from '../vol-filter/vol-filter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, VolFilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router){}
 

  ngOnInit(): void {
   
  }

  async getAllFlights() {
   
   
  }

  AddFlight() {
    this.router.navigate(['addvol']);
   
  }

  Vols() {
    this.router.navigate(['Vol']);
    
  }
 Pilotes() {
    this.router.navigate(['Pilote']);
    
  }


  Avions() {
    this.router.navigate(['Avion']);
    
  }

  

}
