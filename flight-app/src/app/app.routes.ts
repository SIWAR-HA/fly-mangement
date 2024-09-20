import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VolComponent } from './components/vol/vol.component';
import { AvionComponent } from './components/avion/avion.component';
import { PiloteComponent } from './components/pilote/pilote.component';
import { AddvolComponent } from './components/addvol/addvol.component';
import { VolFilterComponent } from './components/vol-filter/vol-filter.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'Vol', component: VolComponent },
  { path: 'Avion', component: AvionComponent},
  { path: 'Pilote', component: PiloteComponent },
  { path: 'addvol', component: AddvolComponent },
  { path: 'filtervol', component: VolFilterComponent},
  //{ path: 'filter-vol', loadComponent: () => import('./components/vol-filter/vol-filter.component').then(m => m.VolFilterComponent) }
];
