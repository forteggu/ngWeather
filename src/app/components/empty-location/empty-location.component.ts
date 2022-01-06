import { Component, OnInit } from '@angular/core';
import {
  AllInOneWD,
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
        next: (resp) => this.fetchLocationDataAllInOne(<WeatherResponse>resp),
        error: (err) => this.reportError(<ErrorResponse>err),
        complete: () => {},
      });
    }
  }
  fetchLocationDataAllInOne(l: WeatherResponse) {
    this._dataService.getAllInOne(l.coord).subscribe({
      next: (resp) => this.createNewLocation(<AllInOneWD>resp, l),
      error: (err) => this.reportError(<ErrorResponse>err),
      complete: () => {},
    });
  }
  createNewLocation(aio: AllInOneWD, locationWR: WeatherResponse) {
    // Hide the loading component
    this.isSearching = false;
    // Update name and id on aio structure
    aio.id = locationWR.id;
    aio.name = locationWR.name;
    // Get saved Locations
    let savedLocations: locationNameId[] =
      JSON.parse(localStorage.getItem(environment.savedLocations)!) || [];
    // If current location does not exist already we include it
    if (savedLocations.findIndex((i) => i.id == locationWR.id) === -1) {
      // Update date
      aio.lastUpdated = new Date().toDateString();
      // Add data to ls for offline use
      this._dataService.updateLocationOfflineData(aio);
      // Update saved locations to reload the app's content
      this._dataService.updateLocations([
        ...savedLocations,
        { name: locationWR.name, id: locationWR.id, coord: locationWR.coord },
      ]);
      const e: HTMLElement = document.getElementById(
        'customModal_addLocation'
      ) as HTMLElement;
      if (e) e.click();
    } else {
      this.showAlert = true;
      this.alertMessage = 'Location already in use';
    }
  }

  saveLocationNameId() {}
  reportError(err: ErrorResponse) {
    this.alertMessage = err.error.message;
    this.isSearching = false;
    this.showAlert = true;
  }
}
