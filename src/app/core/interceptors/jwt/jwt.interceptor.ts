import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '@service/app/state/state.service';
import { StateConstantes } from '@config/state-constantes.const';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptor implements HttpInterceptor {
  constructor(private stateService: StateService) {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authenticationTokenString = localStorage.getItem(StateConstantes.USUARIO_LOGADO);

    if (authenticationTokenString) {
      const authenticationToken = JSON.parse(authenticationTokenString);
      this.stateService.sessao.set(StateConstantes.USUARIO_LOGADO, authenticationToken);
    }

    return next.handle(httpRequest);
  }
}
