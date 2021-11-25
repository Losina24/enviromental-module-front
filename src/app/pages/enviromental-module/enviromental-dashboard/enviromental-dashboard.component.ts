import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import DashboardElement from 'src/app/shared/models/DashboardElement';
import SimpleDashboardElement from 'src/app/shared/models/SimpleDashboardElement';

@Component({
  selector: 'app-enviromental-dashboard',
  templateUrl: './enviromental-dashboard.component.html',
  styleUrls: ['./enviromental-dashboard.component.scss']
})
export class EnviromentalDashboardComponent implements OnInit {

  dashboardElements: SimpleDashboardElement[] = new Array<SimpleDashboardElement>();

  constructor(
		private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef
	) { }

	ngOnInit(): void {
		this._titleUpdaterService.changeTitle("Dashboard ambiental");
		this.generateDashboardComponents();
	}

	generateDashboardComponents() {
    let rootUrl: string = "/dash/ambiental/";

		var devicesElement = new SimpleDashboardElement();
		devicesElement.setTitle('Dispositivos')
		devicesElement.setContent(286)
		devicesElement.setLink(rootUrl + 'dispositivos')
		devicesElement.setIcon('bi-phone-vibrate-fill')
		this.dashboardElements.push(devicesElement)

		var sensorsElement = new SimpleDashboardElement();
		sensorsElement.setTitle('Sensores')
		sensorsElement.setContent(450)
		sensorsElement.setLink(rootUrl + 'sensores')
		sensorsElement.setIcon('bi-usb-symbol')
		this.dashboardElements.push(sensorsElement)	
		
		var measuresElement = new SimpleDashboardElement();
		measuresElement.setTitle('Mediciones')
		measuresElement.setContent("35.2k")
		measuresElement.setLink(rootUrl + 'mediciones')
		measuresElement.setIcon('bi-speedometer2')
		this.dashboardElements.push(measuresElement)
		
		var mapElement = new SimpleDashboardElement();
		mapElement.setTitle('Mapa')
		mapElement.setContent("Ver")
		mapElement.setLink(rootUrl + 'mapa')
		mapElement.setIcon('bi-geo-fill')
		this.dashboardElements.push(mapElement)

    var notificationsElement = new SimpleDashboardElement();
		notificationsElement.setTitle('Alertas')
		notificationsElement.setContent(2)
		notificationsElement.setLink(rootUrl + 'alertas')
		notificationsElement.setIcon('bi-exclamation-triangle-fill')
		this.dashboardElements.push(notificationsElement)

		this._cdr.detectChanges();
	}

}
