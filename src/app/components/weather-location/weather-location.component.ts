import { Component, Input, OnInit } from '@angular/core';
import { ErrorResponse, locationModes, WeatherResponse } from 'src/app/interfaces';
import { DataService } from 'src/app/services/data.service';
import { LocationWeatherOverviewComponent } from '../location-weather-overview/location-weather-overview.component';
@Component({
  selector: 'weatherLocation',
  templateUrl: './weather-location.component.html',
  styleUrls: ['./weather-location.component.scss'],
})
export class WeatherLocationComponent implements OnInit {
  @Input('location') wLocation!: WeatherResponse;
  localModes = locationModes;
  mode = this.localModes.weather;
  previousMode: number = this.localModes.weather;
  //Create enum for which mode to show
  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.checkValuesNeedUpdate();
  }
  checkValuesNeedUpdate() {
    const todayString = new Date().toDateString();
    const todayDate = new Date(todayString);
    const lastUpdatedDate = new Date(this.wLocation.lastUpdated || "0000");
    if (
      !this.wLocation.lastUpdated ||
      (this.wLocation.lastUpdated && todayDate > lastUpdatedDate)
    ) {
      this.mode = this.localModes.updating;
      //fetch data by using the subject service
      this._dataService.getLocationsWeather(this.wLocation.name).subscribe({
        next: (resp) => this.updateWeatherLocation(<WeatherResponse>resp),
        error: (err) => this.reportError(<ErrorResponse>err),
        complete: () => {},
      });
    }
  }
  changeMode(mode: number) {
    if (mode === this.localModes.delete) {
      this.previousMode = this.mode;
    }
    this.mode = mode;
  }
  removeLocation() {
    console.log('we remove the location', this.wLocation);
  }
  cancelRemoveLocation() {
    this.mode = this.previousMode;
  }

  updateWeatherLocation(l:WeatherResponse){
    this.mode=this.localModes.weather;
    l.lastUpdated=new Date().toDateString();
    this._dataService.updateLocation(l);
  }
  reportError(e:ErrorResponse){
    this.mode=this.localModes.error;

  }
}
