import { Component, OnInit, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import ListElement from 'src/app/shared/models/ListElement';
import ListField from 'src/app/shared/models/ListField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { ManagementUsersService } from '../management-users.service';
import { ActivatedRoute, Router } from '@angular/router';
import UserSession from 'src/app/shared/models/UserSession';
import ListActions from 'src/app/shared/models/ListActions';
import ConfirmationPopupMessage from 'src/app/shared/models/ConfirmationPopupMessage';
import { PopupMessageService } from 'src/app/shared/components/popup-message/popup-message.service';

@Component({
  selector: 'app-management-user-list',
  templateUrl: './management-user-list.component.html',
  styleUrls: ['./management-user-list.component.scss']
})

export class ManagementUserListComponent implements OnInit, OnChanges {

  // Atributes
  listElements: ListElement[] = [];
  actions: ListActions[] = [];
  confirmationPopup: ConfirmationPopupMessage = new ConfirmationPopupMessage("Eliminar usuario", "Una vez eliminado desaparecer√° para siempre", "/dash/gestion/usuarios");

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
    private _router: Router,
    private _service: ManagementUsersService,
    private _popupMessageService: PopupMessageService
  ) { 
  }

  ngOnInit(): void {
    this._titleUpdaterService.changeTitle("Usuarios");

    // Setting the user's role
    let session = new UserSession();
    this.userId = session.getUserId();
    this.role = session.getRole();
    this.councilId = session.getCouncilId();

    this.generateListElements();
  }

  ngOnChanges(changes: SimpleChanges): void {
      //this.generateListElements();
  }

  generateListElements() {
    this._service.getUserPagination(this.councilId, this.pageSize, this.pageIndex, this.role).subscribe( res => {
      let list: ListElement[] = [];
      
      if(res.http == 200) {
        let users = res.result;
        
        users.forEach((user:any) => {
          let lf1 = new ListField();
          lf1.setName("ID");
          lf1.setValue(user.id);

          let lf2 = new ListField();
          lf2.setName("Name");
          lf2.setValue(user.name);

          let lf3 = new ListField();
          lf3.setName("Direcci√≥n");
          lf3.setValue(user.address);

          let lf4 = new ListField();
          lf4.setName("Tel√©fono");
          lf4.setValue(user.phone);
          
          let lf5 = new ListField();
          lf5.setName("Email");
          lf5.setValue(user.email);

          let lf6 = new ListField();
          lf6.setName("C√≥digo postal");
          lf6.setValue(user.postalCode);

          let le = new ListElement([lf1, lf2, lf3, lf4, lf5, lf6])
          list.push(le);

          // Setting the action buttons for each table row
          this.actions.push(new ListActions(["Editar", "Eliminar"], user.id, ["/dash/gestion/usuarios/" + user.id, user.id]))
        });
      } else {
        this._popupMessageService.sendMessage(["Error!", "Hay alg√ļn problema...", false])
      }

      this.listElements = list;
      this._cdr.detectChanges()
    })
  }

  removeUser(id: number) {
    this._service.deleteUser(id).subscribe(res => {
      this.generateListElements()
      this._cdr.detectChanges()
    })
  }
}
