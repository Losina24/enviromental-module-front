import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagementGatewaysService {

  api: string = 'http://localhost:8080/v2/gateway';

  constructor(private _httpClient: HttpClient) {}

  getGateways(): Observable<any> {
    return this._httpClient.get(`${this.api}/`)
  }

  storeGateway(name:string, mac: string, councilId: string, latitude: string, longitude: string) {
    let params = {name: name, mac: mac, councilId: councilId, latitude: latitude, longitude: longitude, status: '1'}
    console.log(params);
    
    return this._httpClient.post(`${this.api}/`, params)
  }

  getGatewaysPagination(userId: number, pageSize: number, pageIndex: number, role: string): Observable<any> {
    let type = "";

    if(role == "root") {
      type = "root";
    } else {
      type = "council";
    }

    return this._httpClient.get(`${this.api}/${type}/${userId}/${pageSize}/${pageIndex}`)
  }
}
