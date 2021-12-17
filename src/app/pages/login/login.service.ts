/**
 * Name: login.service.ts
 * Date: 23 - 11 - 2021
 * Author: Alejandro Losa García
 * Description: Fake logic service used to manage the login formulary
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  
  api: string = 'http://localhost:8080/v2/user';

  constructor(private _httpClient: HttpClient) {}

  checkLogin(email:string, password:string): Observable<any> {
    let params = {email: email, password: password}
    return this._httpClient.post(`${this.api}/login`, params)
  }
}
