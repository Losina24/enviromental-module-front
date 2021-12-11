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
		this.userRole = userSession.getRole();

		// Calling the API
		//this.getDashboardInformation();

		// Creating the HTML components in the DOM
		this.generateDashboardComponents();
	}

	// Method used to get the information from the API
	getDashboardInformation() {
		this._service.getMeasures(1, this.userRole).subscribe((res) => {
			this.measures = res.response.length;
			this.generateDashboardComponents();
			this._cdr.detectChanges()
		})

		this._service.getDevices(this.userId, this.userRole).subscribe((res) => {
			this.devices = res.result.length;
			this.generateDashboardComponents();
			this._cdr.detectChanges()
		})

		this._service.getAlerts(this.userId, this.userRole).subscribe((res) => {
			this.alerts = res.response.length;
			this.generateDashboardComponents();
			this._cdr.detectChanges()
		})

		this._service.getSensors(this.userId, this.userRole).subscribe((res) => {
			this.sensors = res.response.length;
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
		devicesElement.setLink('/dash/gestion/dispositivos')
		devicesElement.setIcon('bi-phone-vibrate-fill')
		this.dashboardElements.push(devicesElement)

		var sensorsElement = new SimpleDashboardElement();
		sensorsElement.setTitle('Sensores')
		sensorsElement.setContent(this.sensors)
		sensorsElement.setLink('/dash/gestion/sensores')
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

		var alertsElement = new SimpleDashboardElement();
		alertsElement.setTitle('Mapa')
		alertsElement.setContent('Ver')
		alertsElement.setLink('/dash/ambiental/alertas')
		alertsElement.setIcon('bi-geo-fill')
		this.dashboardElements.push(alertsElement)

		this._cdr.detectChanges();
	}
}
