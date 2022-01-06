import { Component, OnInit } from '@angular/core';
import { locationNameId } from './interfaces';
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
