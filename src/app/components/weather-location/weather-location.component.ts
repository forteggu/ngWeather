import { Component, Input, OnInit } from '@angular/core';
import { WeatherResponse } from 'src/app/interfaces';

@Component({
  selector: 'weatherLocation',
  templateUrl: './weather-location.component.html',
  styleUrls: ['./weather-location.component.scss'],
})
export class WeatherLocationComponent implements OnInit {
  @Input('location') wLocation!: WeatherResponse;
  date: string = new Date().toDateString();
  deleteLocation: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  openDeleteLocationModal(name: string) {
    this.deleteLocation = true;
  }
  removeLocation() {
    console.log("we remove the location",this.wLocation);
  }
  cancelRemoveLocation() {
    this.deleteLocation=false;
  }
}
