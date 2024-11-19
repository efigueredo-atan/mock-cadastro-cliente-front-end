import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import {
  Atendimento,
  Produto,
  ProdutoAtendimento,
} from '../../../../shared/types/types';
import { produtosMock } from '../../../../shared/produtos.mock';
import { EventEmitterService } from '../../../../services/event-emitter.service';
import { ProdutoCardComponent } from '../produto-card/produto-card.component';

@Component({
  selector: 'app-view-pedido',
  templateUrl: './view-pedido.component.html',
  styleUrl: './view-pedido.component.css',
})
export class ViewPedidoComponent implements OnInit, OnDestroy {
  public atendimento: Atendimento = {
    id: '1',
    valorTotalComDesconto: 0,
    valorTotalSemDesconto: 0,
    descontoAtendimentoNumerico: 0,
    descontoAtendimentoPorcentagem: 0,
    descontoDosProdutos: 0,
    descontoTotal: 0,
    produtos: [],
    qtdItens: 0,
    qtdProdutos: 0,
  };

  public opcoesDesconto = [
    { icon: 'pi pi-dollar', justify: 'Left' },
    { icon: 'pi pi-percentage', justify: 'Right' },
  ];

  public $eventoExcluirProdutoAtendimento: EventEmitter<ProdutoAtendimento>;
  public $eventoAdicionarProdutoAtendimento: EventEmitter<Produto>;

  public ngOnInit(): void {
    this.atendimento.produtos.push({
      produto: produtosMock[0],
      qtdAtendimento: 1,
    });
    this.atendimento.produtos.push({
      produto: produtosMock[1],
      qtdAtendimento: 1,
    });
    this.atendimento.produtos.push({
      produto: produtosMock[2],
      qtdAtendimento: 1,
    });
    this.atendimento.produtos.push({
      produto: produtosMock[3],
      qtdAtendimento: 1,
    });
    this.atendimento.produtos.push({
      produto: produtosMock[4],
      qtdAtendimento: 1,
    });
    this.obterEventoExcluirProdutoDoAtendimento();
    this.obterEventoAdicionarProdutoAoAtendimento();
    this.escutarEventoExcluirProdutoDoAtendimento();
    this.escutarEventoAdicionarProdutoAoAtendimento();
  }

  public ngOnDestroy(): void {
    this.$eventoExcluirProdutoAtendimento.unsubscribe();
  }

  public obterEventoExcluirProdutoDoAtendimento(): void {
    this.$eventoExcluirProdutoAtendimento = EventEmitterService.get(
      'eventoExcluirProdutoAtendimento'
    );
  }

  public obterEventoAdicionarProdutoAoAtendimento(): void {
    this.$eventoAdicionarProdutoAtendimento = EventEmitterService.get(
      'eventoAdicionarProdutoAtendimento'
    );
  }

  public escutarEventoExcluirProdutoDoAtendimento(): void {
    this.$eventoExcluirProdutoAtendimento.subscribe((produtoAtendimento) => {
      this.excluirProdutoDoAtendimento(produtoAtendimento);
    });
  }

  public escutarEventoAdicionarProdutoAoAtendimento(): void {
    this.$eventoAdicionarProdutoAtendimento.subscribe((produto) => {
      this.adicionarProdutoAoAtendimento(produto)
    });
  }

  private excluirProdutoDoAtendimento(produto: ProdutoAtendimento): void {
    const index = this.atendimento.produtos.indexOf(produto);
    if (index >= 0) this.atendimento.produtos.splice(index, 1);
  }

  private adicionarProdutoAoAtendimento(produto: Produto): void {
    this.atendimento.produtos.push({
      produto: produto,
      qtdAtendimento: 1
    });
  }
}
