import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemCampoObrigatorioComponent } from './componentes/mensagem-campo-obrigatorio/mensagem-campo-obrigatorio.component';
import { MessagesModule } from 'primeng/messages';
import { NotFound404Component } from './componentes/page/not-found-404/not-found-404.component';

@NgModule({
  declarations: [MensagemCampoObrigatorioComponent, NotFound404Component],
  imports: [CommonModule, MessagesModule],
  exports: [MensagemCampoObrigatorioComponent, NotFound404Component],
})
export class SharedModule {}
