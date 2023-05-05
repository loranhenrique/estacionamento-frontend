import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VagasPageComponent } from './pages/vagas-page.component';
import { BuscarVagasResolver } from './resolver/buscar-vagas/buscar-vagas.resolver';

const routes: Routes = [
  {
    path: '',
    component: VagasPageComponent,
    resolve: {
      vagas: BuscarVagasResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [BuscarVagasResolver],
})
export class VagasRoutingModule {}
