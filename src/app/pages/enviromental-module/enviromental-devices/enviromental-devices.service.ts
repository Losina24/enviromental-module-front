import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviromentalDevicesService {

  api: string = 'http://localhost:8080/v2/enviromental/devices';

  constructor(private _httpClient: HttpClient) {}

  getEnviromentalDevicePagination(userId:number|string, pageSize:number|string, pageIndex:number|string): Observable<any> {
    return this._httpClient.get(`${this.api}/user/${userId}/${pageSize}/${pageIndex}`)
  }
}
