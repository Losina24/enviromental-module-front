import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard.component';
import { ManagementDashboardComponent } from './pages/management-module/management-dashboard/management-dashboard.component';
import { EnviromentalDashboardComponent } from './pages/enviromental-module/enviromental-dashboard/enviromental-dashboard.component';
import { EnviromentalDeviceListComponent } from './pages/enviromental-module/enviromental-devices/enviromental-device-list/enviromental-device-list.component';
import { EnviromentalSensorListComponent } from './pages/enviromental-module/enviromental-sensors/enviromental-sensor-list/enviromental-sensor-list.component';
import { EnviromentalMeasureListComponent } from './pages/enviromental-module/enviromental-measures/enviromental-measure-list/enviromental-measure-list.component';
import { EnviromentalAlertListComponent } from './pages/enviromental-module/enviromental-alerts/enviromental-alert-list/enviromental-alert-list.component';
import { EnviromentalDeviceFormComponent } from './pages/enviromental-module/enviromental-devices/enviromental-device-form/enviromental-device-form.component';
import { EnviromentalSensorFormComponent } from './pages/enviromental-module/enviromental-sensors/enviromental-sensor-form/enviromental-sensor-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    MainDashboardComponent,
    ManagementDashboardComponent,
    EnviromentalDashboardComponent,
    EnviromentalDeviceListComponent,
    EnviromentalSensorListComponent,
    EnviromentalMeasureListComponent,
    EnviromentalAlertListComponent,
    EnviromentalDeviceFormComponent,
    EnviromentalSensorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
