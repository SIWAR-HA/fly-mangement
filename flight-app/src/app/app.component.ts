import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { VolComponent } from './components/vol/vol.component';
import { PiloteComponent } from './components/pilote/pilote.component';
import { HttpClientModule } from '@angular/common/http';
import { AvionComponent } from './components/avion/avion.component';
import { VolFilterComponent } from './components/vol-filter/vol-filter.component';
import { AddvolComponent } from './components/addvol/addvol.component';
import { HomeComponent } from './components/home/home.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, AddvolComponent, VolFilterComponent, AvionComponent, PiloteComponent, VolComponent, CommonModule, RouterOutlet ],
  providers:[HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flight-app';
  constructor(private router: Router) { }

  HomeClick(){
    this.router.navigate(['Home']);
  }
}
