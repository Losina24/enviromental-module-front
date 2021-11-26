import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviromentalSensorsService {
  
  api: string = 'http://localhost:8080/v2/enviromental/sensors';

  constructor(private _httpClient: HttpClient) {}

  getEnviromentalSensorsPagination(userId:number|string, pageSize:number|string, pageIndex:number|string): Observable<any> {
    return this._httpClient.get(`${this.api}/user/${userId}/${pageSize}/${pageIndex}`)
  }

  storeEnviromentalSensor(name:string, deviceEUI: string, deviceId: string, type: string) {
    let params = {deviceId: deviceId, name: name, deviceEUI: deviceEUI, type: type, status: 1}
    console.log('params', params);
    
    return this._httpClient.post(`${this.api}/add`, params)
  }
}
