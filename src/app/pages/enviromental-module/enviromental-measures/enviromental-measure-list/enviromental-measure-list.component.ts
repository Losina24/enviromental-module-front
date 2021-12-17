import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import ListElement from 'src/app/shared/models/ListElement';
import ListField from 'src/app/shared/models/ListField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { EnviromentalDevicesService } from '../../enviromental-devices/enviromental-devices.service';
import { EnviromentalMeasuresService } from '../enviromental-measures.service';
import { Router } from '@angular/router';
import { PopupMessageService } from 'src/app/shared/components/popup-message/popup-message.service';
import UserSession from 'src/app/shared/models/UserSession';
import EnviromentalDevice from 'src/app/shared/models/EnviromentalDevice';
import Gateway from 'src/app/shared/models/Gateway';
import ListActions from 'src/app/shared/models/ListActions';

@Component({
  selector: 'app-enviromental-measure-list',
  templateUrl: './enviromental-measure-list.component.html',
  styleUrls: ['./enviromental-measure-list.component.scss']
})

export class EnviromentalMeasureListComponent implements OnInit {
  
  listElements: ListElement[] = [];
  actions: ListActions[] = [];

  orderIndex: number = 0;
  pageIndex: number = 1;
  pageSize: number = 30;
  total: number = 0;
  userId: number;
  councilId: number;
  role: string;
  
  deviceList: EnviromentalDevice[] = [];
  device: string;

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _service: EnviromentalMeasuresService,
    private _enviromentalDeviceService: EnviromentalDevicesService,
    private _router: Router,
    private _popupMessageService: PopupMessageService
  ) { }


  ngOnInit(): void {
    this._titleUpdaterService.changeTitle("Mediciones ambientales");

    // Setting the user's role
    let session = new UserSession();
    this.userId = session.getUserId();
    this.councilId = session.getCouncilId()
    this.role = session.getRole();

    // Generating stuff
    this.getUserDevices();
    this.generateListElements();
  }

  generateListElements() {
    let id = this.userId;
    if(this.role == "admin") id = this.councilId;
    this._service.getMeasurePagination(id, this.pageSize, this.pageIndex, this.role).subscribe( res => {
      
      let list: ListElement[] = [];
        
      if(res.http == 200) {
        let devices = res.result;
        console.log(devices);
        
        devices.forEach((device:any) => {

          if(device.value <= 0) {

          } else {
            console.log(device);
          let lf1 = new ListField();
          lf1.setName("Sensor ID");
          lf1.setValue(device.sensor_id);
          
          let lf2 = new ListField();
          lf2.setName("Valor");
          if(device.value <= 0) {
            let medida = Math.random() * (40 - 1) + 1;
            lf2.setValue(medida);
            console.log(medida)
          } else {
            lf2.setValue(device.value);
          }

          let lf3 = new ListField();
          lf3.setName("Unidad");
          lf3.setValue(device.unit);

          let lft = new ListField();
          lft.setName("Tipo");
          if(device.unit == "ppm") {
            lft.setValue("CO2");
          } else if(device.unit == "%") {
            lft.setValue("Soil");
          } else if(device.unit == "Cº") {
            lft.setValue("Temperatura");
          } else if(device.unit == "db") {
            lft.setValue("Ruido");
          }

          let lf4 = new ListField();
          lf4.setName("Tipo");
          lf4.setValue("Enviromental");

          let lf6 = new ListField();
          lf6.setName("Peligro");
          if(device.danger == "red") {
            lf6.setValue("red");
          } else {
            lf6.setValue(device.danger);
          }
          console.log(device)
          let le = new ListElement([lf1, lf2, lf3, lft, lf4, lf6])
          list.push(le);
          }

        });
      } else {
        this._popupMessageService.sendMessage(["¡Vaya!", "No existen sensores en la base de datos", false])
      }

      this.listElements = list;
      this._cdr.detectChanges()

      /* setTimeout(() => {
        this._service.generateAlert("Alerta", "Hay un dato peligroso", "5", "red").subscribe((res) => {
          console.log('guay');
          
        })
        this.generateListElements()
      }, 4000); */
    })
  }

  getUserDevices() {
    this._enviromentalDeviceService.getAllEnviromentalDevices(this.userId).subscribe( (res: any) => {
      res.result.forEach( (data: any) => {
        let gateway = new Gateway();
        gateway.setId(data.gatewayId);
        
        let coords: [number, number] = [data.coords[0], data.coords[1]];
        

        const deviceGenerator = {
          id: data.id,
          name: data.name,
          gateway: gateway,
          deviceEUI: data.deviceEUI,
          coords: coords,
          status: data.status
        }

        this.deviceList.push(new EnviromentalDevice(deviceGenerator))
      });
    })
  }
}
