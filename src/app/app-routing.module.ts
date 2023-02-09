import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/gerais/home/home.component';
import { LandlordListComponent } from './componentes/landlord/landlord-list/landlord-list.component';
import { LoginComponent } from './componentes/login/login.component';
import { ManagerListComponent } from './componentes/manager/manager-list/manager-list.component';

const routes: Routes = [
  {path:'landlord', component: LandlordListComponent},
  {path:'manager', component: ManagerListComponent},
  {path:'login', component: LoginComponent},
  {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
