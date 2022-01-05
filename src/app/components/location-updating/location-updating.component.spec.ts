import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationUpdatingComponent } from './location-updating.component';

describe('LocationUpdatingComponent', () => {
  let component: LocationUpdatingComponent;
  let fixture: ComponentFixture<LocationUpdatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationUpdatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationUpdatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
