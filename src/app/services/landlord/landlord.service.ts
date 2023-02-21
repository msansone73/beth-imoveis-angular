import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Manager } from 'src/app/model/manager';
import { environment } from 'src/environments/environment';
import { AuthenticationServiceService } from '../authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class LandlordService implements OnInit {

  apiUrl = environment.apiUrl+'landlord'
  managerLoged: Manager=this.auth.isLogged()

  httpOptions = {
    header: new Headers({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '**'
    })
  }

  constructor(
    private auth: AuthenticationServiceService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  
}
