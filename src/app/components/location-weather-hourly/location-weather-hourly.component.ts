import { Component, Input, OnInit } from '@angular/core';
import { AllInOneWD, Current } from 'src/app/interfaces';

@Component({
  selector: 'locationWeatherHourly',
  templateUrl: './location-weather-hourly.component.html',
  styleUrls: ['./location-weather-hourly.component.scss'],
})
export class LocationWeatherHourlyComponent implements OnInit {
  @Input('data') wLocation: Current[] = [];
  @Input('showAlert') showAlert: boolean = false;
  groupedData: { f: Date; hrs: Current[] }[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.wLocation);
    //group data
    this.groupData();
  }
  groupData() {
    if (this.wLocation && this.wLocation.length > 0) {
      this.wLocation.map((h) => {
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
