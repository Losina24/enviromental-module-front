import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApplicationLayoutComponent } from './components/layouts/application-layout/application-layout.component';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';
import { SimpleDashboardFrameComponent } from './components/dashboard-components/simple-dashboard-frame/simple-dashboard-frame.component';
import { GeneralDashboardComponent } from './components/general-dashboard/general-dashboard.component';

@NgModule({
  imports: [
    // Aqui se declaran los módulos que utilizamos
	  RouterModule,
    CommonModule
  ],
  declarations: [
    // Aqui va la declaración de componentes compartidos
    LateralMenuComponent,
    ApplicationLayoutComponent,
    SimpleDashboardFrameComponent,
    GeneralDashboardComponent,
  ],
  exports: [
    // Aqui van los componentes que queremos exportar
	  LateralMenuComponent,
    ApplicationLayoutComponent,
    SimpleDashboardFrameComponent,
    GeneralDashboardComponent,
  ],
})
export class SharedModule {}
