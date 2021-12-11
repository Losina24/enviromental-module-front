import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import ListElement from 'src/app/shared/models/ListElement';
import ListField from 'src/app/shared/models/ListField';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { EnviromentalAlertsService } from '../enviromental-alerts.service';
import { Router } from '@angular/router';
import UserSession from 'src/app/shared/models/UserSession'; 

@Component({
  selector: 'app-enviromental-alert-list',
  templateUrl: './enviromental-alert-list.component.html',
  styleUrls: ['./enviromental-alert-list.component.scss']
})

export class EnviromentalAlertListComponent implements OnInit {

  listElements: ListElement[];
  userId: number;
  role: string;

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
    private _service: EnviromentalAlertsService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    // Setting the title
    this._titleUpdaterService.changeTitle("Alertas ambientales");
    
    // Generating the elements
    this.generateListElements()
  }


  generateListElements() {
    
    this._service.getEnviromentalAlerts(this.userId).subscribe( res => {
      console.log('alertas', res);
      let list: ListElement[] = [];
      
      if(res.http == 200) {
        let alerts = res.response;
        
        alerts.forEach((alert:any) => {
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
        });
      } else {
        alert("No hay información en la base de datos")
      }

      this.listElements = list;
      this._cdr.detectChanges()
    })
  }
}
