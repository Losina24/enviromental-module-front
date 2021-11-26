import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import ListElement from 'src/app/shared/models/ListElement';
import ListField from 'src/app/shared/models/ListField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { ManagementNetworkServerService } from '../management-network-servers.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-management-network-server-list',
  templateUrl: './management-network-server-list.component.html',
  styleUrls: ['./management-network-server-list.component.scss']
})
export class ManagementNetworkServerListComponent implements OnInit {

  listElements: ListElement[]

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _service: ManagementNetworkServerService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._titleUpdaterService.changeTitle("Network servers");
    this.getUserInformation()
    this.generateListElements()
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
    this._service.getNetworkServers().subscribe( (res: any) => {
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
        });
      } else {
        alert("No hay información en la base de datos")
      }

      this.listElements = list;
      this._cdr.detectChanges()
    })
  }

}
