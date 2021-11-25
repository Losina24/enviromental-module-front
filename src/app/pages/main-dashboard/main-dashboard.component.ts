/**
 * Name: login.component.ts
 * Date: 24 - 11 - 2021
 * Author: Alejandro Losa García
 * Description: Logic for main dashboard page
 */

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import DashboardElement from 'src/app/shared/models/DashboardElement';
import SimpleDashboardElement from 'src/app/shared/models/SimpleDashboardElement';

@Component({
	selector: 'app-main-dashboard',
	templateUrl: './main-dashboard.component.html',
	styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent implements OnInit {

	dashboardElements: SimpleDashboardElement[] = new Array<SimpleDashboardElement>();

	constructor(
		private _cdr: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		this.generateDashboardComponents();
	}

	generateDashboardComponents() {
		var devicesElement = new SimpleDashboardElement();
		devicesElement.setTitle('Dispositivos')
		devicesElement.setContent(3)
		devicesElement.setLink('/dash/gestion/dispositivos')
		devicesElement.setIcon('bi-phone-vibrate-fill')
		this.dashboardElements.push(devicesElement)

		var sensorsElement = new SimpleDashboardElement();
		sensorsElement.setTitle('Sensores')
		sensorsElement.setContent(12)
		sensorsElement.setLink('/dash/gestion/sensores')
		sensorsElement.setIcon('bi-usb-symbol')
		this.dashboardElements.push(sensorsElement)	
		
		var measuresElement = new SimpleDashboardElement();
		measuresElement.setTitle('Nuevas mediciones')
		measuresElement.setContent(374)
		measuresElement.setLink('/dash/ambiental/mediciones')
		measuresElement.setIcon('bi-speedometer2')
		this.dashboardElements.push(measuresElement)
		
		var alertsElement = new SimpleDashboardElement();
		alertsElement.setTitle('Nuevas alertas')
		alertsElement.setContent(0)
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
