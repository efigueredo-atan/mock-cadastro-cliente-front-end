import { Component, Input, Output } from '@angular/core';
import { Endereco } from '../../../../shared/types/types';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-endereco-tabela',
  templateUrl: './endereco-tabela.component.html',
  styleUrl: './endereco-tabela.component.css',
})
export class EnderecoTabelaComponent {
  @Input() public titulo: boolean = false;
  @Input() public endereco: Endereco;
  @Input() public enderecoSelecionado: Endereco;
  @Output() public eventoEnderecoSelecionado: EventEmitter<Endereco> = new EventEmitter();

  public formatarEndereco(): string {
    return `${this.endereco.endereco}, n° ${this.endereco.numero}, ${this.endereco.complemento}`;;
  }

  public definirEsseEnderecoComoSelecionado(): void {
    this.eventoEnderecoSelecionado.emit(this.endereco);
  }
}
