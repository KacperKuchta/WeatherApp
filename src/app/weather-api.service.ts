import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) { }

  getWeatherData(lokalizacja: string): Observable<any>{
    return this.http.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lokalizacja}?unitGroup=metric&include=current%2Cdays%2Chours&key=LWNXHETWMNPQ6F69CDRZYZ6AV&contentType=json`)
  }
}
