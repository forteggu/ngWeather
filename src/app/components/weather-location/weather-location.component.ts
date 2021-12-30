import { Component, Input, OnInit } from '@angular/core';
import { WeatherResponse } from 'src/app/interfaces';

@Component({
  selector: 'weatherLocation',
  templateUrl: './weather-location.component.html',
  styleUrls: ['./weather-location.component.scss']
})
export class WeatherLocationComponent implements OnInit {
  @Input("location") wLocation!:WeatherResponse;
  date:string=new Date().toDateString();
  constructor() { }

  ngOnInit(): void {
  }

}
