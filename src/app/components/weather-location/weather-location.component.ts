import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {
  ErrorResponse,
  locationModes,
  locationNameId,
  WeatherResponse,
} from 'src/app/interfaces';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';
import { LocationWeatherOverviewComponent } from '../location-weather-overview/location-weather-overview.component';
@Component({
  selector: 'weatherLocation',
  templateUrl: './weather-location.component.html',
  styleUrls: ['./weather-location.component.scss'],
})
export class WeatherLocationComponent implements OnInit {
  @Input('location') locationNameId:locationNameId = {} as locationNameId;
  wLocation: WeatherResponse = {} as WeatherResponse;
  localModes = locationModes;
  mode = this.localModes.weather;
  previousMode: number = this.localModes.weather;
  loading: boolean = false;
  showAlert: boolean = false;
  error:boolean=false;
  errorMessage:string="";
  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.getDataFromService();
  }

  getDataFromService() {
    this.loading = true;
    this._dataService
      .getLocationsWeatherById(this.locationNameId.id)
      .subscribe({
        next: (resp) => this.updateWeatherLocation(<WeatherResponse>resp),
        error: (err) => this.reportError(<ErrorResponse>err),
        complete: () => {},
      });
  }
  updateWeatherLocation(l: WeatherResponse) {
    this.loading = false;
    this.showAlert = false;
    this.error=false;
    this.errorMessage="";
    l.lastUpdated = new Date().toDateString();
    this._dataService.updateLocationOfflineData(l);
    this.wLocation = l;
  }
  reportError(e: ErrorResponse) {
    this.loading = false;
    const offlineData = this.getOfflineData();
    if (offlineData) {
      this.wLocation = offlineData;
      this.showAlert = true;
    }else{
      this.errorMessage="An error has ocurred and there is no cached data. Please reload the app or wait.";
      this.error=true;
    }
  }
  getOfflineData() {
    let ls: WeatherResponse[] = JSON.parse(
      localStorage.getItem(environment.savedLocationsOfflineData) || '[]'
    );
    return ls.find((x) => {
      return x.id === this.locationNameId.id;
    });
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
}
