import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/gerais/home/home.component';
import { LandlordContentComponent } from './componentes/landlord/landlord-content/landlord-content.component';
import { LoginComponent } from './componentes/login/login.component';
import { ManagerContentComponent } from './componentes/manager/manager-content/manager-content.component';
import { CanActivateRouteGuard } from './services/CanActivateRouteGuard';

const routes: Routes = [
  {path:'landlord', component: LandlordContentComponent, canActivate:[CanActivateRouteGuard]},
  {path:'manager', component: ManagerContentComponent, canActivate:[CanActivateRouteGuard]},
  {path:'login', component: LoginComponent},
  {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
