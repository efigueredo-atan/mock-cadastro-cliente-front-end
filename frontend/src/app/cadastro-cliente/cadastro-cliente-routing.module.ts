import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './componentes/page/cadastro-cliente/cadastro-cliente.component';

const routes: Routes = [
  {
    "path": "cadastro",
    component: CadastroClienteComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroClienteRoutingModule { }
