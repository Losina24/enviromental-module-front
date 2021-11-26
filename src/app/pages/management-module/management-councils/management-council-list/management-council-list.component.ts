import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import ListElement from 'src/app/shared/models/ListElement';
import ListField from 'src/app/shared/models/ListField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { ManagementCouncilsService } from '../management-councils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management-council-list',
  templateUrl: './management-council-list.component.html',
  styleUrls: ['./management-council-list.component.scss']
})
export class ManagementCouncilListComponent implements OnInit {
  
  listElements: ListElement[]
  formRecolector: Array<string> = new Array<string >();

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _router: Router,
    private _service: ManagementCouncilsService
  ) { }

  ngOnInit(): void {
    this._titleUpdaterService.changeTitle("Ayuntamientos");
    this.getUserInformation();
    this.generateListElements();
  }

  getUserInformation() {
    if(sessionStorage.getItem("userId") != null) {
      let userId = sessionStorage.getItem("userId");
      //@ts-ignore
      this.userId = parseInt(userId)
      //@ts-ignore
      this.role = sessionStorage.getItem("role");
    } else {
      this._router.navigateByUrl("/");
    }
  }

  generateListElements() {
    
    this._service.getAllCouncils().subscribe( res => {
      console.log('ayuntamientos', res);
      let list: ListElement[] = [];
      
      if(res.http == 200) {
        let councils = res.response;
        
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
        });
      } else {
        alert("No hay información en la base de datos")
      }

      this.listElements = list;
      this._cdr.detectChanges()
    })
  }
}
