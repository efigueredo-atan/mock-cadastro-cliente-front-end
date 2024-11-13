import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './componentes/page/cadastro-cliente/cadastro-cliente.component';

const routes: Routes = [
  {
    title: "Cadastro de cliente",
    path: "cadastro",
    component: CadastroClienteComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: 'cadastro'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroClienteRoutingModule { }
