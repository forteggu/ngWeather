import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationWeatherHourlyComponent } from './location-weather-hourly.component';

describe('LocationWeatherHourlyComponent', () => {
  let component: LocationWeatherHourlyComponent;
  let fixture: ComponentFixture<LocationWeatherHourlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationWeatherHourlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationWeatherHourlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
