import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {
  ErrorResponse,
  locationModes,
  locationNameId,
  AllInOneWD,
} from 'src/app/interfaces';
import { getWeatherIcon } from 'src/app/services/commons';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'weatherLocation',
  templateUrl: './weather-location.component.html',
  styleUrls: ['./weather-location.component.scss'],
})
export class WeatherLocationComponent implements OnInit {
  @Input('location') locationNameId: locationNameId = {} as locationNameId;
  wLocation: AllInOneWD = {} as AllInOneWD;
  localModes = locationModes;
  mode = this.localModes.weather;
  previousMode: number = this.localModes.weather;
  loading: boolean = false;
  showAlert: boolean = false;
  error: boolean = false;
  errorMessage: string = '';
  theme: string = '';
  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.getDataFromService();
  }

  getDataFromService() {
    this.loading = true;
    this._dataService;
    this._dataService.getAllInOne(this.locationNameId.coord).subscribe({
      next: (resp) => this.updateWeatherLocation(<AllInOneWD>resp),
      error: (err) => this.reportError(<ErrorResponse>err),
      complete: () => {},
    });
  }
  updateWeatherLocation(l: AllInOneWD) {
    this.loading = false;
    this.showAlert = false;
    this.error = false;
    this.errorMessage = '';
    this.fixMiscData(l);
    this._dataService.updateLocationOfflineData(l);
    this.wLocation = l;
    this.updateWeatherLocationTheme();
  }
  updateWeatherLocationTheme() {
    switch (this.wLocation.current.weather[0]?.icon) {
      case '01d':
        this.theme = 'clearSkyDay';
        break;
      case '01n':
        this.theme = 'clearSkyNight';
        break;
      case '02d':
      case '03d':
        this.theme = 'fewScatteredCloudsDay';
        break;
      case '02n':
      case '03n':
        this.theme = 'fewScatteredCloudsNight';
        break;
      case '04d':
        this.theme = 'brokenDay';
        break;
      case '04n':
        this.theme = 'brokenNight';
        break;
      case '09d':
        this.theme = 'showerRainDay';
        break;
      case '09n':
        this.theme = 'showerRainNight';
        break;
      case '10d':
        this.theme = 'rainDay';
        break;
      case '10n':
        this.theme = 'rainNight';
        break;
      case '11d':
        this.theme = 'thunderstormDay';
        break;
      case '11n':
        this.theme = 'thunderstormNight';
        break;
      case '13d':
        this.theme = 'snowDay';
        break;
      case '13n':
        this.theme = 'snowNight';
        break;
      case '50d':
        this.theme = 'mistDay';
        break;
      case '50n':
        this.theme = 'mistNight';
        break;
      default:
        this.theme = 'defaultTheme';
        break;
    }
  }
  /**
   * Fix Times (dates), icons, name, id and date
   * @param l response
   */
  fixMiscData(l: AllInOneWD) {
    l.lastUpdated = new Date().toDateString();
    l.name = this.locationNameId.name;
    l.id = this.locationNameId.id;
    // a
    l.current.weather[0].icon=getWeatherIcon(l.current.weather[0].icon);
    // Fix misc data for daily (forecast) structure
    l.daily.map((d) => {
      const date = new Date(d.dt * 1000);
      d.transformedTime = date;
      d.weather[0].icon = getWeatherIcon(d.weather[0].icon);
    });
    // Fix misc data for hourly structure
    l.hourly.map((h) => {
      // Transform the weather icon
      //h.weather[0].icon=this.icons;
      h.weather[0].icon = getWeatherIcon(h.weather[0].icon);
      // Transform the time to a usable format
      const d = new Date(h.dt * 1000);
      h.transformedTime = d;
    });
  }
  reportError(e: ErrorResponse) {
    this.loading = false;
    const offlineData = this._dataService.getOfflineData(this.locationNameId);
    if (offlineData) {
      this.wLocation = offlineData;
      this.updateWeatherLocationTheme();
      this.showAlert = true;
    } else {
      this.errorMessage =
        'An error has ocurred and there is no cached data. Please reload the app or wait.';
      this.error = true;
    }
  }

  changeMode(mode: number) {
    if (mode === this.localModes.delete) {
      this.previousMode = this.mode;
    }
    this.mode = mode;
  }
  removeLocation() {
    this.loading = true;
    this._dataService.removeLocation(this.locationNameId);
  }
  cancelRemoveLocation() {
    this.mode = this.previousMode;
  }
}
