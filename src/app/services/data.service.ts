import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  locationsObservable = new Subject<WeatherResponse[]>();
  constructor(private _httpService: HttpClient) {}

  updateLocations(value: WeatherResponse[]) {
    localStorage.setItem(environment.savedLocations, JSON.stringify(value));
    return this.locationsObservable.next(value);
  }

  updateLocation(location: WeatherResponse) {
    let locations:WeatherResponse[]=JSON.parse(localStorage.getItem(environment.savedLocations) || "[]");
    let lIndex = locations.findIndex(i=>{
      i.id===location.id
    });
    if(lIndex){
      locations.splice(lIndex,1);
    }
    this.updateLocations([...locations,location]);
  }

  getLocationsSubject() {
    return this.locationsObservable.asObservable();
  }
  initSubjectValue() {
    this.updateLocations(
      JSON.parse(
        localStorage.getItem(environment.savedLocations) || JSON.stringify([])
      )
    );
  }
  getLocationsWeather(location: string) {
    return this._httpService.get(environment.endPointWeather, {
      params: {
        q: location,
        appid: environment.appid,
        units: environment.metric,
      },
    });
  }
}
