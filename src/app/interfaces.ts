export interface locationNameId{
    id:number;
    name:string;
    coord:Coord;
}
export interface Overview{
    id: number;
    name: string;
    lastUpdated: string;
    weather: Current;
}
export enum locationModes {
  weather,
  hourly,
  forecast,
  delete,
  updating,
  error,
}

export interface locationNameId {
  id: number;
  name: string;
  coord: Coord;
}
export interface ErrorResponse {
  headers: Headers;
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  name: string;
  message: string;
  error: ErrorClass;
}

export interface ErrorClass {
  cod: string;
  message: string;
}

export interface Headers {
  normalizedNames: NormalizedNames;
  lazyUpdate: null;
}

export interface NormalizedNames {}

export interface WeatherResponse {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
  lastUpdated?: string;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface AllInOneWD {
  id: number;
  name: string;
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  hourly: Current[];
  daily: Daily[];
  lastUpdated: string;
}

export interface Rain {
    "1h": number;
}
export interface Snow {
    "1h": number;
}
export interface Current {
  dt: number;
  sunrise?: number;
  sunset?: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
  pop?: number;
  rain?: Rain;
  snow?: Snow;
  transformedTime?: Date;
}

export interface Weather {
  id: number;
  main: Main;
  description: Description;
  icon: Icon;
}

export enum Description {
  BrokenClouds = 'broken clouds',
  ClearSky = 'clear sky',
  FewClouds = 'few clouds',
  LightRain = 'light rain',
}

export enum Icon {
  The01D = '01d',
  The01N = '01n',
  The02D = '02d',
  The02N = '02n',
  The04D = '04d',
  The04N = '04n',
  The10D = '10d',
}

export interface Daily {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: Temp;
  feels_like: FeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
  clouds: number;
  pop: number;
  uvi: number;
  rain?: number;
  transformedTime?:Date;
}

export interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}
