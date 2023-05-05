import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { VagasPageComponent } from './pages/vagas-page.component';
import { VagasRoutingModule } from './vagas-routing.module';

@NgModule({
  declarations: [VagasPageComponent],
  imports: [CommonModule, VagasRoutingModule, SharedModule, TranslateModule],
})
export class VagasModule {}
