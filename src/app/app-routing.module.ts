import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// No session pages
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';

// Layouts
import { ApplicationLayoutComponent } from './shared/components/layouts/application-layout/application-layout.component';

// Session pages
import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard.component';

// Management Module
import { ManagementDashboardComponent } from './pages/management-module/management-dashboard/management-dashboard.component';
import { ManagementCouncilListComponent } from './pages/management-module/management-councils/management-council-list/management-council-list.component';
import { ManagementCouncilFormComponent } from './pages/management-module/management-councils/management-council-form/management-council-form.component';
import { ManagementGatewayListComponent } from './pages/management-module/management-gateways/management-gateway-list/management-gateway-list.component';
import { ManagementGatewayFormComponent } from './pages/management-module/management-gateways/management-gateway-form/management-gateway-form.component';
import { ManagementNetworkServerListComponent } from './pages/management-module/management-network-servers/management-network-server-list/management-network-server-list.component';
import { ManagementNetworkServerFormComponent } from './pages/management-module/management-network-servers/management-network-server-form/management-network-server-form.component';
import { ManagementUserListComponent } from './pages/management-module/management-users/management-user-list/management-user-list.component';
import { ManagementUserFormComponent } from './pages/management-module/management-users/management-user-form/management-user-form.component';

// Enviromental Module
import { EnviromentalDashboardComponent } from './pages/enviromental-module/enviromental-dashboard/enviromental-dashboard.component';
import { EnviromentalDeviceListComponent } from './pages/enviromental-module/enviromental-devices/enviromental-device-list/enviromental-device-list.component';
import { EnviromentalDeviceFormComponent } from './pages/enviromental-module/enviromental-devices/enviromental-device-form/enviromental-device-form.component';
import { EnviromentalSensorListComponent } from './pages/enviromental-module/enviromental-sensors/enviromental-sensor-list/enviromental-sensor-list.component';
import { EnviromentalSensorFormComponent } from './pages/enviromental-module/enviromental-sensors/enviromental-sensor-form/enviromental-sensor-form.component';
import { EnviromentalMeasureListComponent } from './pages/enviromental-module/enviromental-measures/enviromental-measure-list/enviromental-measure-list.component';
import { EnviromentalAlertListComponent } from './pages/enviromental-module/enviromental-alerts/enviromental-alert-list/enviromental-alert-list.component';

const routes: Routes = [
  { 
    path: '', 
    //component: LandingPageComponent
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { 
    path: 'dash',
    component: ApplicationLayoutComponent,
    children: [
      {
        path: '',
        component: MainDashboardComponent 
      },

      // Management module
      {
        path: 'gestion',
        component: ManagementDashboardComponent 
      },
      {
        path: 'gestion/ayuntamientos',
        component: ManagementCouncilListComponent 
      },
      {
        path: 'gestion/ayuntamientos/:id',
        component: ManagementCouncilFormComponent 
      },
      {
        path: 'gestion/ayuntamientos/crear',
        component: ManagementCouncilFormComponent 
      },
      {
        path: 'gestion/gateways',
        component: ManagementGatewayListComponent 
      },
      {
        path: 'gestion/gateways/:id',
        component: ManagementGatewayFormComponent 
      },
      {
        path: 'gestion/gateways/crear',
        component: ManagementGatewayFormComponent 
      },
      {
        path: 'gestion/network_servers',
        component: ManagementNetworkServerListComponent 
      },
      {
        path: 'gestion/network_servers/:id',
        component: ManagementNetworkServerFormComponent 
      },
      {
        path: 'gestion/network_servers/crear',
        component: ManagementNetworkServerFormComponent 
      },
      {
        path: 'gestion/usuarios',
        component: ManagementUserListComponent 
      },
      {
        path: 'gestion/usuarios/:id',
        component: ManagementUserFormComponent 
      },
      {
        path: 'gestion/usuarios/crear',
        component: ManagementUserFormComponent 
      },

      // Enviromental module
      {
        path: 'ambiental',
        component: EnviromentalDashboardComponent 
      },
      {
        path: 'ambiental/dispositivos',
        component: EnviromentalDeviceListComponent 
      },
      {
        path: 'ambiental/dispositivos/:id',
        component: EnviromentalDeviceFormComponent
      },
      {
        path: 'ambiental/dispositivos/crear',
        component: EnviromentalDeviceFormComponent 
      },
      {
        path: 'ambiental/sensores',
        component: EnviromentalSensorListComponent 
      },
      {
        path: 'ambiental/sensores/:id',
        component: EnviromentalSensorFormComponent 
      },
      {
        path: 'ambiental/sensores/crear',
        component: EnviromentalSensorFormComponent 
      },
      {
        path: 'ambiental/alertas',
        component: EnviromentalAlertListComponent 
      },
      {
        path: 'ambiental/mediciones',
        component: EnviromentalMeasureListComponent 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
