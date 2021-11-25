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

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    MainDashboardComponent,
    ManagementDashboardComponent,
    EnviromentalDashboardComponent
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
