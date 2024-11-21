import { Component, Input } from '@angular/core';
import { Produto } from '../../../../shared/types/types';
import { EventEmitterService } from '../../../../services/event-emitter.service';
import { fadeInAnimation } from '../../../../animations';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrl: './produto-card.component.css',
  animations: [fadeInAnimation]
})
export class ProdutoCardComponent {
  @Input() public produto: Produto;
  @Input() public small: boolean = false;

  public emitirEventoAbrirDialogProduto(produto: Produto): void {
    EventEmitterService.get('eventoAbrirDialogProduto').emit({
      produto: produto,
      mostrarBotaoAdd: true
    })
  }

  public emitirEventoAdicionarProdutoAoAtendimento(): void {
    this.produto.inseridoNoAtendimento = true;
    EventEmitterService.get('eventoAdicionarProdutoAtendimento').emit(
      this.produto
    );
  }

  public emitirEventoAdicionarProdutoAoAtendimentoFecharDialog(): void {
    this.produto.inseridoNoAtendimento = true;
    EventEmitterService.get('eventoAdicionarProdutoAtendimento').emit(
      this.produto
    );
    EventEmitterService.get('eventoFecharDialog').emit(
      this.produto
    );
  } 
}
