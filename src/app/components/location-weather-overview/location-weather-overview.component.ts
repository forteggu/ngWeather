import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {
  Overview
} from 'src/app/interfaces';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'locationWeatherOverview',
  templateUrl: './location-weather-overview.component.html',
  styleUrls: ['./location-weather-overview.component.scss'],
})
export class LocationWeatherOverviewComponent implements OnInit {
  @Input('data') wLocation: Overview = {} as Overview;
  @Input('showAlert') showAlert: boolean = false;
  constructor() {}

  ngOnInit(): void {
      
  }
}
