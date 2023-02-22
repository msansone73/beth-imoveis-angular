import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Landlord } from 'src/app/model/landlord';
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

  public getAllByManagerId(manager: Manager): Observable<Landlord[]>{
    return this.http.get<Landlord[]>(this.apiUrl+'/manager/'+manager.id)
  }

  public getByIdAndManagerId(id: number, manager:Manager):Observable<Landlord>{
    return this.http.get<Landlord>(this.apiUrl+'/'+id+'/manager/'+manager.id)
  }

  public salvar(landlord:Landlord): Observable<Landlord>{
    return this.http.post<Landlord>(this.apiUrl,landlord)
  }
}
