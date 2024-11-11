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
import { SkeletonModule } from 'primeng/skeleton';
import { StepInformacoesPessoaisClienteComponent } from './componentes/core/step-informacoes-pessoais-cliente/step-informacoes-pessoais-cliente.component';
import { StepEnderecosClienteComponent } from './componentes/core/step-enderecos-cliente/step-enderecos-cliente.component';
import { StepHistoricoClienteComponent } from './componentes/core/step-historico-cliente/step-historico-cliente.component';
import { EnderecoTabelaComponent } from './componentes/core/endereco-tabela/endereco-tabela.component';
import { TooltipModule } from 'primeng/tooltip';
import { ModalEditarAdicionarEnderecoComponent } from './componentes/core/modal-editar-adicionar-endereco/modal-editar-adicionar-endereco.component';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ModalEditarEnderecoComponent } from './componentes/core/modal-editar-endereco/modal-editar-endereco.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    CadastroClienteComponent,
    StepInformacoesPessoaisClienteComponent,
    StepEnderecosClienteComponent,
    StepHistoricoClienteComponent,
    EnderecoTabelaComponent,
    ModalEditarAdicionarEnderecoComponent,
    ModalEditarEnderecoComponent
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
    SharedModule,
    TooltipModule,
    DialogModule,
    DropdownModule,
    ConfirmDialogModule
],
  providers: [
    MessageService,
    ConfirmationService
  ]
})
export class CadastroClienteModule { }
