import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import ListElement from 'src/app/shared/models/ListElement';
import ListField from 'src/app/shared/models/ListField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { EnviromentalDevicesService } from '../enviromental-devices.service';
import { Router } from '@angular/router';
import UserSession from 'src/app/shared/models/UserSession';

@Component({
  selector: 'app-enviromental-device-list',
  templateUrl: './enviromental-device-list.component.html',
  styleUrls: ['./enviromental-device-list.component.scss']
})
export class EnviromentalDeviceListComponent implements OnInit {
  
  // Atributes
  listElements: ListElement[] = [];
  orderIndex: number = 0;
  pageIndex: number = 1;
  pageSize: number = 10;
  total: number = 0;
  userId: number;
  role: string;

  // Constructor
  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _service: EnviromentalDevicesService,
    private _router: Router
  ) { }

  // Methods
  ngOnInit(): void {
    // Setting the title
    this._titleUpdaterService.changeTitle("Dispositivos ambientales");

    // Generating the DOM elements
    this.generateListElements()
    
    // Setting the user's role
    let session = new UserSession();
    this.role = session.getRole();
  }

  generateListElements() {
    this._service.getEnviromentalDevicePagination(this.userId, this.pageSize, this.pageIndex).subscribe( res => {
      
      let list: ListElement[] = [];
      
      if(res.http == 200) {
        let devices = res.response;

        devices.forEach((device:any) => {
          let lf1 = new ListField();
          lf1.setName("ID");
          lf1.setValue(device.id);
          
          let lf2 = new ListField();
          lf2.setName("Nombre");
          lf2.setValue(device.name);

          let lf3 = new ListField();
          lf3.setName("Gateway ID");
          lf3.setValue(device.gatewayId);

          let lf4 = new ListField();
          lf4.setName("Coordenada X");
          lf4.setValue(device.coords.latitude);

          let lf5 = new ListField();
          lf5.setName("Coordenada Y");
          lf5.setValue(device.coords.longitude);

          let lf6 = new ListField();
          lf6.setName("Estado");
          if(device.status == 1) {
            lf6.setValue("Encendido");
          } else {
            lf6.setValue("Apagado");
          }

          let le = new ListElement([lf1, lf2, lf3, lf4, lf5, lf6])
          list.push(le);
        });
      } else {
        alert("No hay información en la base de datos")
      }

      this.listElements = list;
      this._cdr.detectChanges()
    })
  }

}
