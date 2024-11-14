import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesModule } from 'primeng/messages';
import { NotFound404Component } from './componentes/page/not-found-404/not-found-404.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BreadCrumbComponent } from '../componentes/bread-crumb/bread-crumb.component';

@NgModule({
  declarations: [
    NotFound404Component,
    BreadCrumbComponent,
  ],
  imports: [CommonModule, MessagesModule, BreadcrumbModule],
  exports: [
    NotFound404Component,
    BreadCrumbComponent,
  ],
})
export class SharedModule {}
