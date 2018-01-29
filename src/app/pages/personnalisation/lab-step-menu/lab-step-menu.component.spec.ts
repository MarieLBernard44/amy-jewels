import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabStepMenuComponent } from './lab-step-menu.component';

describe('LabStepMenuComponent', () => {
  let component: LabStepMenuComponent;
  let fixture: ComponentFixture<LabStepMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabStepMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabStepMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
