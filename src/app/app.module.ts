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


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LandlordListComponent,
    ManagerListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
