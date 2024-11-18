import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosPedidosRoutingModule } from './produtos-pedidos-routing.module';
import { ProdutosPedidosComponent } from './produtos-pedidos.component';
import { ViewProdutosComponent } from './componentes/core/view-produtos/view-produtos.component';
import { ViewPedidoComponent } from './componentes/core/view-pedido/view-pedido.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ProdutoCardComponent } from './componentes/core/produto-card/produto-card.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ProdutosPedidosComponent,
    ViewProdutosComponent,
    ViewPedidoComponent,
    ProdutoCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProdutosPedidosRoutingModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    SelectButtonModule,
    DropdownModule,
    ButtonModule
  ],
})
export class ProdutosPedidosModule {}
