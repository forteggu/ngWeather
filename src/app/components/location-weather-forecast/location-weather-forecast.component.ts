import { Component, Input, OnInit } from '@angular/core';
import { AllInOneWD } from 'src/app/interfaces';

@Component({
  selector: 'locationWeatherForecast',
  templateUrl: './location-weather-forecast.component.html',
  styleUrls: ['./location-weather-forecast.component.scss']
})
export class LocationWeatherForecastComponent implements OnInit {
  @Input("data") wLocation:AllInOneWD={} as AllInOneWD;
  @Input('showAlert') showAlert: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
