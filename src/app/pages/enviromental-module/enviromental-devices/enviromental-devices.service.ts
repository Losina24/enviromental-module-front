/**
 * Name: enviromental-devices.service.ts
 * Date: 11 - 12 - 2021
 * Author: Alejandro Losa García
 * Description: Fake logic service used to manage all enviromental device communication with the API via REST
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviromentalDevicesService {

  api: string = 'http://localhost:8080/v2/enviromental/devices';

  constructor(private _httpClient: HttpClient) {}

  /**
   * Get enviromental device list in a pagination format
   * Z, Z, Z -> getEnviromentalDevicePagination() -> JSON
   * 
   * @param userId 
   * @param pageSize 
   * @param pageIndex 
   * @returns 
   */
  getEnviromentalDevicePagination(userId: number, pageSize: number, pageIndex: number): Observable<any> {
    return this._httpClient.get(`${this.api}/user/${userId}/${pageSize}/${pageIndex}`)
  }

  /**
   * Get information about an enviromental device
   * Z -> getEnviromentalDeviceInformation() -> JSON
   * 
   * @param deviceId 
   * @returns 
   */
  getEnviromentalDeviceInformation(deviceId: number) {
    return this._httpClient.get(`${this.api}/${deviceId}`)
  }

  /**
   * Create a new enviromental device
   * Text x6 -> storeEnviromentalDevice() -> JSON
   * 
   * @param name 
   * @param deviceEUI 
   * @param gatewayId 
   * @param latitude 
   * @param longitude 
   * @param userId 
   * @returns 
   */
  storeEnviromentalDevice(name:string, deviceEUI: string, gatewayId: string, latitude: string, longitude: string, userId: string) {
    let params = {name: name, deviceEUI: deviceEUI, gatewayId: gatewayId, latitude: latitude, longitude: longitude, userId: userId}
    console.log('params', params);
    
    return this._httpClient.post(`${this.api}/`, params)
  }
}
