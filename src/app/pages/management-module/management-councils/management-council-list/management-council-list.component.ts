import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import ListElement from 'src/app/shared/models/ListElement';
import ListField from 'src/app/shared/models/ListField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { ManagementCouncilsService } from '../management-councils.service';
import { Router } from '@angular/router';
import UserSession from 'src/app/shared/models/UserSession';
import ListActions from 'src/app/shared/models/ListActions';
import ConfirmationPopupMessage from 'src/app/shared/models/ConfirmationPopupMessage';
import { PopupMessageService } from 'src/app/shared/components/popup-message/popup-message.service';

@Component({
  selector: 'app-management-council-list',
  templateUrl: './management-council-list.component.html',
  styleUrls: ['./management-council-list.component.scss']
})
export class ManagementCouncilListComponent implements OnInit {
  
  // Atributes
  listElements: ListElement[] = [];
  actions: ListActions[] = [];
  confirmationPopup: ConfirmationPopupMessage = new ConfirmationPopupMessage("Eliminar ayuntamiento", "Una vez eliminado desaparecerá para siempre", "/dash/gestion/ayuntamientos");

  orderIndex: number = 0;
  pageIndex: number = 1;
  pageSize: number = 10;
  total: number = 0;

  userId: number;
  role: string = "";

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _router: Router,
    private _service: ManagementCouncilsService,
    private _popupMessageService: PopupMessageService
  ) { }

  ngOnInit(): void {
    this._titleUpdaterService.changeTitle("Ayuntamientos");

    // Setting the user's role
    let session = new UserSession();
    this.userId = session.getUserId();
    this.role = session.getRole();
    
    this.generateListElements();
  }

  generateListElements() {
    
    this._service.getCouncilPagination(this.userId, this.pageSize, this.pageIndex, this.role).subscribe( res => {
      console.log('ayuntamientos', res);
      let list: ListElement[] = [];
      
      if(res.http == 200) {
        let councils = res.result;
        
        councils.forEach((council:any) => {
          let lf1 = new ListField();
          lf1.setName("ID");
          lf1.setValue(council.id);

          let lf2 = new ListField();
          lf2.setName("Name");
          lf2.setValue(council.name);

          let lf3 = new ListField();
          lf3.setName("Dirección");
          lf3.setValue(council.address);

          let lf4 = new ListField();
          lf4.setName("Teléfono");
          lf4.setValue(council.phone);
          
          let lf5 = new ListField();
          lf5.setName("Email");
          lf5.setValue(council.email);

          let lf6 = new ListField();
          lf6.setName("Código postal");
          lf6.setValue(council.postalCode);

          let le = new ListElement([lf1, lf2, lf3, lf4, lf5, lf6])
          list.push(le);

          // Setting the action buttons for each table row
          this.actions.push(new ListActions(["Editar", "Eliminar"], council.id, ["/dash/gestion/ayuntamientos/" + council.id, council.id]))
        });
      } else {
        this._popupMessageService.sendMessage(["Error!", "Hay algún problema...", false])
      }

      this.listElements = list;
      this._cdr.detectChanges()
    })
  }
}
