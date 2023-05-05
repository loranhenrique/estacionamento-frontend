import { Component, Input, OnInit } from '@angular/core';
import { CardVagaViewModel } from '@shared/models/card-vaga-view.model';

@Component({
  selector: 'bra-card-vaga',
  templateUrl: './card-vaga.component.html',
  styleUrls: ['./card-vaga.component.scss'],
})
export class CardVagaComponent implements OnInit {
  @Input() titulo: string;
  @Input() status: boolean;

  public viewModel: CardVagaViewModel;

  constructor() {}

  ngOnInit(): void {
    this.construirViewModel();
  }

  public definirNgClass(): string {
    return this.status ? 'card' : 'card card-ocupada';
  }

  private construirViewModel(): void {
    this.viewModel = {
      titulo: this.titulo,
      status: this.status ? 'Liberada' : 'Ocupada',
    };
  }
}
