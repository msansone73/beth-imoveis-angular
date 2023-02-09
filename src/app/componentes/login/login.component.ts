import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/model/login';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {


  constructor(private auth: AuthenticationServiceService){
  }
  ngOnInit(): void {
    this.login.email='msansone@gmail.com'
    this.login.password='123'
  }

  login: Login=new Login();


  doLogin(){
    this.auth.login(this.login)
  }

}
