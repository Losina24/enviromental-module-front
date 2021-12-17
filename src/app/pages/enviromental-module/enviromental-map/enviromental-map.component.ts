import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { spawn } from 'child_process';
import UserSession from 'src/app/shared/models/UserSession';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import { MainDashboardServiceService } from '../../main-dashboard/main-dashboard-service.service';


@Component({
  selector: 'app-enviromental-map',
  templateUrl: './enviromental-map.component.html',
  styleUrls: ['./enviromental-map.component.scss']
})
export class EnviromentalMapComponent implements OnInit {

  userId: number;
  role: string = "";
  councilId: number;
  mapCode: string = "<html><body>Cargando...</body></html>";

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
    private _service: MainDashboardServiceService,
    private _cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // Setting the title
    this._titleUpdaterService.changeTitle("Mapa ambiental");

    // Setting the user's role
    let session = new UserSession();
    this.userId = session.getUserId();
    this.role = session.getRole();

    this.generateMap()
  }

  generateMap() {
    if (this.role == "admin") {
      this._service.getMap(this.councilId, this.role).subscribe((res: any) => {
        this.mapCode = res.result;
        this._cdr.detectChanges();
      })
    } else {
      this._service.getMap(this.userId, this.role).subscribe((res: any) => {
        this.mapCode = res.result;
        this._cdr.detectChanges();
      })
    }
    /* let pythonRun = spawn("python3", ['../../../assets/map/mapa.py'])
    
    pythonRun.stdout.on('data', function (data: any) {
      console.log('Pipe data from python script ...');
      console.log(data.toString())
    }); */


  }

}
