import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosPedidosComponent } from './produtos-pedidos.component';

const routes: Routes = [
  {
    path: '',
    title: 'Criar pedido',
    component: ProdutosPedidosComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosPedidosRoutingModule { }
