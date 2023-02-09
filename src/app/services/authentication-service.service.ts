import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login';
import { Manager } from '../model/manager';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  private static managerLoged: Manager;

  apiUrl = 'http://localhost/api/manager/login';

  httpOptions = {
    header: new Headers({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '**'
    })
  }

  constructor(private httpClient: HttpClient) { }

  public atualizar = new EventEmitter<Manager>()

  public login(login:Login): Observable<Manager>{
    const oManager= this.httpClient.post<Manager>(this.apiUrl,login)
    oManager.subscribe( d =>
      {AuthenticationServiceService.managerLoged=d;
        this.atualizar.emit(d)
      })
    return oManager;
  }

  public isLogged(): Manager {
    return AuthenticationServiceService.managerLoged;
  }
}
