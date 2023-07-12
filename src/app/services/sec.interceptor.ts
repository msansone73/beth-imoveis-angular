import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class SecInterceptor implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem('id_token')


    if (1==1){
      const cloned = req.clone({
         headers: req.headers.set('Authorization', 'Basic dXNlcjpwYXNzd29yZA==')
        .append('Content-Type', 'application/json')
        .append('Access-Control-Allow-Origin', '**')
        .append("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS")
        .append("Access-Control-Allow-Headers", "*")
        .append("Access-Control-Allow-Credentials", 'true')
        .append("Access-Control-Max-Age", '180')
      })

      return next.handle(cloned)

    } else {
      return next.handle(req)
    }


  }

 }
