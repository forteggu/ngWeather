import { Component, Input, OnInit } from '@angular/core';
import { AllInOneWD, Current, Daily } from 'src/app/interfaces';

@Component({
  selector: 'locationWeatherForecast',
  templateUrl: './location-weather-forecast.component.html',
  styleUrls: ['./location-weather-forecast.component.scss']
})
export class LocationWeatherForecastComponent implements OnInit {
  @Input("data") wLocation:Daily[]=[];
  @Input('showAlert') showAlert: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.fixDate();
  }
  fixDate() {
    if (this.wLocation && this.wLocation.length > 0) {
      this.wLocation.map((d) => {
        const date = new Date(d.dt*1000);
        d.transformedTime= date;
        console.log(date);
      });
    }
  }
}
