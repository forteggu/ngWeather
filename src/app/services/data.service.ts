import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { locationNameId, WeatherResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  locationsObservable = new Subject<locationNameId[]>();
  constructor(private _httpService: HttpClient) {}

  updateLocations(value: locationNameId[]) {
    localStorage.setItem(environment.savedLocations, JSON.stringify(value));
    return this.locationsObservable.next(value);
  }

  updateLocationOfflineData(location: WeatherResponse) {
    let locations:WeatherResponse[]=JSON.parse(localStorage.getItem(environment.savedLocationsOfflineData) || "[]");
    let lIndex = locations.findIndex(i=>{
      return i.id===location.id
    });
    if(lIndex!==-1){
      locations.splice(lIndex,1);
    }
    localStorage.setItem(environment.savedLocationsOfflineData,JSON.stringify(([...locations,location])));
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
  getLocationsWeatherById(location: number) {
    return this._httpService.get(environment.endPointWeather, {
      params: {
        id: location,
        appid: environment.appid,
        units: environment.metric,
      },
    });
  }
}
