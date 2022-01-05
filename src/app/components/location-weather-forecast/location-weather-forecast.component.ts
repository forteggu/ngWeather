import { Component, Input, OnInit } from '@angular/core';
import { locationNameId, WeatherResponse } from 'src/app/interfaces';

@Component({
  selector: 'locationWeatherForecast',
  templateUrl: './location-weather-forecast.component.html',
  styleUrls: ['./location-weather-forecast.component.scss']
})
export class LocationWeatherForecastComponent implements OnInit {
  @Input("data") wLocation:WeatherResponse={} as WeatherResponse;
  constructor() { }

  ngOnInit(): void {
  }

}
