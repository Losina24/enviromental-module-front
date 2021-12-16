import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import ListElement from 'src/app/shared/models/ListElement';
import ListField from 'src/app/shared/models/ListField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { EnviromentalAlertsService } from '../enviromental-alerts.service';
import { Router } from '@angular/router';
import UserSession from 'src/app/shared/models/UserSession'; 
import { PopupMessageService } from 'src/app/shared/components/popup-message/popup-message.service';
import ListActions from 'src/app/shared/models/ListActions';
import ConfirmationPopupMessage from 'src/app/shared/models/ConfirmationPopupMessage';

@Component({
  selector: 'app-enviromental-alert-list',
  templateUrl: './enviromental-alert-list.component.html',
  styleUrls: ['./enviromental-alert-list.component.scss']
})

export class EnviromentalAlertListComponent implements OnInit {

  listElements: ListElement[];
  actions: ListActions[] = [];
  confirmationPopup: ConfirmationPopupMessage = new ConfirmationPopupMessage("Eliminar notificación", "Una vez eliminado desaparecerá para siempre", "/dash/ambiental/alertas");

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
    private _service: EnviromentalAlertsService,
    private _popupMessageService: PopupMessageService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    // Setting the title
    this._titleUpdaterService.changeTitle("Alertas ambientales");

    // Setting the user's role
    let session = new UserSession();
    this.userId = session.getUserId();
    this.role = session.getRole();
    
    // Generating the elements
    this.generateListElements()
  }


  generateListElements() {
    
    this._service.getEnviromentalAlertPagination(this.userId, this.pageSize, this.pageIndex, this.role).subscribe( res => {

      let list: ListElement[] = [];
      
      if(res.http == 200) {
        
        let alerts = res.result;
        
        alerts.forEach((alert:any) => {
          console.log(alert);
          let lf1 = new ListField();
          lf1.setName("ID");
          lf1.setValue(alert.id);
          
          let lf2 = new ListField();
          lf2.setName("Asunto");
          lf2.setValue(alert.subject);

          let lf3 = new ListField();
          lf3.setName("Cuerpo");
          lf3.setValue(alert.body);

          let lf4 = new ListField();
          lf4.setName("ID del sensor");
          lf4.setValue(alert.sensorId);

          let lf5 = new ListField();
          lf5.setName("Peligro");
          if(alert.magnitude == 'red') {
            lf5.setValue("Alto");
          } else if (alert.magnitude == 'green') {
            lf5.setValue("Bajo");
          } else {
            lf5.setValue("Medio");
          }

          let le = new ListElement([lf1, lf2, lf3, lf4, lf5])
          list.push(le);

          // Setting the action buttons for each table row
          this.actions.push(new ListActions(["Eliminar"], alert.id, [alert.id]))
        });
      } else {
        this._popupMessageService.sendMessage(["Error!", "Hay algún problema...", false])
      }

      this.listElements = list;
      this._cdr.detectChanges()
    })
  }

  removeAlert(id: number){
    this._service.deleteAlert(id).subscribe((res: any) => {
      this.generateListElements()
      this._cdr.detectChanges()
    })
  }
}
