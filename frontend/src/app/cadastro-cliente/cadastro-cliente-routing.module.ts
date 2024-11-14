import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './componentes/page/cadastro-cliente/cadastro-cliente.component';
import { NotFound404Component } from '../shared/componentes/page/not-found-404/not-found-404.component';

const routes: Routes = [
  {
    title: "Cadastro de cliente",
    path: "cadastro",
    component: CadastroClienteComponent,
    pathMatch: "full"
  },
  {
    path: '**',
    component: NotFound404Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroClienteRoutingModule { }
