import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolComponent } from './vol.component';

describe('VolComponent', () => {
  let component: VolComponent;
  let fixture: ComponentFixture<VolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
