import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviromentalMeasuresService {

  api: string = 'http://localhost:8080/v2/enviromental/measures';
  
  constructor(private _httpClient: HttpClient) { }

  getMeasures(userId:string): Observable<any> {
    return this._httpClient.get(`${this.api}/${userId}`)
  }

  generateAlert(subject: string, body: string, sensorId: string, magnitude: string) {    
    let params = {subject: subject, body: body, sensor_id: sensorId, magnitude: magnitude }
    return this._httpClient.post(`http://localhost:8080/v2/notifications/`, params)
  }
}
