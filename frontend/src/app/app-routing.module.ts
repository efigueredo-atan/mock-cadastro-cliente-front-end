import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "cliente",
    loadChildren: () =>  import("./cadastro-cliente/cadastro-cliente.module").then(m => m.CadastroClienteModule)
  },
  {
    path: '**',
    redirectTo: 'cliente'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
