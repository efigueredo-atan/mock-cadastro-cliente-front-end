import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemCampoObrigatorioComponent } from './componentes/mensagem-campo-obrigatorio/mensagem-campo-obrigatorio.component';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [
    MensagemCampoObrigatorioComponent
  ],
  imports: [
    CommonModule,
    MessagesModule
  ],
  exports: [MensagemCampoObrigatorioComponent]
})
export class SharedModule { }
