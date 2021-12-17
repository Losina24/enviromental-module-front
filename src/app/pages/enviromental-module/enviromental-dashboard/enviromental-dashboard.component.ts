import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import DashboardElement from 'src/app/shared/models/DashboardElement';
import SimpleDashboardElement from 'src/app/shared/models/SimpleDashboardElement';
import { MainDashboardServiceService } from '../../main-dashboard/main-dashboard-service.service';
import { Router } from '@angular/router';
import UserSession from 'src/app/shared/models/UserSession';

@Component({
  selector: 'app-enviromental-dashboard',
  templateUrl: './enviromental-dashboard.component.html',
  styleUrls: ['./enviromental-dashboard.component.scss']
})

export class EnviromentalDashboardComponent implements OnInit {

	dashboardElements: SimpleDashboardElement[] = new Array<SimpleDashboardElement>();
	measures: number = 0;
	devices: number = 0;
	unpairedDevices: number = 0;
	alerts: number = 0;
	sensors: number = 0;

	userId: number;
	userRole: string;
	councilId: number;
	
    constructor(
		private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
		private _service: MainDashboardServiceService,
		private _router: Router
	) { }

	ngOnInit(): void {
		// Setting the title
		this._titleUpdaterService.changeTitle("Dashboard ambiental");

		// User session
		const userSession: UserSession = new UserSession();
		this.userId = userSession.getUserId();
		this.userRole = userSession.getRole();
		this.councilId = userSession.getCouncilId();

		// Getting the data from the API
		this.getDashboardElements();

		// Generating the html components
		this.generateDashboardComponents();
	}

	getDashboardElements() {
		
		let id;

		if(this.userRole == "admin") {
			id = this.councilId;
		} else {
			id = this.userId;
		}


		this._service.getMeasures(id, this.userRole).subscribe((res) => {
			this.measures = res.result;
			this.generateDashboardComponents();
			this._cdr.detectChanges()
		})

		this._service.getDevices(id, this.userRole).subscribe((res) => {
			this.devices = res.result;
			this.generateDashboardComponents();
			this._cdr.detectChanges()
		})

		this._service.getAlerts(id, this.userRole).subscribe((res) => {
			this.alerts = res.result;
			this.generateDashboardComponents();
			this._cdr.detectChanges()
		})

		this._service.getSensors(id, this.userRole).subscribe((res) => {
			this.sensors = res.result;
			this.generateDashboardComponents();
			this._cdr.detectChanges()
		})
	}

	generateDashboardComponents() {
		this.dashboardElements = []
    	let rootUrl: string = "/dash/ambiental/";

		var devicesElement = new SimpleDashboardElement();
		devicesElement.setTitle('Dispositivos')
		devicesElement.setContent(this.devices)
		devicesElement.setLink(rootUrl + 'dispositivos')
		devicesElement.setIcon('bi-phone-vibrate-fill')
		this.dashboardElements.push(devicesElement)

		var devicesUnlinkedElement = new SimpleDashboardElement();
		devicesUnlinkedElement.setTitle('Disp. detectados')
		devicesUnlinkedElement.setContent(this.devices)
		devicesUnlinkedElement.setLink(rootUrl + 'dispositivosDetectados')
		devicesUnlinkedElement.setIcon('bi-phone-vibrate-fill')
		this.dashboardElements.push(devicesUnlinkedElement)

		var sensorsElement = new SimpleDashboardElement();
		sensorsElement.setTitle('Sensores')
		sensorsElement.setContent(this.sensors)
		sensorsElement.setLink(rootUrl + 'sensores')
		sensorsElement.setIcon('bi-usb-symbol')
		this.dashboardElements.push(sensorsElement)	
		
		var measuresElement = new SimpleDashboardElement();
		measuresElement.setTitle('Mediciones')
		measuresElement.setContent(this.measures)
		measuresElement.setLink(rootUrl + 'mediciones')
		measuresElement.setIcon('bi-speedometer2')
		this.dashboardElements.push(measuresElement)
		
		var mapElement = new SimpleDashboardElement();
		mapElement.setTitle('Mapa')
		mapElement.setContent("Ver")
		mapElement.setLink(rootUrl + '')
		mapElement.setIcon('bi-geo-fill')
		this.dashboardElements.push(mapElement)

    	var notificationsElement = new SimpleDashboardElement();
		notificationsElement.setTitle('Alertas')
		notificationsElement.setContent(this.alerts)
		notificationsElement.setLink(rootUrl + 'alertas')
		notificationsElement.setIcon('bi-exclamation-triangle-fill')
		this.dashboardElements.push(notificationsElement)

		this._cdr.detectChanges();
	}

}
