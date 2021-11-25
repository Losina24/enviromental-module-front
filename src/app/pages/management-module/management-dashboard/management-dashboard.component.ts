import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import DashboardElement from 'src/app/shared/models/DashboardElement';
import SimpleDashboardElement from 'src/app/shared/models/SimpleDashboardElement';


@Component({
	selector: 'app-management-dashboard',
	templateUrl: './management-dashboard.component.html',
	styleUrls: ['./management-dashboard.component.scss']
})

export class ManagementDashboardComponent implements OnInit {

	dashboardElements: SimpleDashboardElement[] = new Array<SimpleDashboardElement>();

	constructor(
		private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef
	) { }

	ngOnInit(): void {
		this._titleUpdaterService.changeTitle("Dashboard de gestión");
		this.generateDashboardComponents();
	}

	generateDashboardComponents() {
		var councilElement = new SimpleDashboardElement();
		councilElement.setTitle('Ayuntamientos')
		councilElement.setContent(3)
		councilElement.setLink('/dash/gestion/ayuntamientos')
		councilElement.setIcon('bi-house-door-fill')
		this.dashboardElements.push(councilElement)

		var userElement = new SimpleDashboardElement();
		userElement.setTitle('Usuarios')
		userElement.setContent(21)
		userElement.setLink('/dash/gestion/usuarios')
		userElement.setIcon('bi-people-fill')
		this.dashboardElements.push(userElement)	
		
		var gatewaysElement = new SimpleDashboardElement();
		gatewaysElement.setTitle('Gateways')
		gatewaysElement.setContent(42)
		gatewaysElement.setLink('/dash/gestion/gateways')
		gatewaysElement.setIcon('bi-router-fill')
		this.dashboardElements.push(gatewaysElement)
		
		var networkServersElement = new SimpleDashboardElement();
		networkServersElement.setTitle('Network Servers')
		networkServersElement.setContent(42)
		networkServersElement.setLink('/dash/gestion/network_servers')
		networkServersElement.setIcon('bi-server')
		this.dashboardElements.push(networkServersElement)

		this._cdr.detectChanges();
	}
}
