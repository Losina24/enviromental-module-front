import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { ManagementCouncilListComponent } from './pages/management-module/management-councils/management-council-list/management-council-list.component';
import { ManagementCouncilFormComponent } from './pages/management-module/management-councils/management-council-form/management-council-form.component';
import { ManagementGatewayFormComponent } from './pages/management-module/management-gateways/management-gateway-form/management-gateway-form.component';
import { ManagementGatewayListComponent } from './pages/management-module/management-gateways/management-gateway-list/management-gateway-list.component';
import { ManagementNetworkServerListComponent } from './pages/management-module/management-network-servers/management-network-server-list/management-network-server-list.component';
import { ManagementNetworkServerFormComponent } from './pages/management-module/management-network-servers/management-network-server-form/management-network-server-form.component';
import { ManagementUserListComponent } from './pages/management-module/management-users/management-user-list/management-user-list.component';
import { ManagementUserFormComponent } from './pages/management-module/management-users/management-user-form/management-user-form.component';
import { EnviromentalMapComponent } from './pages/enviromental-module/enviromental-map/enviromental-map.component';
import { EnviromentalUnpairedDevicesComponent } from './pages/enviromental-module/enviromental-unpaired-devices/enviromental-unpaired-devices.component';

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
    EnviromentalSensorFormComponent,
    ManagementCouncilListComponent,
    ManagementCouncilFormComponent,
    ManagementGatewayFormComponent,
    ManagementGatewayListComponent,
    ManagementNetworkServerListComponent,
    ManagementNetworkServerFormComponent,
    ManagementUserListComponent,
    ManagementUserFormComponent,
    EnviromentalMapComponent,
    EnviromentalUnpairedDevicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
