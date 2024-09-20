import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvionComponent } from './avion.component';
import { Avion } from '../../model/avion';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AvionService } from '../../services/avion.service';
import {of} from 'rxjs';
describe('AvionComponent', () => {
  let component: AvionComponent;
  let fixture: ComponentFixture<AvionComponent>;
  let avionService: AvionService;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [AvionComponent, HttpClientTestingModule],
      providers: [AvionService]
    }).compileComponents();

    fixture = TestBed.createComponent(AvionComponent);
    component = fixture.componentInstance;
    avionService = TestBed.inject(AvionService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show Avions', () => {
    const avionsMock: Avion[] = [
      {numAvion: 1,   nomAvion:'Avion1', capacite: 10, localisation: 'Paris'},
      {numAvion: 2,   nomAvion:'Avion2', capacite: 20, localisation: 'Paris'}
    ];


    spyOn(avionService, 'getAllAvions').and.returnValue(of(avionsMock));

    fixture.detectChanges();

    expect(component.avions.length).toBe(2);
    expect(component.avions).toEqual(avionsMock);
  
   
    expect(component.avions[0].nomAvion).toBe('Avion1');
    expect(component.avions[1].nomAvion).toBe('Avion2');
  });

 it('Should show Avions Table', () => {
  const avionsMock: Avion[] = [
    {numAvion: 1,   nomAvion:'Avion1', capacite: 10, localisation: 'Paris'},
    {numAvion: 2,   nomAvion:'Avion2', capacite: 20, localisation: 'Paris'}
  ];


    spyOn(avionService, 'getAllAvions').and.returnValue(of(avionsMock));

    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
    expect(rows[0].querySelector('td:nth-child(1)').textContent).toContain('1');
    expect(rows[0].querySelector('td:nth-child(2)').textContent).toContain('Avion1');
    expect(rows[0].querySelector('td:nth-child(3)').textContent).toContain(10);
    expect(rows[0].querySelector('td:nth-child(4)').textContent).toContain('Paris');
    expect(rows[1].querySelector('td:nth-child(1)').textContent).toContain('2');
    expect(rows[1].querySelector('td:nth-child(2)').textContent).toContain('Avion2');
    expect(rows[1].querySelector('td:nth-child(3)').textContent).toContain(20);
    expect(rows[1].querySelector('td:nth-child(4)').textContent).toContain('Paris');
  });
  
});
