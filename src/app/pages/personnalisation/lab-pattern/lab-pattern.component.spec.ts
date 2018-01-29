import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabPatternComponent } from './lab-pattern.component';

describe('LabPatternComponent', () => {
  let component: LabPatternComponent;
  let fixture: ComponentFixture<LabPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
