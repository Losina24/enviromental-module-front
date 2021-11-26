import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import DashboardElement from '../../models/DashboardElement';
import SimpleDashboardElement from '../../models/SimpleDashboardElement';

@Component({
	selector: 'app-general-dashboard',
	templateUrl: './general-dashboard.component.html',
	styleUrls: ['./general-dashboard.component.scss'],
})
export class GeneralDashboardComponent implements OnInit {

	@Input() dashboardElements: SimpleDashboardElement[];	

	constructor(
		private _cdr: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		console.log('dashboard-elements', this.dashboardElements)
	}
}
