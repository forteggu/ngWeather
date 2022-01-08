import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyLocationComponent } from './components/empty-location/empty-location.component';
import { WeatherLocationComponent } from './components/weather-location/weather-location.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocationWeatherOverviewComponent } from './components/location-weather-overview/location-weather-overview.component';
import { LocationWeatherHourlyComponent } from './components/location-weather-hourly/location-weather-hourly.component';
import { LocationWeatherForecastComponent } from './components/location-weather-forecast/location-weather-forecast.component';
import { LocationUpdatingComponent } from './components/location-updating/location-updating.component';
import { LocationErrorComponent } from './components/location-error/location-error.component';
import { CacheAlertComponent } from './components/cache-alert/cache-alert.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    EmptyLocationComponent,
    WeatherLocationComponent,
    LocationWeatherOverviewComponent,
    LocationWeatherHourlyComponent,
    LocationWeatherForecastComponent,
    LocationUpdatingComponent,
    LocationErrorComponent,
    CacheAlertComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerImmediately'
}), ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
