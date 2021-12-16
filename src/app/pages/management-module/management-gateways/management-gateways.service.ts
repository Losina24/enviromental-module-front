import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagementGatewaysService {

  api: string = 'http://localhost:8080/v2/gateway';

  constructor(private _httpClient: HttpClient) {}

  getGatewayInformation(id: number): Observable<any> {
    return this._httpClient.get(`${this.api}/${id}`)
  }

  getGateways(): Observable<any> {
    return this._httpClient.get(`${this.api}/`)
  }

  storeGateway(name:string, mac: string, councilId: string, latitude: string, longitude: string) {
    let params = {name: name, mac: mac, councilId: councilId, latitude: latitude, longitude: longitude, status: '1'}

    return this._httpClient.post(`${this.api}/`, params)
  }

  getGatewaysPagination(userId: number, pageSize: number, pageIndex: number, role: string): Observable<any> {
    if(role == "root") {
      return this._httpClient.get(`${this.api}/root/${pageSize}/${pageIndex}`)
    } else {
      return this._httpClient.get(`${this.api}/council/${userId}/${pageSize}/${pageIndex}`)
    }
  }

  editGateway(id: number, name:string, mac: string, councilId: string, latitude: string, longitude: string) {
    let params = {name: name, mac: mac, councilId: councilId, latitude: latitude, longitude: longitude, status: '1'}
    return this._httpClient.put(`${this.api}/${id}`, params)
  }

  deleteGateway(id: number) {
    return this._httpClient.delete(`${this.api}/${id}`)
  }
}
