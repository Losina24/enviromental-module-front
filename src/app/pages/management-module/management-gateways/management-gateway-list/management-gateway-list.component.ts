import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import ListElement from 'src/app/shared/models/ListElement';
import ListField from 'src/app/shared/models/ListField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { Router } from '@angular/router';
import { ManagementGatewaysService } from '../management-gateways.service';
import UserSession from 'src/app/shared/models/UserSession';
import ListActions from 'src/app/shared/models/ListActions';
import ConfirmationPopupMessage from 'src/app/shared/models/ConfirmationPopupMessage';
import { PopupMessageService } from 'src/app/shared/components/popup-message/popup-message.service';

@Component({
  selector: 'app-management-gateway-list',
  templateUrl: './management-gateway-list.component.html',
  styleUrls: ['./management-gateway-list.component.scss']
})
export class ManagementGatewayListComponent implements OnInit {

  // Atributes
  listElements: ListElement[] = [];
  actions: ListActions[] = [];
  confirmationPopup: ConfirmationPopupMessage = new ConfirmationPopupMessage("Eliminar gateway", "Una vez eliminado desaparecerá para siempre", "/dash/gestion/gateways");

  orderIndex: number = 0;
  pageIndex: number = 1;
  pageSize: number = 10;
  total: number = 0;

  userId: number;
  role: string = "";

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _service: ManagementGatewaysService,
    private _router: Router,
    private _popupMessageService: PopupMessageService
  ) { }

  ngOnInit(): void {
    this._titleUpdaterService.changeTitle("Gateways");

    // Setting the user's role
    let session = new UserSession();
    this.userId = session.getUserId();
    this.role = session.getRole();

    this.generateListElements()
  }

  generateListElements() {
    this._service.getGatewaysPagination(this.userId, this.pageSize, this.pageIndex, this.role).subscribe( (res: any) => {
      console.log(res);
      
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
          lf3.setName("ID Ayuntamiento");
          lf3.setValue(device.councilId);

          let lf4 = new ListField();
          lf4.setName("Coordenada X");
          lf4.setValue(device.coords[0]);

          let lf5 = new ListField();
          lf5.setName("Coordenada Y");
          lf5.setValue(device.coords[1]);

          let lf6 = new ListField();
          lf6.setName("Estado");
          if(device.status == 1) {
            lf6.setValue("Encendido");
          } else {
            lf6.setValue("Apagado");
          }

          let le = new ListElement([lf1, lf2, lf3, lf4, lf5, lf6])
          list.push(le);
          
          // Setting the action buttons for each table row
          this.actions.push(new ListActions(["Editar", "Eliminar"], device.id, ["/dash/gestion/gateways/" + device.id, device.id]))
        });
      } else {
        this._popupMessageService.sendMessage(["Error!", "Hay algún problema...", false])
      }

      this.listElements = list;
      this._cdr.detectChanges()
    })
  }
}
