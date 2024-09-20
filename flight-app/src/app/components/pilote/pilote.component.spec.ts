import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {of} from 'rxjs';
import { PiloteComponent } from './pilote.component';
import { PiloteService } from '../../services/pilote.service';

describe('PiloteComponent', () => {
  let component: PiloteComponent;
  let fixture: ComponentFixture<PiloteComponent>;
  let piloteService: PiloteService;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [PiloteComponent, HttpClientTestingModule],
      providers: [PiloteService]
    }).compileComponents();

    fixture = TestBed.createComponent(PiloteComponent);
    component = fixture.componentInstance;
    piloteService = TestBed.inject(PiloteService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show Pilotes', () => {
    const pilotesMock = [
      { numPilote: 1, nomPilote: 'Pilote 1', adresse: 'Adresse 1' },
      { numPilote: 2, nomPilote: 'Pilote 2', adresse: 'Adresse 2' }
    ];

    spyOn(piloteService, 'getAllPilotes').and.returnValue(of(pilotesMock));

    fixture.detectChanges();

    expect(component.pilotes.length).toBe(2);
    expect(component.pilotes).toEqual(pilotesMock);
  
   
    expect(component.pilotes[0].nomPilote).toBe('Pilote 1');
    expect(component.pilotes[1].nomPilote).toBe('Pilote 2');
  });

 it('Should show Pilotes Table', () => {
    const pilotesMock = [
      { numPilote: 1, nomPilote: 'Pilote 1', adresse: 'Adresse 1' },
      { numPilote: 2, nomPilote: 'Pilote 2', adresse: 'Adresse 2' }
    ];

    spyOn(piloteService, 'getAllPilotes').and.returnValue(of(pilotesMock));

    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
    expect(rows[0].querySelector('td:nth-child(1)').textContent).toContain('1');
    expect(rows[0].querySelector('td:nth-child(2)').textContent).toContain('Pilote 1');
    expect(rows[0].querySelector('td:nth-child(3)').textContent).toContain('Adresse 1');
    expect(rows[1].querySelector('td:nth-child(1)').textContent).toContain('2');
    expect(rows[1].querySelector('td:nth-child(2)').textContent).toContain('Pilote 2');
    expect(rows[1].querySelector('td:nth-child(3)').textContent).toContain('Adresse 2');
  });

});
