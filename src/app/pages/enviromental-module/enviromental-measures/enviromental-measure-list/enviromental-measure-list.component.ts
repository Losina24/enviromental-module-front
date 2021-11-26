import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import ListElement from 'src/app/shared/models/ListElement';
import ListField from 'src/app/shared/models/ListField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
/* import { EnviromentalDevicesService } from '../enviromental-measure.service'; */
import { EnviromentalMeasuresService } from '../enviromental-measures.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enviromental-measure-list',
  templateUrl: './enviromental-measure-list.component.html',
  styleUrls: ['./enviromental-measure-list.component.scss']
})

export class EnviromentalMeasureListComponent implements OnInit {
  
  listElements: ListElement[] = [];
  orderIndex: number = 0;
  pageIndex: number = 1;
  pageSize: number = 10;
  total: number = 0;
  userId: number;
  role: string;

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _service: EnviromentalMeasuresService,
    private _router: Router
  ) { }


  ngOnInit(): void {
    this._titleUpdaterService.changeTitle("Mediciones ambientales");
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
    this._service.getMeasures(this.userId + "").subscribe( res => {
      
      let list: ListElement[] = [];
      console.log('pepinillo', res);
        
      if(res.http == 200) {
        let devices = res.response;
        let devices2 = devices.slice(devices.length - 8, devices.length - 1)
        devices2.forEach((device:any) => {

          let lf1 = new ListField();
          lf1.setName("Sensor ID");
          lf1.setValue(device.sensorId);
          
          let lf2 = new ListField();
          lf2.setName("Valor");
          lf2.setValue(device.value);

          let lf3 = new ListField();
          lf3.setName("Unidad");
          lf3.setValue(device.unit);

          let lf4 = new ListField();
          lf4.setName("Tipo");
          lf4.setValue(device.type);

          let lf6 = new ListField();
          lf6.setName("Peligro");
          if(device.value > 200) {
            lf6.setValue("Si");
          } else {
            lf6.setValue("No");
          }

          let le = new ListElement([lf1, lf2, lf3, lf4, lf6])
          list.push(le);
        });
      } else {
        alert("No hay información en la base de datos")
      }

      this.listElements = list;
      this._cdr.detectChanges()

      setTimeout(() => {
        this._service.generateAlert("Alerta", "Hay un dato peligroso", "5", "red").subscribe((res) => {
          console.log('guay');
          
        })
        this.generateListElements()
      }, 4000);
    })
  }

}
