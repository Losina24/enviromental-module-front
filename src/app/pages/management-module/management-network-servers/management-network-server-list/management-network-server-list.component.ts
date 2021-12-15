import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import ListElement from 'src/app/shared/models/ListElement';
import ListField from 'src/app/shared/models/ListField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { ManagementNetworkServerService } from '../management-network-servers.service';
import { Router } from '@angular/router';
import UserSession from 'src/app/shared/models/UserSession';
import ListActions from 'src/app/shared/models/ListActions';
import ConfirmationPopupMessage from 'src/app/shared/models/ConfirmationPopupMessage';
import { PopupMessageService } from 'src/app/shared/components/popup-message/popup-message.service';

@Component({
  selector: 'app-management-network-server-list',
  templateUrl: './management-network-server-list.component.html',
  styleUrls: ['./management-network-server-list.component.scss']
})
export class ManagementNetworkServerListComponent implements OnInit {

  // Atributes
  listElements: ListElement[] = [];
  actions: ListActions[] = [];
  confirmationPopup: ConfirmationPopupMessage = new ConfirmationPopupMessage("Eliminar network server", "Una vez eliminado desaparecerá para siempre", "/dash/gestion/network_servers");

  orderIndex: number = 0;
  pageIndex: number = 1;
  pageSize: number = 10;
  total: number = 0;

  userId: number;
  role: string = "";
  councilId: number;

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _service: ManagementNetworkServerService,
    private _router: Router,
    private _popupMessageService: PopupMessageService
  ) { }

  ngOnInit(): void {
    this._titleUpdaterService.changeTitle("Network servers");

    // Setting the user's role
    let session = new UserSession();
    this.userId = session.getUserId();
    this.role = session.getRole();
    this.councilId = session.getCouncilId();

    this.generateListElements()
  }

  generateListElements() {
    this._service.getNetworkServerPagination(this.councilId, this.pageSize, this.pageIndex, this.role).subscribe( (res: any) => {
      console.log(res);
      
      let list: ListElement[] = [];
      
      if(res.http == 200) {
        let devices = res.result;

        devices.forEach((device:any) => {
          let lf1 = new ListField();
          lf1.setName("ID");
          lf1.setValue(device.id);
          
          let lf2 = new ListField();
          lf2.setName("Nombre");
          lf2.setValue(device.name);

          let lf3 = new ListField();
          lf3.setName("Mac");
          lf3.setValue(device.identifier);

          let lf4 = new ListField();
          lf4.setName("Proveedor");
          lf4.setValue(device.provider);

          let lf5 = new ListField();
          lf5.setName("Estado");
          if(device.status == 1) {
            lf5.setValue("Encendido");
          } else {
            lf5.setValue("Apagado");
          }

          let lf7 = new ListField();
          lf7.setName("Tipo");
          lf7.setValue(device.type);

          let lf6 = new ListField();
          lf6.setName("Centralizado");
          if(device.centralized == 1) {
            lf6.setValue("Sí");
          } else {
            lf6.setValue("No");
          }

          let le = new ListElement([lf1, lf2, lf3, lf7, lf5, lf6])
          list.push(le);

          // Setting the action buttons for each table row
          this.actions.push(new ListActions(["Editar", "Eliminar"], device.id, ["/dash/gestion/network_servers/" + device.id, device.id]))
        });
      } else {
        this._popupMessageService.sendMessage(["Error!", "Hay algún problema...", false])
      }

      this.listElements = list;
      this._cdr.detectChanges()
    })
  }
}
