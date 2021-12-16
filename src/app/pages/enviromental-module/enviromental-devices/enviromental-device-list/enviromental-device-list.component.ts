import { Component, OnInit, ChangeDetectorRef, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';
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
export class EnviromentalDeviceListComponent implements OnInit, OnChanges {
  
  // Atributes
  listElements: ListElement[] = [];
  actions: ListActions[] = [];
  confirmationPopup: ConfirmationPopupMessage = new ConfirmationPopupMessage("Eliminar dispositivo", "Una vez eliminado desaparecerá para siempre", "/dash/ambiental/dispositivos");

  orderIndex: number = 0;
  pageIndex: number = 1;
  pageSize: number = 10;
  total: number = 0;

  userId: number;
  role: string = "";

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

    // Setting the user's role
    let session = new UserSession();
    this.userId = session.getUserId();
    this.role = session.getRole();

    // Generating the DOM elements
    this.generateListElements()
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  generateListElements() {
    this._service.getEnviromentalDevicePagination(this.userId, this.pageSize, this.pageIndex, this.role).subscribe( res => {
      
      let list: ListElement[] = [];
      
      if(res.http == 200) {
        let devices = res.result;
        
        devices.forEach((device:any) => {
          let listFieldID = new ListField();
          listFieldID.setName("ID");
          listFieldID.setValue(device.id);
          
          let listFieldName = new ListField();
          listFieldName.setName("Nombre");
          listFieldName.setValue(device.name);

          let listFieldGateway = new ListField();
          listFieldGateway.setName("Gateway ID");
          listFieldGateway.setValue(device.gatewayId);

          let listFieldX = new ListField();
          listFieldX.setName("Coordenada X");
          listFieldX.setValue(device.coords[0]);

          let listFieldY = new ListField();
          listFieldY.setName("Coordenada Y");
          listFieldY.setValue(device.coords[1]);

          let listFieldStatus = new ListField();
          listFieldStatus.setName("Estado");
          if(device.status == 1) {
            listFieldStatus.setValue("Encendido");
          } else {
            listFieldStatus.setValue("Apagado");
          }
          
          let listElement = new ListElement([listFieldID, listFieldName, listFieldGateway, listFieldX, listFieldY, listFieldStatus])
          list.push(listElement);
          
          // Setting the action buttons for each table row
          if(this.role == "root" || this.role == "admin") {
            this.actions.push(new ListActions(["Editar", "Eliminar"], device.id, ["/dash/ambiental/dispositivos/" + device.id, device.id]))
          }
        });
      } else {
        alert("No hay información en la base de datos") // Hay que cambiarlo por un mensaje
      }
      
      this.listElements = list;
      this._cdr.detectChanges()
    })
  }

  removeEnviromentalDevice(id: number) {
    this._service.deleteEnviromentalDevice(id).subscribe(res => {
      this.generateListElements()
      this._cdr.detectChanges()
    })
  }
}
