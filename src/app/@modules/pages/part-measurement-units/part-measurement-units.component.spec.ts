import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartMeasurementUnitsComponent } from './part-measurement-units.component';

describe('PartMeasurementUnitsComponent', () => {
  let component: PartMeasurementUnitsComponent;
  let fixture: ComponentFixture<PartMeasurementUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PartMeasurementUnitsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartMeasurementUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
