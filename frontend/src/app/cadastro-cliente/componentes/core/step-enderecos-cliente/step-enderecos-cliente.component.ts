import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Cliente, Endereco } from '../../../../shared/types/types';
import { cliente } from '../../../../shared/cliente-mock';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-step-enderecos-cliente',
  templateUrl: './step-enderecos-cliente.component.html',
  styleUrl: './step-enderecos-cliente.component.css',
})
export class StepEnderecosClienteComponent {
  @Output() public voltarStepperEvent = new EventEmitter();
  @Output() public avancarStepperEvent = new EventEmitter();
  @Input() public cliente: Cliente = cliente;
  public enderecoSelecionado: Endereco;
  public modalAdicionarEnderecoVisivel = false;
  public modalEditarEnderecoVisivel = false;

  constructor(private readonly messageService: MessageService) {
    this.mostrarMensagemEndereçoRegistrado();
  }

  public emitirEventoAvancarStepper(): void {
    this.avancarStepperEvent.emit('');
  }

  public emitirEventoVoltarStepper(): void {
    this.voltarStepperEvent.emit('');
  }

  public trocarEnderecoSelecionado(endereco: Endereco): void {
    this.enderecoSelecionado = endereco;
  }

  public abrirDialogAdicionarEndereco(): void {
    this.modalAdicionarEnderecoVisivel = true;
  }

  public fecharDialogAdicionarEndereco(): void {
    this.modalAdicionarEnderecoVisivel = false;
  }

  public abrirDialogEditarEnderecoEndereco(endereco: Endereco): void {
    this.modalEditarEnderecoVisivel = true;
  }

  public fecharDialogEditarEndereco(): void {
    this.modalEditarEnderecoVisivel = false;
  }

  public processarEnderecoRegistradoRecebido(endereco: Endereco): void {
    this.mostrarMensagemEndereçoRegistrado();
    this.cliente.enderecos.push(endereco);
  }

  private mostrarMensagemEndereçoRegistrado() {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Endereço registrado no sistema!',
    });
  }
}
