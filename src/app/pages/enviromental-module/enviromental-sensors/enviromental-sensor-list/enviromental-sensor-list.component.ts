import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import ListElement from 'src/app/shared/models/ListElement';
import ListField from 'src/app/shared/models/ListField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { EnviromentalSensorsService } from '../enviromental-sensors.service';
import { Router } from '@angular/router';
import UserSession from 'src/app/shared/models/UserSession';
import ListActions from 'src/app/shared/models/ListActions';
import ConfirmationPopupMessage from 'src/app/shared/models/ConfirmationPopupMessage';
import { PopupMessageService } from 'src/app/shared/components/popup-message/popup-message.service';

@Component({
  selector: 'app-enviromental-sensor-list',
  templateUrl: './enviromental-sensor-list.component.html',
  styleUrls: ['./enviromental-sensor-list.component.scss']
})

export class EnviromentalSensorListComponent implements OnInit {

  // Atributes
  listElements: ListElement[] = [];
  actions: ListActions[] = [];
  confirmationPopup: ConfirmationPopupMessage = new ConfirmationPopupMessage("Eliminar sensor", "Una vez eliminado desaparecerá para siempre", "/dash/ambiental/sensores");

  // Pagination
  orderIndex: number = 0;
  pageIndex: number = 1;
  pageSize: number = 6;
  total: number = 0;

  // Sessions
  userId: number;
  role: string;

  // Constructor
  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _service: EnviromentalSensorsService,
    private _popupMessageService: PopupMessageService,
    private _router: Router,
  ) { }

  // Methods
  ngOnInit(): void {
    // Changing the title
    this._titleUpdaterService.changeTitle("Sensores ambientales");
    
    // Setting the user's role
    let session = new UserSession();
    this.userId = session.getUserId();
    this.role = session.getRole();

    // Generating the DOM elements
    this.generateListElements()
  }

  generateListElements() {
    this._service.getSensorPagination(this.userId, this.pageSize, this.pageIndex, this.role).subscribe( res => {
      
      let list: ListElement[] = [];
      console.log(res)
      if(res.http == 200 && res.result.length > 0) {
        let sensors = res.result;
        console.log('sensors', sensors);
        
        sensors.forEach((sensor:any) => {
          let lf1 = new ListField();
          lf1.setName("ID");
          lf1.setValue(sensor._id);
          
          let lf2 = new ListField();
          lf2.setName("Nombre");
          lf2.setValue(sensor._name);

          let lf3 = new ListField();
          lf3.setName("ID de dispositivo");
          lf3.setValue(sensor._deviceId);

          let lf4 = new ListField();
          lf4.setName("DeviceEUI");
          lf4.setValue(sensor._deviceEUI);

          let lf5 = new ListField();
          lf5.setName("Tipo");
          lf5.setValue("Ambiental");

          let lf6 = new ListField();
          lf6.setName("Estado");
          if(sensor._status == 1) {
            lf6.setValue("Encendido");
          } else {
            lf6.setValue("Apagado");
          }

          let le = new ListElement([lf1, lf2, lf3, lf4, lf5, lf6])
          list.push(le);

          // Setting the action buttons for each table row
          this.actions.push(new ListActions(["Editar", "Eliminar"], sensor._id, ["/dash/ambiental/sensores/" + sensor._id, sensor._id]))
        });
      } else {
        this._popupMessageService.sendMessage(["¡Vaya!", "No existen sensores en la base de datos", false])
      }

      this.listElements = list;
      this._cdr.detectChanges()
    })
  }
}
