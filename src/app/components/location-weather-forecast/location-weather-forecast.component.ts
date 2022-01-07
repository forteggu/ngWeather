import { Component, Input, OnInit } from '@angular/core';
import { AllInOneWD, Current, Daily, Icon } from 'src/app/interfaces';
import { getWeatherIcon } from 'src/app/services/commons';

@Component({
  selector: 'locationWeatherForecast',
  templateUrl: './location-weather-forecast.component.html',
  styleUrls: ['./location-weather-forecast.component.scss']
})
export class LocationWeatherForecastComponent implements OnInit {
  @Input("data") wLocation:Daily[]=[];
  @Input('showAlert') showAlert: boolean = false;
  icons=Icon;

  constructor() { }

  ngOnInit(): void {
    
  }
}
