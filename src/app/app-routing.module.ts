import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// No session pages
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
// Layouts
import { ApplicationLayoutComponent } from './shared/components/layouts/application-layout/application-layout.component';
import { RootLayoutComponent } from './shared/components/layouts/root-layout/root-layout.component';

const routes: Routes = [
  { 
    path: '', 
    component: LandingPageComponent 
  },
  {
    path: 'login/',
    component: LoginComponent
  },
  {
    path: 'root/',
    component: RootLayoutComponent,
    loadChildren: () => import('./pages/enviromental-module/enviromental.module').then(m => m.EnviromentalModule),
    data: { title: 'GESWAT | Root dashboard'}
  },
  { 
    path: 'dash/',
    component: ApplicationLayoutComponent,
   /*  children: [
      {
        path: '',
        
      }
    ] */
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
