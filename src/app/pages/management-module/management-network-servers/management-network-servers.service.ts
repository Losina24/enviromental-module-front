import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ManagementNetworkServerService {

  api: string = 'http://localhost:8080/v2/network_servers';

  constructor(private _httpClient: HttpClient) {}

  getNetworkServers(): Observable<any> {
    return this._httpClient.get(`${this.api}/`)
  }

  storeNetorkServer(name:string, mac: string, centralized: string, url: string, type: string, token: string, provider: string) {
    let params = {name: name, identifier: mac, centralized: centralized, url: url, type: type, token: token, provider: provider, status: '1'}
    
    return this._httpClient.post(`${this.api}/`, params)
  }

  editNetorkServer(id: number, name: string, mac: string, centralized: string, url: string, type: string, token: string, provider: string) {
    let params = {name: name, identifier: mac, centralized: centralized, url: url, type: type, token: token, provider: provider, status: '1'}
    
    return this._httpClient.put(`${this.api}/${id}`, params)
  }

  getNetworkServerPagination(userId: number, pageSize: number, pageIndex: number, role: string): Observable<any> {
    if(role == "root") {
      return this._httpClient.get(`${this.api}/root/${pageSize}/${pageIndex}`)
    } else {
      return this._httpClient.get(`${this.api}/council/${userId}/${pageSize}/${pageIndex}`)
    }
  }
  
  getNetworkServerInformation(id: number): Observable<any> {
    return this._httpClient.get(`${this.api}/${id}`)
  }

  deleteNetworkServer(id: number): Observable<any> {
    return this._httpClient.delete(`${this.api}/${id}`)
  }
}
