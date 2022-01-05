import { Component, OnInit } from '@angular/core';
import {
  ErrorResponse,
  locationNameId,
  WeatherResponse,
} from 'src/app/interfaces';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'emptyLocation',
  templateUrl: './empty-location.component.html',
  styleUrls: ['./empty-location.component.scss'],
})
export class EmptyLocationComponent implements OnInit {
  newLocation: string = '';
  isSearching: boolean = false;
  showAlert: boolean = false;
  alertMessage: string = '';
  constructor(private _dataService: DataService) {}
  ngOnInit(): void {}
  clearAlert() {
    this.showAlert = false;
  }
  searchLocation() {
    if (!this.isSearching) {
      this.isSearching = true;
      this._dataService.getLocationsWeather(this.newLocation).subscribe({
        next: (resp) => this.createNewLocation(<WeatherResponse>resp),
        error: (err) => this.reportError(<ErrorResponse>err),
        complete: () => {},
      });
    }
  }
  createNewLocation(serviceResponse: WeatherResponse) {
    this.isSearching = false;
    let savedLocations: locationNameId[] =
      JSON.parse(localStorage.getItem(environment.savedLocations)!) || [];
    if (savedLocations.findIndex((i) => i.id == serviceResponse.id) === -1) {
      this._dataService.updateLocations([
        ...savedLocations,
        { name: serviceResponse.name, id: serviceResponse.id },
      ]);
      serviceResponse.lastUpdated = new Date().toDateString();
      this._dataService.updateLocationOfflineData(serviceResponse);
    } else {
      this.showAlert = true;
      this.alertMessage = 'Location already in use';
    }
  }
  reportError(err: ErrorResponse) {
    this.alertMessage = err.error.message;
    this.isSearching = false;
    this.showAlert = true;
  }
}
