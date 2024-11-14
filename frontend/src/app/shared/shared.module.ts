import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemCampoObrigatorioComponent } from './componentes/mensagem-campo-obrigatorio/mensagem-campo-obrigatorio.component';
import { MessagesModule } from 'primeng/messages';
import { NotFound404Component } from './componentes/page/not-found-404/not-found-404.component';
import { BreadCrumbComponent } from './componentes/bread-crumb/bread-crumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [
    MensagemCampoObrigatorioComponent,
    NotFound404Component,
    BreadCrumbComponent,
  ],
  imports: [CommonModule, MessagesModule, BreadcrumbModule],
  exports: [
    MensagemCampoObrigatorioComponent,
    NotFound404Component,
    BreadCrumbComponent,
  ],
})
export class SharedModule {}
