import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviromentalSensorsService {
  
  api: string = 'http://localhost:8080/v2/enviromental/sensors';

  constructor(private _httpClient: HttpClient) {}

  getEnviromentalSensorsPagination(userId:number|string, pageSize:number|string, pageIndex:number|string): Observable<any> {
    return this._httpClient.get(`${this.api}/user/${userId}/${pageSize}/${pageIndex}`)
  }

  storeEnviromentalSensor(name:string, deviceEUI: string, deviceId: string, type: string) {
    let params = {deviceId: deviceId, name: name, deviceEUI: deviceEUI, type: type, status: 1}
    console.log('params', params)
    return this._httpClient.post(`${this.api}`, params)
  }

   /**
   * Get sensor list in a pagination format
   * Z, Z, Z, Text -> getSensorPagination() -> JSON
   * 
   * @param userId 
   * @param pageSize 
   * @param pageIndex 
   * @param role
   * @returns 
   */
    getSensorPagination(userId: number, pageSize: number, pageIndex: number, role: string): Observable<any> {
      let type = "";
  
      if(role == "root") {
        return this._httpClient.get(`${this.api}/root/${pageSize}/${pageIndex}`)
      } else if(role == "admin") {
        type = "council";
      } else {
        type = "user";
      }

      return this._httpClient.get(`${this.api}/list/${type}/${userId}/${pageSize}/${pageIndex}`)
    }
  
    /**
     * Get information about a sensor
     * Z, Text -> getSensorInformation() -> JSON
     * 
     * @param sensorId 
     * @returns 
     */
    getSensorInformation(sensorId: number) {
      return this._httpClient.get(`${this.api}/${sensorId}`)
    }
  
    /**
     * Create a new sensor
     * Text, Text, Text, Text -> storeSensor() -> JSON
     * 
     * @param name 
     * @param deviceEUI 
     * @param deviceId 
     * @param type 
     * @returns 
     */
    storeSensor(name:string, deviceEUI: string, deviceId: string, type: string) {
      let params = {deviceId: deviceId, name: name, deviceEUI: deviceEUI, type: type, status: 1}
      return this._httpClient.post(`${this.api}/`, params)
    }
  
    /**
     * Edit an existing sensor
     * Z, Text, Text, Text, Text -> editSensor() -> JSON
     * 
     * @param id
     * @param name 
     * @param deviceEUI 
     * @param deviceId 
     * @param type 
     * @returns 
     */
     editSensor(id: number, name:string, deviceEUI: string, deviceId: string, type: string) {
      let params = {deviceId: deviceId, name: name, deviceEUI: deviceEUI, type: type, status: 1}
      return this._httpClient.put(`${this.api}/${id}`, params)
    }
  
    /**
     * Remove an enviromental device
     * Z -> deleteEnviromentalDeviceInformation() -> JSON
     * 
     * @param deviceId 
     * @returns 
     */
     deleteEnviromentalDeviceInformation(deviceId: number) {
      return this._httpClient.delete(`${this.api}/${deviceId}`)
    }
}
