import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvolComponent } from './addvol.component';

describe('AddvolComponent', () => {
  let component: AddvolComponent;
  let fixture: ComponentFixture<AddvolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddvolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddvolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
