import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagementCouncilsService {
  
  api: string = 'http://localhost:8080/v2/council';

  constructor(private _httpClient: HttpClient) { }

  getAllCouncils(): Observable<any> {
    return this._httpClient.get(`${this.api}/`)
  }

  editCouncil(id: number, name: string, address: string, phoneNumber: string, email: string, web: string, postalCode: string, iban: string) {
    let params = {name: name, address: address, phoneNumber: phoneNumber, email: email, postalCode: postalCode, iban: iban}
    console.log('params', params);
    
    return this._httpClient.put(`${this.api}/${id}`, params)
  }

  storeCouncil(name: string, address: string, phoneNumber: string, email: string, web: string, postalCode: string, iban: string) {
    let params = {name: name, address: address, phoneNumber: phoneNumber, email: email, postalCode: postalCode, iban: iban}
    console.log('params', params);
    
    return this._httpClient.post(`${this.api}/`, params)
  }

  getCouncilPagination(id: number,  pageSize: number, pageIndex: number, role: string): Observable<any> {
    return this._httpClient.get(`${this.api}/pagination/${pageSize}/${pageIndex}`)
  }

  getCouncilInformation(id: number): Observable<any> {
    return this._httpClient.get(`${this.api}/${id}`)
  }

  deleteCouncil(id: number): Observable<any> {
    return this._httpClient.delete(`${this.api}/${id}`)
  }
}
