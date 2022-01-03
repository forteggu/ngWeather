import { Component, Input, OnInit } from '@angular/core';
import { locationModes, WeatherResponse } from 'src/app/interfaces';
import { LocationWeatherOverviewComponent } from '../location-weather-overview/location-weather-overview.component';
@Component({
  selector: 'weatherLocation',
  templateUrl: './weather-location.component.html',
  styleUrls: ['./weather-location.component.scss'],
})

export class WeatherLocationComponent implements OnInit {
  @Input('location') wLocation!: WeatherResponse;
  localModes = locationModes;
  mode=this.localModes.weather;
  previousMode:number=this.localModes.weather;
  //Create enum for which mode to show
  constructor() {}

  ngOnInit(): void {}

  changeMode(mode:number) {
    if(mode===this.localModes.delete){
      this.previousMode=this.mode;
    }
    this.mode = mode;
  }
  removeLocation() {
    console.log("we remove the location",this.wLocation);
  }
  cancelRemoveLocation() {
    this.mode=this.previousMode;
  }
}
