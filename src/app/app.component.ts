import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherResponse } from './interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weatherAppAngular';
  wLocations:WeatherResponse[]=[];
  isAddingNewLocation:boolean=false;

  constructor(private _dataService:DataService){}
  ngOnInit(){
    this._dataService.locationsObservable.subscribe(resp=>{
      this.wLocations=resp;
    });
    this._dataService.initSubjectValue();
  }

  stopPropagation($e:Event){
    $e.stopPropagation();
    $e.preventDefault();
  }
}
