import { Component, Input, Output } from '@angular/core';
import { Endereco } from '../../../../shared/types/types';
import { EventEmitter } from '@angular/core';
import { EventEmitterService } from '../../../../services/event-emitter.service';

@Component({
  selector: 'app-endereco-tabela',
  templateUrl: './endereco-tabela.component.html',
  styleUrl: './endereco-tabela.component.css',
})
export class EnderecoTabelaComponent {
  @Input() public titulo: boolean = false;
  @Input() public endereco: Endereco;
  @Input() public enderecoSelecionado: Endereco;
  @Output() public eventoEnderecoSelecionado: EventEmitter<Endereco> =
    new EventEmitter();
  @Output() public eventoExcluirEndereco: EventEmitter<Endereco> =
    new EventEmitter();
  public modalEditarEnderecoVisivel = false;

  public formatarEndereco(): string {
    return `${this.endereco.rua}, n° ${this.endereco.numero}, ${this.endereco.complemento}`;
  }

  public definirEsseEnderecoComoSelecionado(): void {
    this.eventoEnderecoSelecionado.emit(this.endereco);
  }

  public emitirEventoEditarEndereco(): void {
    EventEmitterService.get('editarEndereco').emit(this.endereco);
  }

  public excluirEndereco(): void {
    this.eventoExcluirEndereco.emit(this.endereco);
  }
}
