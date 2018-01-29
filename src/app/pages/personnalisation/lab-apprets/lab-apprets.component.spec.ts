import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabAppretsComponent } from './lab-apprets.component';

describe('LabAppretsComponent', () => {
  let component: LabAppretsComponent;
  let fixture: ComponentFixture<LabAppretsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabAppretsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabAppretsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
