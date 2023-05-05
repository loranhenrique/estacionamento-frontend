import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VagasViewModel } from '@vaga/models/vagas-view.model';

@Component({
  selector: 'bra-vagas-page',
  templateUrl: './vagas-page.component.html',
  styleUrls: ['./vagas-page.component.scss'],
})
export class VagasPageComponent implements OnInit {
  public viewModel: VagasViewModel;
  private vagasAPI: any[];

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.inicializarVagasAPI();
    this.construirViewModel();
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
