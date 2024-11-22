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
import { DividerModule } from 'primeng/divider';
import { ProdutoCardSmallComponent } from './componentes/core/produto-card-small/produto-card-small.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TabViewModule } from 'primeng/tabview';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogProdutoComponent } from './componentes/core/dialog-produto/dialog-produto.component';
import { DialogModule } from 'primeng/dialog';
import { CarouselModule } from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';
import { DialogAdicionarProdutoAoAtendimentoComponent } from './componentes/core/dialog-adicionar-produto-ao-atendimento/dialog-adicionar-produto-ao-atendimento.component';
import { StepperModule } from 'primeng/stepper';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    ProdutosPedidosComponent,
    ViewProdutosComponent,
    ViewPedidoComponent,
    ProdutoCardComponent,
    ProdutoCardSmallComponent,
    DialogProdutoComponent,
    DialogAdicionarProdutoAoAtendimentoComponent,
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
    ButtonModule,
    DividerModule,
    InputGroupModule,
    InputGroupAddonModule,
    TabViewModule,
    InputNumberModule,
    DialogModule,
    CarouselModule,
    ChipModule,
    StepperModule,
    CheckboxModule
  ],
})
export class ProdutosPedidosModule {}
