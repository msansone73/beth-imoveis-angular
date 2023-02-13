import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationServiceService } from './authentication-service.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(
    private auth: AuthenticationServiceService,
    private router: Router
    ) {}

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {

      if (this.auth.isLogged()==null ||
        this.auth.isLogged().id==0){
          this.router.navigate(['/login'])
      }
      return true

  }
}
