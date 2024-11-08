import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Cliente, Endereco } from '../../../../shared/types/types';
import { cliente } from '../../../../shared/cliente-mock';

@Component({
  selector: 'app-step-enderecos-cliente',
  templateUrl: './step-enderecos-cliente.component.html',
  styleUrl: './step-enderecos-cliente.component.css'
})
export class StepEnderecosClienteComponent {
  @Output() public voltarStepperEvent = new EventEmitter();
  @Output() public avancarStepperEvent = new EventEmitter();
  @Input() public cliente: Cliente = cliente;
  public enderecoSelecionado: Endereco;
  public modalAdicionarEditarEnderecoVisivel = false;

  public emitirEventoAvancarStepper(): void {
    this.avancarStepperEvent.emit("");
  }

  public emitirEventoVoltarStepper(): void {
    this.voltarStepperEvent.emit("");
  }

  public trocarEnderecoSelecionado(endereco: Endereco): void {
    this.enderecoSelecionado = endereco;
  }

  public abrirDialogAdicionarEndereco(): void {
    this.modalAdicionarEditarEnderecoVisivel = true;
  }
}
