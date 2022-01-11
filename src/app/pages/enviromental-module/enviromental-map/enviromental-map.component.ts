import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  mapCode: boolean = false;
  code: string;

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
    this.councilId = session.getCouncilId();
    this.role = session.getRole();

    this.generateMap()
  }

  generateMap() {
    if (this.role == "admin") {
      this._service.getMap(this.userId, this.councilId, this.role).subscribe((res: any) => {
        this.mapCode = true;
        this._cdr.detectChanges();
      })
    } else {
      this._service.getMap(this.userId, this.councilId, this.role).subscribe((res: any) => {
        console.log('123', res.result);
        this.code = res.result;
        this.mapCode = true;
        this._cdr.detectChanges();
      })
    }
  }

}
