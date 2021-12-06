import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainDashboardServiceService {

  api: string = 'http://localhost:8080/v2';

  constructor(private _httpClient: HttpClient) { }

  getMeasures(userId: number): Observable<any> {
    return this._httpClient.get(`${this.api}/enviromental/measures/1`)
  }

  getDevices(userId: number): Observable<any> {
    return this._httpClient.get(`${this.api}/enviromental/devices/user/${userId}`)
  }

  getAlerts(userId: number): Observable<any> {
    return this._httpClient.get(`${this.api}/notifications/listByUserId/${userId}`)
  }

  getSensors(userId: number): Observable<any> {
    return this._httpClient.get(`${this.api}/enviromental/sensors/list/${userId}`)
  }

  getGateways(): Observable<any> {
    return this._httpClient.get(`${this.api}/gateway`)
  }

  getCouncils(): Observable<any> {
    return this._httpClient.get(`${this.api}/council`)
  }

  getNS(): Observable<any> {
    return this._httpClient.get(`${this.api}/NS`)
  }

  getUsers(): Observable<any> {
    return this._httpClient.get(`${this.api}/user`)
  }
}
