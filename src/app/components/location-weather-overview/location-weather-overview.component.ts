import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {
  ErrorResponse,
  locationNameId,
  Weather,
  WeatherResponse,
} from 'src/app/interfaces';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'locationWeatherOverview',
  templateUrl: './location-weather-overview.component.html',
  styleUrls: ['./location-weather-overview.component.scss'],
})
export class LocationWeatherOverviewComponent implements OnInit {
  @Input('data') wLocation: WeatherResponse = {} as WeatherResponse;
  @Input('showAlert') showAlert: boolean = false;
  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
      
  }
}
