import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolFilterComponent } from './vol-filter.component';

describe('VolFilterComponent', () => {
  let component: VolFilterComponent;
  let fixture: ComponentFixture<VolFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
