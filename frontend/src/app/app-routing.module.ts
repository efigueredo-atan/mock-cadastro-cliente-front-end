import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFound404Component } from './shared/componentes/page/not-found-404/not-found-404.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>  import("./produtos-pedidos/produtos-pedidos.module").then(m => m.ProdutosPedidosModule)
  },
  {
    path: "cliente",
    loadChildren: () =>  import("./cadastro-cliente/cadastro-cliente.module").then(m => m.CadastroClienteModule)
  },
  {
    title: 'Página não encontrada',
    path: '**',
    component: NotFound404Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
