import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BuscarVagaModel } from '@service/models/buscar-vaga.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuscarVagasService {
  constructor(private readonly http: HttpClient) {}

  public execute(): Observable<BuscarVagaModel[]> {
    return this.http.get<BuscarVagaModel[]>(environment.api.vagas);
  }
}
