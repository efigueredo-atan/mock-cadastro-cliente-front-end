import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroClienteRoutingModule } from './cadastro-cliente-routing.module';
import { CadastroClienteComponent } from './componentes/page/cadastro-cliente/cadastro-cliente.component';
import { DividerModule } from 'primeng/divider';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SkeletonModule } from 'primeng/skeleton';
import { StepInformacoesPessoaisClienteComponent } from './componentes/core/step-informacoes-pessoais-cliente/step-informacoes-pessoais-cliente.component';
import { StepEnderecosClienteComponent } from './componentes/core/step-enderecos-cliente/step-enderecos-cliente.component';
import { StepHistoricoClienteComponent } from './componentes/core/step-historico-cliente/step-historico-cliente.component';

@NgModule({
  declarations: [
    CadastroClienteComponent,
    StepInformacoesPessoaisClienteComponent,
    StepEnderecosClienteComponent,
    StepHistoricoClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CadastroClienteRoutingModule,
    DividerModule,
    StepperModule,
    ButtonModule,
    InputTextModule,
    SelectButtonModule,
    InputNumberModule,
    InputMaskModule,
    CalendarModule,
    SharedModule,
    ToastModule,
    SkeletonModule,
    SharedModule
],
  providers: [
    MessageService
  ]
})
export class CadastroClienteModule { }
