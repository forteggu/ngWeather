import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _httpService: HttpClient) {}

  getLocationsWeatherTest(location: string) {
    return this._httpService.get(environment.endPointWeather, {
      params: {
        q: location,
        appid: environment.appid,
        units:environment.metric
      },
    });
  }
}
