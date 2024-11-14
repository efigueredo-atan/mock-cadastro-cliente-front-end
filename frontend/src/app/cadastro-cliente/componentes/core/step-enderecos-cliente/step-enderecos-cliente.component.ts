import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Cliente, Endereco } from '../../../../shared/types/types';
import { cliente } from '../../../../shared/cliente-mock';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EventEmitterService } from '../../../../services/event-emitter.service';

@Component({
  selector: 'app-step-enderecos-cliente',
  templateUrl: './step-enderecos-cliente.component.html',
  styleUrl: './step-enderecos-cliente.component.css',
})
export class StepEnderecosClienteComponent {
  @Output() public voltarStepperEvent = new EventEmitter();
  @Output() public avancarStepperEvent = new EventEmitter();

  // @Input() public cliente: Cliente;
  // Inserir input no html apos alteração
  public cliente = cliente;

  public enderecoSelecionado: Endereco;
  public enderecoSelecionadoEditar: Endereco;
  public modalAdicionarEnderecoVisivel = false;
  public modalEditarEnderecoVisivel = false;

  constructor(
    private readonly messageService: MessageService,
    private readonly confirmationService: ConfirmationService
  ) {
    this.mostrarMensagemEndereçoRegistrado();
    this.cliente = cliente;
    this.ordenarEnderecosPorPrincipal();
    this.definirEnderecoPrincipalComoSelecionado();
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
    EventEmitterService.get('cadastrarEndereco').emit();
  }

  public fecharDialogAdicionarEndereco(): void {
    this.modalAdicionarEnderecoVisivel = false;
  }

  public fecharDialogEditarEndereco(): void {
    this.modalEditarEnderecoVisivel = false;
  }

  public processarEnderecoRegistradoRecebido(endereco: Endereco): void {
    this.mostrarMensagemEndereçoRegistrado();
    if (endereco.principal) {
      this.trocarEnderecoPrincipalSeEleJaExistir();
    }
    this.cliente.enderecos.push(endereco);
    this.ordenarEnderecosPorPrincipal();
    this.enderecoSelecionado = endereco;
  }

  public processarEnderecoAlteradoRecebido(endereco: Endereco): void {
    this.mostrarMensagemEndereçoAlterado();
    if (endereco.principal) {
      this.trocarEnderecoPrincipalSeEleJaExistir();
    }
    const indexEndereco = this.cliente.enderecos.findIndex(
      (enderecoLista) => enderecoLista.id == endereco.id
    );
    this.cliente.enderecos.splice(indexEndereco, 1);
    this.cliente.enderecos.push(endereco);
    this.ordenarEnderecosPorPrincipal();
    this.enderecoSelecionado = endereco;
  }

  private definirEnderecoPrincipalComoSelecionado(): void {
    this.cliente.enderecos.find(endereco => {
      if(endereco.principal) {
        this.enderecoSelecionado = endereco;
      }
    })
  }

  private trocarEnderecoPrincipalSeEleJaExistir(): void {
    this.cliente.enderecos.map((endereco) => {
      const enderecoEhPrincipal = endereco.principal == true
      if(enderecoEhPrincipal) {
        endereco.principal = false;
      }
    });
  }

  private ordenarEnderecosPorPrincipal(): void {
    this.cliente.enderecos.sort(
      (a, b) => Number(b.principal) - Number(a.principal)
    );
  }
  public excluirEndereco(endereco: Endereco): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Tem certeza que quer excluir o endereço?',
      header: 'Excluir endereço',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        const index = this.cliente.enderecos.indexOf(endereco);
        this.cliente.enderecos.splice(index, 1);
        this.mostrarMensagemEnderecoExcluido();
      },
    });
  }

  private mostrarMensagemEnderecoExcluido(): void {
    this.messageService.add({
      severity: 'info',
      summary: 'Confirmado',
      detail: 'Endereço excluído do sistema!',
    });
  }

  private mostrarMensagemEndereçoRegistrado() {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Endereço registrado no sistema!',
    });
  }

  private mostrarMensagemEndereçoAlterado() {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Endereço alterado no sistema!',
    });
  }
}
