/**
 * Name: login.component.ts
 * Date: 24 - 11 - 2021
 * Author: Alejandro Losa García
 * Description: Logic for main dashboard page
 */

import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import DashboardElement from 'src/app/shared/models/DashboardElement';
import SimpleDashboardElement from 'src/app/shared/models/SimpleDashboardElement';
import { MainDashboardServiceService } from './main-dashboard-service.service';
import { Router } from '@angular/router';
import UserSession from 'src/app/shared/models/UserSession';

@Component({
	selector: 'app-main-dashboard',
	templateUrl: './main-dashboard.component.html',
	styleUrls: ['./main-dashboard.component.scss'],
})

export class MainDashboardComponent implements OnInit {

	// Atributes
	dashboardElements: SimpleDashboardElement[] = new Array<SimpleDashboardElement>();
	measures: number = 0;
	devices: number = 0;
	alerts: number = 0;
	sensors: number = 0;

	councilId: number;
	userId: number;
	userRole: string;

	// Constructor
	constructor(
		private _cdr: ChangeDetectorRef,
		private _service: MainDashboardServiceService,
		private _router: Router
	) {}

	// On init
	ngOnInit(): void {
		// User session
		const userSession: UserSession = new UserSession();
		this.userId = userSession.getUserId();
		this.councilId = userSession.getCouncilId();
		this.userRole = userSession.getRole();

		// Calling the API
		this.getDashboardInformation();

		// Creating the HTML components in the DOM
		this.generateDashboardComponents();
	}

	// Method used to get the information from the API
	getDashboardInformation() {
		
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

	// Method that creates the HTML components
	generateDashboardComponents() {
		this.dashboardElements = []

		var devicesElement = new SimpleDashboardElement();
		devicesElement.setTitle('Dispositivos')
		devicesElement.setContent(this.devices)
		devicesElement.setLink('/dash/ambiental/dispositivos')
		devicesElement.setIcon('bi-phone-vibrate-fill')
		this.dashboardElements.push(devicesElement)

		var sensorsElement = new SimpleDashboardElement();
		sensorsElement.setTitle('Sensores')
		sensorsElement.setContent(this.sensors)
		sensorsElement.setLink('/dash/ambiental/sensores')
		sensorsElement.setIcon('bi-usb-symbol')
		this.dashboardElements.push(sensorsElement)	
		
		var measuresElement = new SimpleDashboardElement();
		measuresElement.setTitle('Nuevas mediciones')
		measuresElement.setContent(this.measures)
		measuresElement.setLink('/dash/ambiental/mediciones')
		measuresElement.setIcon('bi-speedometer2')
		this.dashboardElements.push(measuresElement)
		
		var alertsElement = new SimpleDashboardElement();
		alertsElement.setTitle('Nuevas alertas')
		alertsElement.setContent(this.alerts)
		alertsElement.setLink('/dash/ambiental/alertas')
		alertsElement.setIcon('bi-exclamation-triangle-fill')
		this.dashboardElements.push(alertsElement)

		var mapElement = new SimpleDashboardElement();
		mapElement.setTitle('Mapa')
		mapElement.setContent('Ver')
		mapElement.setLink('/dash/ambiental/mapa')
		mapElement.setIcon('bi-geo-fill')
		this.dashboardElements.push(mapElement)

		this._cdr.detectChanges();
	}
}
