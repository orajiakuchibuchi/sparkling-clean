
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CookieService } from 'src/app/services/cookie.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptor implements HttpInterceptor {

  constructor( private CookieService: CookieService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes(environment.baseapi)) {
      if (false) {
        let requestClone = request.clone({
          setHeaders: {
            'Client-Id': environment.clientID,
            // 'Authorization': `Bearer ${this.authService.access_token.value}`,
            'Accept': 'application/json',
            'ContentType': 'application/json'
          }
        });
        return next.handle(requestClone);

      } else {
        let requestClone = request.clone({
          setHeaders: {
            'Client-Id': environment.clientID,
            'Accept': 'application/json',
            'ContentType': 'application/json'
          }
        });
        return next.handle(requestClone);

      }

    }

    return next.handle(request);
  }
}
