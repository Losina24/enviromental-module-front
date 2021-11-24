import { NgModule } from '@angular/core';
import { EnviromentalGeneralDashboardComponent } from './enviromental-general-dashboard/enviromental-general-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';

//import { EnviromentalComponent } from './name.component';

@NgModule({
    imports: [SharedModule],
    exports: [],
    declarations: [/* EnviromentalComponent */
    EnviromentalGeneralDashboardComponent
  ],
    providers: [],
})
export class EnviromentalModule { }
