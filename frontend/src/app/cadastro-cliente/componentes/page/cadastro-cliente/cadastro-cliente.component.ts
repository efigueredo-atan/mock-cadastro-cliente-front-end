import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Cliente } from '../../../../shared/types/types';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class CadastroClienteComponent {
  public cliente: Cliente = null;
  public stepAtivo: number = 0;

  public avancarStep(event: any) {
    this.stepAtivo++;
  }

  public voltarStep(event: any) {
    this.stepAtivo--;
  }
}

// {
//   nome: this.formularioInformacoesPessoais.value.nome,
//   sobrenome: this.formularioInformacoesPessoais.value.sobrenome,
//   cpf: this.formularioInformacoesPessoais.value.cpf,
//   rg: this.formularioInformacoesPessoais.value.rg,
//   genero: this.formularioInformacoesPessoais.value.genero,
//   cnpj: this.formularioInformacoesPessoais.value.cnpj,
//   incricaoEstadual: this.formularioInformacoesPessoais.value.incricaoEstadual,
//   orgaoPublico: this.formularioInformacoesPessoais.value.nome,
//   dataNascimento: this.formularioInformacoesPessoais.value.dataNascimento,
//   contato: this.formularioInformacoesPessoais.value.contato,
// }
