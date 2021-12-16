import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagementUsersService {

  api: string = 'http://localhost:8080/v2/user';

  constructor(private _httpClient: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this._httpClient.get(`${this.api}/`)
  }

  getUserInformation(id: number): Observable<any> {
    return this._httpClient.get(`${this.api}/${id}`)
  }

  storeUser(roleId:string, councilId: string, name: string, surnames: string, password: string, address: string, phoneNumber: string, email: string, postalCode: string) {
    let params = {roleId:roleId, councilId: councilId, name: name, surnames: surnames, password: password, address: address, phoneNumber: phoneNumber, email: email, postalCode: postalCode}
    
    return this._httpClient.post(`${this.api}/`, params)
  }

  editUser(id:number, roleId:string, councilId: string, name: string, surnames: string, password: string, address: string, phoneNumber: string, email: string, postalCode: string) {
    let params = {id: id, roleId:roleId, councilId: councilId, name: name, surnames: surnames, password: password, address: address, phoneNumber: phoneNumber, email: email, postalCode: postalCode}
    console.log('params', params);
    
    return this._httpClient.put(`${this.api}/`, params)
  }

  getUserPagination(userId: number, pageSize: number, pageIndex: number, role: string): Observable<any> {
    if(role == "root") {
      return this._httpClient.get(`${this.api}/root/${pageSize}/${pageIndex}`)
    } else {
      return this._httpClient.get(`${this.api}/council/${userId}/${pageSize}/${pageIndex}`);
    }
  }

  deleteUser(id: number): Observable<any> {
    return this._httpClient.delete(`${this.api}/${id}`)
  }
}
