import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from 'src/app/model/manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {

  apiUrl = 'http://localhost/api/manager';

  httpOptions = {
    header: new Headers({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '**'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllManagers(): Observable<Manager[]>{
    return this.httpClient.get<Manager[]>(this.apiUrl);
  }
}
