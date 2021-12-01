import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import ListElement from 'src/app/shared/models/ListElement';
import ListField from 'src/app/shared/models/ListField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { EnviromentalSensorsService } from '../enviromental-sensors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enviromental-sensor-list',
  templateUrl: './enviromental-sensor-list.component.html',
  styleUrls: ['./enviromental-sensor-list.component.scss']
})

export class EnviromentalSensorListComponent implements OnInit {

  listElements: ListElement[];
  orderIndex: number = 0;
  pageIndex: number = 1;
  pageSize: number = 6;
  total: number = 0;
  userId: number;
  role: string;

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _service: EnviromentalSensorsService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._titleUpdaterService.changeTitle("Sensores ambientales");
    this.generateListElements()
  }

  generateListElements() {
    this._service.getEnviromentalSensorsPagination(this.userId, this.pageSize, this.pageIndex).subscribe( res => {
      
      let list: ListElement[] = [];
      
      if(res.http == 200) {
        let sensors = res.response;
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
        });
      } else {
        alert("No hay información en la base de datos")
      }

      this.listElements = list;
      this._cdr.detectChanges()
    })
  }
}
