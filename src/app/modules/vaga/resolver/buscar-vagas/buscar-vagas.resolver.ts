import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BuscarVagasService } from '@service/http/buscar-parceiros/buscar-vagas.service';

@Injectable()
export class BuscarVagasResolver implements Resolve<any> {
  constructor(private readonly service: BuscarVagasService) {}

  resolve() {
    return this.service.execute();
  }
}
