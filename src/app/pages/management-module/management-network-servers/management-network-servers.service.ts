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
    console.log(params);
    
    return this._httpClient.post(`${this.api}/`, params)
  }

  getNetworkServerPagination(userId: number, pageSize: number, pageIndex: number, role: string): Observable<any> {
    let type = "";

    if(role == "root") {
      type = "root";
    } else {
      type = "council";
    }

    return this._httpClient.get(`${this.api}/${type}/${userId}/${pageSize}/${pageIndex}`)
  }
}
