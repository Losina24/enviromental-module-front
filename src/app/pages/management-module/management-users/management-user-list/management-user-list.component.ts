import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import ListElement from 'src/app/shared/models/ListElement';
import ListField from 'src/app/shared/models/ListField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';

@Component({
  selector: 'app-management-user-list',
  templateUrl: './management-user-list.component.html',
  styleUrls: ['./management-user-list.component.scss']
})
export class ManagementUserListComponent implements OnInit {

  listElements: ListElement[]

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this._titleUpdaterService.changeTitle("Usuarios");
    this.generateListElements()
  }

  generateListElements() {
    let lf1 = new ListField();
    lf1.setName("Nombre");
    lf1.setValue("Alejandro");

    let lf2 = new ListField();
    lf2.setName("Apellidos");
    lf2.setValue("Losa García");

    let lf3 = new ListField();
    lf3.setName("Puesto");
    lf3.setValue("Desarrollador de software");

    let lf4 = new ListField();
    lf4.setName("Edad");
    lf4.setValue("21 años");

    let lf5 = new ListField();
    lf5.setName("Lugar");
    lf5.setValue("Valencia");

    let le1 = new ListElement([lf1, lf2, lf3, lf4, lf5])
    let le2 = new ListElement([lf1, lf2, lf3, lf4, lf5])
    let le3 = new ListElement([lf1, lf2, lf3, lf4, lf5])
    this.listElements = [le1, le2, le3]

    this._cdr.detectChanges()
  }

}
