import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BuscarVagasService } from '@service/http/buscar-parceiros/buscar-vagas.service';
import { BuscarVagaModel } from '@service/models/buscar-vaga.model';

@Injectable()
export class BuscarVagasResolver implements Resolve<BuscarVagaModel[]> {
  constructor(private readonly service: BuscarVagasService) {}

  resolve() {
    return this.service.execute();
  }
}
