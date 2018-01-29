import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabEnterComponent } from './lab-enter.component';

describe('LabEnterComponent', () => {
  let component: LabEnterComponent;
  let fixture: ComponentFixture<LabEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
