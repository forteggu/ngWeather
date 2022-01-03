import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationWeatherOverviewComponent } from './location-weather-overview.component';

describe('LocationWeatherOverviewComponent', () => {
  let component: LocationWeatherOverviewComponent;
  let fixture: ComponentFixture<LocationWeatherOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationWeatherOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationWeatherOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
