import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PiloteService } from './pilote.service';
import { Pilote } from '../model/pilote';

describe('PiloteService', () => {
  let service: PiloteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PiloteService]
    });

    service = TestBed.inject(PiloteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
    afterEach(() => {
      httpMock.verify();
    });
  
    it('Should return all Pilotes', () => {
      const pilotesMock: Pilote[] = [
        { numPilote: 1, nomPilote: 'Pilote 1' , adresse :'aaa'},
        { numPilote: 2, nomPilote: 'Pilote 2',  adresse :'bbb' }
      ];
  
      service.getAllPilotes().subscribe(pilotes => {
        expect(pilotes.length).toBe(2);
        expect(pilotes).toEqual(pilotesMock);
      });
  
      const req = httpMock.expectOne(service['hostUrl']);
      expect(req.request.method).toBe('GET');
      req.flush(pilotesMock);
    });
});
