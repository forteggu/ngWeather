import { Component, Input, OnInit } from '@angular/core';
import { Weather, WeatherResponse } from 'src/app/interfaces';

@Component({
  selector: 'locationWeatherOverview',
  templateUrl: './location-weather-overview.component.html',
  styleUrls: ['./location-weather-overview.component.scss']
})
export class LocationWeatherOverviewComponent implements OnInit {
  @Input("data") wLocation:WeatherResponse={} as WeatherResponse;
  date: string = new Date().toDateString();
  constructor() { }

  ngOnInit(): void {
  }

}
