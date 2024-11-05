import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteModule } from './cadastro-cliente/cadastro-cliente.module';

const routes: Routes = [
  {
    path: "cliente",
    loadChildren: () =>  import("./cadastro-cliente/cadastro-cliente.module").then(m => m.CadastroClienteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
