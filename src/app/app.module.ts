import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/gerais/menu/menu.component';
import { HomeComponent } from './componentes/gerais/home/home.component';
import { LandlordListComponent } from './componentes/landlord/landlord-list/landlord-list.component';
import { ManagerListComponent } from './componentes/manager/manager-list/manager-list.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { CanActivateRouteGuard } from './services/CanActivateRouteGuard';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ManagerContentComponent } from './componentes/manager/manager-content/manager-content.component';
import { ManagerEditComponent } from './componentes/manager/manager-edit/manager-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LandlordListComponent,
    ManagerListComponent,
    LoginComponent,
    ManagerContentComponent,
    ManagerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CanActivateRouteGuard, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
