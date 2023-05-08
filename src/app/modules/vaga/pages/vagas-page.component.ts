import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuscarVagasService } from '@service/http/buscar-parceiros/buscar-vagas.service';
import { BuscarVagaModel } from '@service/models/buscar-vaga.model';
import { VagasViewModel } from '@vaga/models/vagas-view.model';

@Component({
  selector: 'bra-vagas-page',
  templateUrl: './vagas-page.component.html',
  styleUrls: ['./vagas-page.component.scss'],
})
export class VagasPageComponent implements OnInit, AfterViewInit {
  public viewModel: VagasViewModel;
  private vagasAPI: BuscarVagaModel[];

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly service: BuscarVagasService) {}

  ngOnInit(): void {
    this.inicializarVagasAPI();
    this.construirViewModel();
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      this.service.execute().subscribe((vagas: BuscarVagaModel[]) => {
        let iguais = 0;

        for (let i = 0; i < this.vagasAPI.length; i++) {
          if (this.vagasAPI[i].status === vagas[i].status) {
            iguais = iguais + 1;
          }
        }

        if (iguais < this.vagasAPI.length) {
          this.vagasAPI = vagas;
          this.viewModel = {
            ...this.viewModel,
            vagas: this.vagasAPI,
            vagasDisponiveis: this.inicializarVagasDisponiveis(),
          };
        }
      });
    }, 5000);
  }

  private construirViewModel(): void {
    this.viewModel = {
      tituloBotao: 'ONBOARDING__TITULO--BOTAO',
      descricao: 'ONBOARDING__DESCRICAO--01',
      subDescricao: 'ONBOARDING__DESCRICAO--02',
      vagas: this.vagasAPI,
      vagasDisponiveis: this.inicializarVagasDisponiveis(),
    };
  }

  private inicializarVagasAPI(): void {
    this.vagasAPI = this.activatedRoute.snapshot.data.vagas;
  }

  private inicializarVagasDisponiveis(): number {
    let vagasDisponiveis = 0;

    this.vagasAPI.forEach((vaga: any) => {
      if (vaga.status) {
        vagasDisponiveis += 1;
      }
    });

    return vagasDisponiveis;
  }
}
