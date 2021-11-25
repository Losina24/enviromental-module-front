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
        path: 'ambiental/dispositivos/crear',
        component: EnviromentalDeviceFormComponent 
      },
      {
        path: 'ambiental/sensores',
        component: EnviromentalSensorListComponent 
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
