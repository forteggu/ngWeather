import { Component, Input, OnInit } from '@angular/core';
import { AllInOneWD, Current, Icon } from 'src/app/interfaces';
import { getWeatherIcon } from 'src/app/services/commons';

@Component({
  selector: 'locationWeatherHourly',
  templateUrl: './location-weather-hourly.component.html',
  styleUrls: ['./location-weather-hourly.component.scss'],
})
export class LocationWeatherHourlyComponent implements OnInit {
  @Input('data') wLocation: Current[] = [];
  @Input('showAlert') showAlert: boolean = false;
  groupedData: { f: Date; hrs: Current[] }[] = [];
  icons=Icon;

  constructor() {}

  ngOnInit(): void {
    //group data
    this.groupData();
  }
  groupData() {
    if (this.wLocation && this.wLocation.length > 0) {
      this.wLocation.map((h) => {
        // Transform the time to a usable format
        const i = this.groupedData.findIndex((g) => {
          return g.f.toLocaleDateString() === h.transformedTime!.toLocaleDateString();
        });
        if (i !== -1) {
          this.groupedData[i].hrs.push(h);
        }else{
          this.groupedData.push({f:h.transformedTime!,hrs:[h]})
        }
      });
    }
  }
}
