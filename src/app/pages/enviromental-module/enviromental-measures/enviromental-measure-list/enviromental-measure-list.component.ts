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

@Component({
  selector: 'app-enviromental-measure-list',
  templateUrl: './enviromental-measure-list.component.html',
  styleUrls: ['./enviromental-measure-list.component.scss']
})

export class EnviromentalMeasureListComponent implements OnInit {
  
  listElements: ListElement[] = [];
  orderIndex: number = 0;
  pageIndex: number = 1;
  pageSize: number = 10;
  total: number = 0;
  userId: number;
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
    this.role = session.getRole();

    // Generating stuff
    this.getUserDevices();
    this.generateListElements();
  }

  generateListElements() {
    this._service.getMeasurePagination(parseInt(this.device), this.pageSize, this.pageIndex).subscribe( res => {
      
      let list: ListElement[] = [];
        
      if(res.http == 200) {
        let devices = res.response;
        let devices2 = devices.slice(devices.length - 8, devices.length - 1)
        devices2.forEach((device:any) => {

          let lf1 = new ListField();
          lf1.setName("Sensor ID");
          lf1.setValue(device.sensorId);
          
          let lf2 = new ListField();
          lf2.setName("Valor");
          lf2.setValue(device.value);

          let lf3 = new ListField();
          lf3.setName("Unidad");
          lf3.setValue(device.unit);

          let lf4 = new ListField();
          lf4.setName("Tipo");
          lf4.setValue(device.type);

          let lf6 = new ListField();
          lf6.setName("Peligro");
          if(device.value > 200) {
            lf6.setValue("Si");
          } else {
            lf6.setValue("No");
          }

          let le = new ListElement([lf1, lf2, lf3, lf4, lf6])
          list.push(le);
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
