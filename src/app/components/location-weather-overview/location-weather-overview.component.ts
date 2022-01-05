import { Component, Input, OnInit } from '@angular/core';
import { ErrorResponse, Weather, WeatherResponse } from 'src/app/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'locationWeatherOverview',
  templateUrl: './location-weather-overview.component.html',
  styleUrls: ['./location-weather-overview.component.scss']
})
export class LocationWeatherOverviewComponent implements OnInit {
  @Input("data") wLocation:WeatherResponse={} as WeatherResponse;
  date: string = new Date().toDateString();
  loading:boolean=false;
  error:boolean = false;
  errorMessage:string="";
  constructor(private _dataService:DataService) { }

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
      this.loading = true;
      //fetch data by using the subject service
      this._dataService.getLocationsWeather(this.wLocation.name).subscribe({
        next: (resp) => this.updateWeatherLocation(<WeatherResponse>resp),
        error: (err) => this.reportError(<ErrorResponse>err),
        complete: () => {},
      });
    }
  }
  updateWeatherLocation(l:WeatherResponse){
    this.loading=false;
    this.error=false;
    l.lastUpdated=new Date().toDateString();
    this._dataService.updateLocation(l);
  }
  reportError(e:ErrorResponse){
    this.error=true;
    this.errorMessage=e.message;
  }
}
