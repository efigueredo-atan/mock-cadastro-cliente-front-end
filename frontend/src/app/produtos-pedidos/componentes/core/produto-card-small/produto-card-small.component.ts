import { Component, Input } from '@angular/core';
import { Produto, ProdutoAtendimento } from '../../../../shared/types/types';

@Component({
  selector: 'app-produto-card-small',
  templateUrl: './produto-card-small.component.html',
  styleUrl: './produto-card-small.component.css',
})
export class ProdutoCardSmallComponent {
  @Input() public produtoAtendimento: ProdutoAtendimento;

  public aumentarQuantidadeItem(): void {
    this.produtoAtendimento.qtdAtendimento++;
  }
  public diminuirQuantidadeItem(): void {
    if (this.produtoAtendimento.qtdAtendimento > 1) {
      this.produtoAtendimento.qtdAtendimento--;
    }
  }
}
