import { Component, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs';
import { ErrorResponse, Weather, WeatherResponse } from 'src/app/interfaces';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'emptylocation',
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
      this._dataService.getLocationsWeatherTest(this.newLocation).subscribe({
        next: (resp) => this.createNewLocation(<WeatherResponse>resp),
        error: (err) => this.reportError(<ErrorResponse>err),
        complete: () => {},
      });
    }
  }
  createNewLocation(serviceResponse: WeatherResponse) {
    this.isSearching = false;
    let savedLocations: WeatherResponse[] =
      JSON.parse(localStorage.getItem(environment.savedLocations)!) || [];
    if (
      savedLocations.findIndex((i) => i.name == serviceResponse.name) === -1
    ) {
      localStorage.setItem(
        environment.savedLocations,
        JSON.stringify([...savedLocations, serviceResponse])
      );
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
