import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// No session pages
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';

// Layouts
import { ApplicationLayoutComponent } from './shared/components/layouts/application-layout/application-layout.component';

// Session pages
import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard.component';

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
      {
        path: 'gestion',
        component: MainDashboardComponent 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
