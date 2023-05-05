import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingComponent } from './components/loading/loading.component';
import { CardVagaComponent } from './components/card-vaga/card-vaga.component';

@NgModule({
  declarations: [LoadingComponent, CardVagaComponent],
  imports: [CommonModule, TranslateModule, FormsModule, ReactiveFormsModule],
  exports: [LoadingComponent, CardVagaComponent],
})
export class SharedModule {}
