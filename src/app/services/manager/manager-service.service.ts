import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from 'src/app/model/manager';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {

  apiUrl = environment.apiUrl+'manager';

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

  public getById(id:number): Observable<Manager>{
    return this.httpClient.get<Manager>(this.apiUrl+"/"+id);

  }
  public salvar(manager:Manager): Observable<Manager>{
    return this.httpClient.post<Manager>(this.apiUrl,manager)
  }
}
