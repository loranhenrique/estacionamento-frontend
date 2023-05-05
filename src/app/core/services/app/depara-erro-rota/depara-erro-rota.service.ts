import { Injectable } from '@angular/core';
import { CodigoErroConstantes } from '@config/codigo-erro.const';
import { environment } from '@env/environment';
import { ErroModel } from '@erro/models/erro.model';

@Injectable({
  providedIn: 'root',
})
export class DeparaErroRotaService {
  private erroModelPadrao: ErroModel = {
    urlVoltar: '',
    codigoErro: CodigoErroConstantes.ERRO_DEFAULT_FRONT,
  };

  constructor() {}

  public execute(rota: string): ErroModel {
    switch (rota) {
      case environment.api.vagas:
        return this.construirErroVagas();
      default:
        return this.erroModelPadrao;
    }
  }

  private construirErroVagas(): ErroModel {
    return {
      ...this.erroModelPadrao,
      urlVoltar: '/vagas',
      codigoErro: CodigoErroConstantes.ERRO_VAGAS,
    };
  }
}
