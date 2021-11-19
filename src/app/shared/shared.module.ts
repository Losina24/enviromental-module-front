import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApplicationLayoutComponent } from './components/layouts/application-layout/application-layout.component';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';
import { RootLayoutComponent } from './components/layouts/root-layout/root-layout.component';
import { GeneralDashboardComponent } from './components/general-dashboard/general-dashboard.component';

@NgModule({
  imports: [
    // Aqui se declaran los módulos que utilizamos
	RouterModule
  ],
  declarations: [
    // Aqui va la declaración de componentes compartidos
    LateralMenuComponent,
    ApplicationLayoutComponent,
    RootLayoutComponent,
    GeneralDashboardComponent,
  ],
  exports: [
    // Aqui van los componentes que queremos exportar
	LateralMenuComponent,
    ApplicationLayoutComponent,
    RootLayoutComponent,
    GeneralDashboardComponent,
  ],
})
export class SharedModule {}
