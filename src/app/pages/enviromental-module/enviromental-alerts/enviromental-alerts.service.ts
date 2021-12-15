import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviromentalAlertsService {

  api: string = 'http://localhost:8080/v2/notifications';

  constructor(private _httpClient: HttpClient) { }

  getEnviromentalAlerts(userId:number): Observable<any> {
    let Id = userId;
    return this._httpClient.get(`${this.api}/listByUserId/${Id}`)
  }

  getEnviromentalAlertPagination(id: number,  pageSize: number, pageIndex: number, role: string): Observable<any> {
    let type = "";
  
      if(role == "root") {
        type = "root";
      } else if(role == "admin") {
        type = "council";
      } else {
        type = "user";
      }

    return this._httpClient.get(`${this.api}/${type}/${id}/${pageSize}/${pageIndex}`)
  }
}
