import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApplicationLayoutComponent } from './components/layouts/application-layout/application-layout.component';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';
import { SimpleDashboardFrameComponent } from './components/dashboard-components/simple-dashboard-frame/simple-dashboard-frame.component';
import { GeneralDashboardComponent } from './components/general-dashboard/general-dashboard.component';
import { GeneralListComponent } from './components/general-list/general-list.component';
import { GeneralFormComponent } from './components/general-form/general-form.component';
import { PopupMessageComponent } from './components/popup-message/popup-message.component';
import { PopupConfirmationComponent } from './components/popup-confirmation/popup-confirmation.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  imports: [
    // Aqui se declaran los módulos que utilizamos
	  RouterModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    // Aqui va la declaración de componentes compartidos
    LateralMenuComponent,
    ApplicationLayoutComponent,
    SimpleDashboardFrameComponent,
    GeneralDashboardComponent,
    GeneralListComponent,
    GeneralFormComponent,
    PopupMessageComponent,
    PopupConfirmationComponent,
    SafePipe
  ],
  exports: [
    // Aqui van los componentes que queremos exportar
	  LateralMenuComponent,
    ApplicationLayoutComponent,
    SimpleDashboardFrameComponent,
    GeneralDashboardComponent,
    GeneralListComponent,
    GeneralFormComponent,
    SafePipe
  ],
})
export class SharedModule {}
