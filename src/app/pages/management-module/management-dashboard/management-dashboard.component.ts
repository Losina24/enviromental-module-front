import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import DashboardElement from 'src/app/shared/models/DashboardElement';
import SimpleDashboardElement from 'src/app/shared/models/SimpleDashboardElement';
import { MainDashboardServiceService } from '../../main-dashboard/main-dashboard-service.service';
import { Router } from '@angular/router';
import UserSession from 'src/app/shared/models/UserSession';

@Component({
	selector: 'app-management-dashboard',
	templateUrl: './management-dashboard.component.html',
	styleUrls: ['./management-dashboard.component.scss']
})

export class ManagementDashboardComponent implements OnInit {

	dashboardElements: SimpleDashboardElement[] = new Array<SimpleDashboardElement>();
	councils: number = 0;
	gateways: number = 0;
	ns: number = 0;
	users: number = 0;
	userId: number;

	constructor(
		private _titleUpdaterService: TitleUpdaterService,
		private _cdr: ChangeDetectorRef,
		private _service: MainDashboardServiceService,
		private _router: Router
	) { }

	ngOnInit(): void {
		// Setting the title
		this._titleUpdaterService.changeTitle("Dashboard de gestión");

		// Checking if users are connected
		let userSession = new UserSession();
		if(userSession.checkSession()) {
			this.userId = userSession.getUserId();
		} else {
			this._router.navigateByUrl("/");
		}

		// Getting the information from the API
		this.getDashboardInformation()

		// Creating the HTML components
		this.generateDashboardComponents();
	}

	// Method that makes all the API calls required to generate the dashboard information
	getDashboardInformation() {
		this._service.getNS().subscribe((res) => {
			console.log(res)
			this.ns = res.response.length;
			this.generateDashboardComponents();
			this._cdr.detectChanges()
		})

		this._service.getGateways().subscribe((res) => {
			console.log(res)
			this.gateways = res.response.length;
			this.generateDashboardComponents();
			this._cdr.detectChanges()
		})

		this._service.getCouncils().subscribe((res) => {
			console.log(res)
			this.councils = res.response.length;
			this.generateDashboardComponents();
			this._cdr.detectChanges()
		})

		this._service.getUsers().subscribe((res) => {
			console.log(res)
			this.users = res.response.length;
			this.generateDashboardComponents();
			this._cdr.detectChanges()
		})

	}

	// Method that creates the HTML components
	generateDashboardComponents() {
		this.dashboardElements = []

		var councilElement = new SimpleDashboardElement();
		councilElement.setTitle('Ayuntamientos')
		councilElement.setContent(this.councils)
		councilElement.setLink('/dash/gestion/ayuntamientos')
		councilElement.setIcon('bi-house-door-fill')
		this.dashboardElements.push(councilElement)

		var userElement = new SimpleDashboardElement();
		userElement.setTitle('Usuarios')
		userElement.setContent(this.users)
		userElement.setLink('/dash/gestion/usuarios')
		userElement.setIcon('bi-people-fill')
		this.dashboardElements.push(userElement)	
		
		var gatewaysElement = new SimpleDashboardElement();
		gatewaysElement.setTitle('Gateways')
		gatewaysElement.setContent(this.gateways)
		gatewaysElement.setLink('/dash/gestion/gateways')
		gatewaysElement.setIcon('bi-router-fill')
		this.dashboardElements.push(gatewaysElement)
		
		var networkServersElement = new SimpleDashboardElement();
		networkServersElement.setTitle('Network Servers')
		networkServersElement.setContent(this.ns)
		networkServersElement.setLink('/dash/gestion/network_servers')
		networkServersElement.setIcon('bi-server')
		this.dashboardElements.push(networkServersElement)

		this._cdr.detectChanges();
	}
}
