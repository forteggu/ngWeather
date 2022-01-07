import { Component, OnInit } from '@angular/core';
import { Icon, locationNameId } from './interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'weatherAppAngular';
  wLocations: locationNameId[] = [];
  isAddingNewLocation: boolean = false;
  isDisplayingInfo: boolean = false;
  iconsList = [
    {
      icons: [
        '../../../assets/icons/clearFewDay.png',
        '../../../assets/icons/clearFewNight.png',
      ],
      desc: 'Clear skies or few clouds (day/night)',
    },
    {
      icons: [
        '../../../assets/icons/scatteredBrokenDay.png',
        '../../../assets/icons/scatteredBrokenNight.png',
      ],
      desc: 'Scattered or broken clouds (day/night)',
    },
    {
      icons: [
        '../../../assets/icons/mist.png'],
      desc: 'Mist',
    },
    {
      icons: [
        '../../../assets/icons/rain.png'],
      desc: 'Light rain / Drizzle',
    },
    {
      icons: [
        '../../../assets/icons/rainProb.png'],
      desc: 'Rain probability',
    },
    {
      icons: [
        '../../../assets/icons/showerRain.png'],
      desc: 'Shower Rain',
    },
    {
      icons: [
        '../../../assets/icons/snow.png'],
      desc: 'Snow',
    },
    {
      icons: [
        '../../../assets/icons/thunderstorm.png'],
      desc: 'Thunderstorm',
    },{
      icons: [
        '../../../assets/icons/error.png'],
      desc: 'Placeholder for icon that has not been found',
    }
  ];
  constructor(private _dataService: DataService) {}
  ngOnInit() {
    this._dataService.locationsObservable.subscribe((resp) => {
      this.wLocations = resp;
    });
    this._dataService.initSubjectValue();
  }

  stopPropagation($e: Event) {
    $e.stopPropagation();
    $e.preventDefault();
  }
}
