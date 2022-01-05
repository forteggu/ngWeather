import { Component, Input, OnInit } from '@angular/core';
import { locationNameId, WeatherResponse } from 'src/app/interfaces';

@Component({
  selector: 'locationWeatherHourly',
  templateUrl: './location-weather-hourly.component.html',
  styleUrls: ['./location-weather-hourly.component.scss']
})
export class LocationWeatherHourlyComponent implements OnInit {
  @Input("data") wLocation:WeatherResponse={} as WeatherResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
