import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationWeatherForecastComponent } from './location-weather-forecast.component';

describe('LocationWeatherForecastComponent', () => {
  let component: LocationWeatherForecastComponent;
  let fixture: ComponentFixture<LocationWeatherForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationWeatherForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationWeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
