import { Component, OnInit } from '@angular/core';
import { Manager } from 'src/app/model/manager';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  manager:Manager= {
    id: 0,
    name: '',
    password: '',
    fone: '',
    foneOther: '',
    email: '',
    emailOther: '',
    inativo: false,
    admin: false
  };

  constructor(private auth: AuthenticationServiceService){}
  ngOnInit(): void {
    this.auth.atualizar.subscribe(f=> this.manager=f)
  }




}
