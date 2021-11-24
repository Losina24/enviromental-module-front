/**
 * Name: login.component.ts
 * Date: 24 - 11 - 2021
 * Author: Alejandro Losa García
 * Description: Logic for main dashboard page
 */

import { Component, OnInit } from '@angular/core';
import DashboardElement from 'src/app/shared/models/DashboardElement';
import SimpleDashboardElement from 'src/app/shared/models/SimpleDashboardElement';

@Component({
	selector: 'app-main-dashboard',
	templateUrl: './main-dashboard.component.html',
	styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent implements OnInit {
	dashboardElement1: DashboardElement;
	dashboardElement2: DashboardElement;
	dashboardElement3: DashboardElement;

	constructor() {}

	ngOnInit(): void {
		var dashEl = new SimpleDashboardElement();
		dashEl.setTitle('Login')
		dashEl.setContent(51)
		dashEl.setLink('/login')
		this.dashboardElement1 = dashEl

		var dashEl2 = new SimpleDashboardElement();
		dashEl2.setTitle('Ambiental')
		dashEl2.setContent(38)
		dashEl2.setLink('/dash/enviromental')
		this.dashboardElement2 = dashEl2

		var dashEl3 = new SimpleDashboardElement();
		dashEl3.setTitle('Gestión')
		dashEl3.setContent(43)
		dashEl3.setLink('/dash/gestion')
		this.dashboardElement3 = dashEl3
	}
}
