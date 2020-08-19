import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootprintsComponent } from './footprints.component';

describe('FootprintsComponent', () => {
  let component: FootprintsComponent;
  let fixture: ComponentFixture<FootprintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FootprintsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootprintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
