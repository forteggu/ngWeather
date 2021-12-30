import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherResponse } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weatherAppAngular';
  

  ngOnInit(){
    if(localStorage.getItem(environment.savedLocations)==null){
      localStorage.setItem(environment.savedLocations,JSON.stringify([]));
    }else{

    }
  }
}
