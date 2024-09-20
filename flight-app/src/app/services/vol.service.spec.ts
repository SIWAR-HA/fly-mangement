import { TestBed } from '@angular/core/testing';

import { VolService } from './vol.service';
import { VolRequest } from '../model/vol-request';
import { Vol } from '../model/vol';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('VolService', () => {
  let service: VolService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [VolService]
    });

    service = TestBed.inject(VolService);  
    httpMock = TestBed.inject(HttpTestingController);  
  });

  afterEach(() => {
    httpMock.verify();  
  });

  it('should retrieve all vols', () => {
    const dummyVols: Vol[] = [
      { numVol: 'AF1234',
        pilote: {
          numPilote: 1,
          nomPilote: 'Dupont',
          adresse: 'fffdd'
        },
        avion: {
          numAvion: 1,
          nomAvion: 'a5',
          capacite: 200,
          localisation: 'Paris'

        },
        villeDep: 'Paris',
        villeArr: 'New York',
        heureDep: '00:00',
        heureArr: '03:00' },
        { numVol: 'AF1234',
          pilote: {
            numPilote: 1,
            nomPilote: 'Dupont',
            adresse: 'fffdd'
          },
          avion: {
            numAvion: 1,
            nomAvion: 'a5',
            capacite: 200,
            localisation: 'Paris'
  
          },
          villeDep: 'Paris',
          villeArr: 'New York',
          heureDep: '00:00',
          heureArr: '03:00' }
    ];

   
    service.getAllVols().subscribe(vols => {
      expect(vols.length).toBe(2);
      expect(vols).toEqual(dummyVols);
    });

    
    const req = httpMock.expectOne(`${service['hostUrl']}/all`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyVols);  
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 
  
  
  it('should save a new vol', () => {
    const dummyResponse = 'Vol ajouté avec succès';
    const newVol: VolRequest = { numVol: 'AF1234',
        numPilote: 1,
        numAvion: 1,
      villeDep: 'Paris',
      villeArr: 'New York',
      heureDep: '00:00',
      heureArr: '03:00 ' }

    service.saveVol(newVol).subscribe(response => {
      expect(response).toBe(dummyResponse);
    });

    const req = httpMock.expectOne(service['hostUrl']);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newVol);
    req.flush(dummyResponse); 
  });


  it('should handle HTTP error gracefully', () => {
    const errorMessage = 'Erreur lors de la récupération des vols';

    service.getAllVols().subscribe(
      vols => {
        // Si vous voulez vérifier que vous recevez un tableau vide ou une autre valeur par défaut
        expect(vols.length).toBe(0);
      },
      error => {
        fail('expected a result, not an error');
      }
    );
  
    // Simuler une erreur HTTP 500
    const req = httpMock.expectOne(`${service['hostUrl']}/all`);
    req.flush(errorMessage, { status: 500, statusText: 'Internal Server Error' });
  });
 
});
