import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  AllInOneWD,
  Coord,
  locationModes,
  locationNameId,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  locationsObservable = new Subject<locationNameId[]>();
  localModes = locationModes;
  constructor(private _httpService: HttpClient) {}

  updateLocations(value: locationNameId[]) {
    localStorage.setItem(environment.savedLocations, JSON.stringify(value));
    return this.locationsObservable.next(value);
  }

  updateLocationOfflineData(location: AllInOneWD) {
    let locations: AllInOneWD[] = JSON.parse(
      localStorage.getItem(environment.savedLocationsOfflineData) || '[]'
    );
    let lIndex = locations.findIndex((i) => {
      return i.id === location.id;
    });
    if (lIndex !== -1) {
      locations.splice(lIndex, 1);
    }
    localStorage.setItem(
      environment.savedLocationsOfflineData,
      JSON.stringify([...locations, location])
    );
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
  getAllInOne(l: Coord) {
    return this._httpService.get(environment.endPointAllInOne, {
      params: {
        lat: l.lat,
        lon: l.lon,
        exclude: 'minutely',
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

  getOfflineData(locationNameId: locationNameId) {
    let ls: AllInOneWD[] = JSON.parse(
      localStorage.getItem(environment.savedLocationsOfflineData) || '[]'
    );
    return ls.find((x) => {
      return x.id === locationNameId.id;
    });
  }

  removeLocation(locationNameId: locationNameId) {
    // Delete from offlineData
    let ls: AllInOneWD[] = JSON.parse(
      localStorage.getItem(environment.savedLocationsOfflineData) || '[]'
    );
    let index = ls.findIndex((x) => {
      return x.id === locationNameId.id;
    });
    if (index !== -1) {
      ls.splice(index, 1);
    }
    localStorage.setItem(
      environment.savedLocationsOfflineData,
      JSON.stringify([...ls])
    );
      // Delete from nameId array
    let lni: locationNameId[] = JSON.parse(
      localStorage.getItem(environment.savedLocations) || '[]'
    );
    index = lni.findIndex((x) => {
      return x.id === locationNameId.id;
    });
    if (index !== -1) {
      lni.splice(index, 1);
    }
    this.updateLocations(lni);
  }
}
