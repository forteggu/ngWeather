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
    console.log(this.wLocation);
    //group data
    this.groupData();
  }
  groupData() {
    if (this.wLocation && this.wLocation.length > 0) {
      this.wLocation.map((h) => {
        // Transform the weather icon
        //h.weather[0].icon=this.icons;
        h.weather[0].icon=getWeatherIcon(h.weather[0].icon);
        // Transform the time to a usable format
        const d = new Date(h.dt*1000);
        const i = this.groupedData.findIndex((g) => {
          return g.f.toLocaleDateString() === d.toLocaleDateString();
        });
        h.transformedTime=d;
        if (i !== -1) {
          this.groupedData[i].hrs.push(h);
        }else{
          this.groupedData.push({f:d,hrs:[h]})
        }
      });
    }
  }
}
