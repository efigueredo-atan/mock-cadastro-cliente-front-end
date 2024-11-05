import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroClienteRoutingModule } from './cadastro-cliente-routing.module';
import { CadastroClienteComponent } from './componentes/page/cadastro-cliente/cadastro-cliente.component';
import { DividerModule } from 'primeng/divider';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    CadastroClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CadastroClienteRoutingModule,
    DividerModule,
    BreadcrumbModule,
    StepperModule,
    ButtonModule,
    InputTextModule,
    SelectButtonModule,
    InputNumberModule,
    InputMaskModule,
    CalendarModule
  ]
})
export class CadastroClienteModule { }
