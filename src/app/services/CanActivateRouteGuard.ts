import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationServiceService } from './authentication-service.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(
    private auth: AuthenticationServiceService
    ) {}

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {

    console.log(this.auth.isLogged!=null)
    return this.auth.isLogged()!=null;
  }
}
