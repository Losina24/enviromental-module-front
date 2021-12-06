import { Component, OnInit, ChangeDetectorRef, OnChanges, AfterViewInit } from '@angular/core';
import ListElement from 'src/app/shared/models/ListElement';
import ListField from 'src/app/shared/models/ListField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { EnviromentalDevicesService } from '../enviromental-devices.service';
import { Router } from '@angular/router';
import UserSession from 'src/app/shared/models/UserSession';
import ListActions from 'src/app/shared/models/ListActions';
import ConfirmationPopupMessage from 'src/app/shared/models/ConfirmationPopupMessage';

@Component({
  selector: 'app-enviromental-device-list',
  templateUrl: './enviromental-device-list.component.html',
  styleUrls: ['./enviromental-device-list.component.scss']
})
export class EnviromentalDeviceListComponent implements OnInit, AfterViewInit {
  
  // Atributes
  listElements: ListElement[] = [];
  actions: ListActions[] = [];
  confirmationPopup: ConfirmationPopupMessage = new ConfirmationPopupMessage("Eliminar dispositivo", "Una vez eliminado desaparecerá para siempre", "/dash/ambiental/dispositivos");

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
  ) {}

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

  ngAfterViewInit() {
    // Setting the title
    this._titleUpdaterService.changeTitle("Dispositivos ambientales");
  }

  /* generateListElements() {
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
  } */

  generateListElements() {
    let list: ListElement[] = [];
      
    // TESTING //
    let devices = [
        {
          id: 1,
          name: "Device_A1",
          gatewayId: 1,
          coords: {
            latitude: 1.202,
            longitude: 2.211
          },
          status: true
        },
        {
          id: 2,
          name: "Device_A2",
          gatewayId: 1,
          coords: {
            latitude: 1.202,
            longitude: 2.211
          },
          status: true
        },
        {
          id: 3,
          name: "Device_A3",
          gatewayId: 1,
          coords: {
            latitude: 1.202,
            longitude: 2.211
          },
          status: true
        },
        {
          id: 4,
          name: "Device_A4",
          gatewayId: 1,
          coords: {
            latitude: 1.202,
            longitude: 2.211
          },
          status: true
        }
      ]
      //
      
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

        // Setting the list of fields of the table
        let le = new ListElement([lf1, lf2, lf3, lf4, lf5, lf6])
        list.push(le);

        // Setting the action buttons for each table row
        this.actions.push(new ListActions(["Editar", "Eliminar"], device.id, ["/dash/ambiental/dispositivos/" + device.id, device.id]))
      });
    
    this.listElements = list;
    this._cdr.detectChanges()
  }

}
