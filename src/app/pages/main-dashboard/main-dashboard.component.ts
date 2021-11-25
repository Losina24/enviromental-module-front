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

	dashboardElements: DashboardElement[] = new Array<DashboardElement>();

	constructor(
		private _cdr: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		var dashEl = new SimpleDashboardElement();
		dashEl.setTitle('Login')
		dashEl.setContent(51)
		dashEl.setLink('/login')
		this.dashboardElements.push(dashEl)

		var dashEl2 = new SimpleDashboardElement();
		dashEl2.setTitle('Ambiental')
		dashEl2.setContent(38)
		dashEl2.setLink('/dash/enviromental')
		this.dashboardElements.push(dashEl2)

		var dashEl3 = new SimpleDashboardElement();
		dashEl3.setTitle('Gestión')
		dashEl3.setContent(43)
		dashEl3.setLink('/dash/gestion')
		this.dashboardElements.push(dashEl3)	
		this.dashboardElements.push(dashEl3)	
		this.dashboardElements.push(dashEl3)	
		this.dashboardElements.push(dashEl3)		

		this._cdr.detectChanges();
	}
}
