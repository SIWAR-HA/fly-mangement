import { TestBed } from '@angular/core/testing';

import { AvionService } from './avion.service';
import { Avion } from '../model/avion';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AvionService', () => {
  let service: AvionService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AvionService]
    });

    service = TestBed.inject(AvionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Should return all Avions', () => {
    const avionsMock: Avion[] = [
      {numAvion: 1,   nomAvion:'gg', capacite: 10, localisation: 'Paris'},
      {numAvion: 2,   nomAvion:'nn', capacite: 20, localisation: 'Paris'}
    ];

    service.getAllAvions().subscribe(avions => {
      expect(avions.length).toBe(2);
      expect(avions).toEqual(avionsMock);
    });

    const req = httpMock.expectOne(service['hostUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(avionsMock);
  });
  afterEach(() => {
    httpMock.verify();
  });
});
