import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabRecapitulatifComponent } from './lab-recapitulatif.component';

describe('LabRecapitulatifComponent', () => {
  let component: LabRecapitulatifComponent;
  let fixture: ComponentFixture<LabRecapitulatifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabRecapitulatifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabRecapitulatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
