import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import {
  Atendimento,
  Produto,
  ProdutoAtendimento,
  TipoRetirada,
} from '../../../../shared/types/types';
import { EventEmitterService } from '../../../../services/event-emitter.service';
import { produtosMock } from '../../../../shared/produtos.mock';

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
    produtos: [{
      produto: produtosMock[0],
      estoque: {
        nome: 'Matriz - Custódia',
        quantidade: 3
      },
      frete: 50,
      garantiaEstendida: {
        tempo: '1 ano',
        valor: 50
      },
      montagem: true,
      valorMontagem: 34,
      qtdAtendimento: 1,
      tipoRetirada: TipoRetirada.ENTREGA
    }],
    qtdItens: 0,
    qtdProdutos: 0,
  };

  public opcoesDesconto = [
    { icon: 'pi pi-dollar', justify: 'Left' },
    { icon: 'pi pi-percentage', justify: 'Right' },
  ];

  public eventoExcluirProdutoAtendimento$: EventEmitter<ProdutoAtendimento>;
  public eventoAdicionarProdutoAtendimento$: EventEmitter<ProdutoAtendimento>;
  public eventoQuantidadeProdutoAlterada$: EventEmitter<ProdutoAtendimento>;

  public ngOnInit(): void {
    this.obterEventoExcluirProdutoDoAtendimento();
    this.obterEventoAdicionarProdutoAoAtendimento();
    this.obterEventoQuantidadeProdutoAlterada();
    this.escutarEventoExcluirProdutoDoAtendimento();
    this.escutarEventoAdicionarProdutoAoAtendimento();
    this.escutarEventoQuantidadeProdutoAlterada();
  }

  public ngOnDestroy(): void {
    this.eventoExcluirProdutoAtendimento$ ? this.eventoExcluirProdutoAtendimento$.unsubscribe() : null;
    this.eventoAdicionarProdutoAtendimento$ ? this.eventoAdicionarProdutoAtendimento$.unsubscribe() : null;
    this.eventoQuantidadeProdutoAlterada$ ? this.eventoQuantidadeProdutoAlterada$.unsubscribe() : null;
  }

  public obterEventoExcluirProdutoDoAtendimento(): void {
    this.eventoExcluirProdutoAtendimento$ = EventEmitterService.get(
      'eventoExcluirProdutoAtendimento'
    );
  }

  public obterEventoAdicionarProdutoAoAtendimento(): void {
    this.eventoAdicionarProdutoAtendimento$ = EventEmitterService.get(
      'eventoAdicionarProdutoAtendimento'
    );
  }

  public obterEventoQuantidadeProdutoAlterada(): void {
    this.eventoQuantidadeProdutoAlterada$ = EventEmitterService.get(
      'eventoQuantidadeProdutoAlterada'
    );
  }

  public escutarEventoExcluirProdutoDoAtendimento(): void {
    this.eventoExcluirProdutoAtendimento$.subscribe((produtoAtendimento) => {
      this.excluirProdutoDoAtendimento(produtoAtendimento);
    });
  }

  public escutarEventoAdicionarProdutoAoAtendimento(): void {
    this.eventoAdicionarProdutoAtendimento$.subscribe((produtoAtendimento) => {
      this.adicionarProdutoAoAtendimento(produtoAtendimento);
    });
  }

  public escutarEventoQuantidadeProdutoAlterada(): void {
    this.eventoQuantidadeProdutoAlterada$.subscribe((produtoAtendimento) => {
      if (this.produtoExisteNoAtendimento(produtoAtendimento.produto)) {
        this.recalcularValorTotalSemDescontos();
        this.recalcularQuantidadeItens();
      }
    });
  }

  private recalcularValorTotalSemDescontos(): void {
    var valorTotalSemDescontos = 0;
    this.atendimento.produtos.map((produtoAtendimento) => {
      valorTotalSemDescontos +=
        produtoAtendimento.qtdAtendimento * produtoAtendimento.produto.valor;
    });
    this.atendimento.valorTotalSemDesconto = valorTotalSemDescontos;
  }

  private recalcularQuantidadeItens(): void {
    var qtdItens = 0;
    this.atendimento.produtos.map((produtoAtendimento) => {
      qtdItens += produtoAtendimento.qtdAtendimento;
    });
    this.atendimento.qtdItens = qtdItens;
  }

  private produtoExisteNoAtendimento(produto: Produto): boolean {
    var produtoExisteNoAtendimento = false;
    this.atendimento.produtos.find((produtoAtendimento) => {
      if (produtoAtendimento.produto.id == produto.id) {
        produtoExisteNoAtendimento = true;
      }
    });
    return produtoExisteNoAtendimento;
  }

  private excluirProdutoDoAtendimento(produto: ProdutoAtendimento): void {
    const index = this.atendimento.produtos.indexOf(produto);
    if (index >= 0) {
      this.atendimento.produtos.splice(index, 1);
      this.atendimento.qtdProdutos--;
      this.atendimento.qtdItens -= produto.qtdAtendimento;
      this.atendimento.valorTotalSemDesconto -=
        produto.qtdAtendimento * produto.produto.valor;
      this.emitirEventoProdutoExcluidoDoAtendimento(produto.produto);
    }
  }

  private adicionarProdutoAoAtendimento(
    produtoAtendimento: ProdutoAtendimento
  ): void {
    if (!this.produtoExisteNoAtendimento(produtoAtendimento.produto)) {
      this.atendimento.produtos.unshift(produtoAtendimento);
      this.atendimento.qtdItens++;
      this.atendimento.qtdProdutos++;
      this.atendimento.valorTotalSemDesconto +=
        produtoAtendimento.produto.valor;
      this.emitirEventoProdutoAdicionadoAoAtendimento(
        produtoAtendimento.produto
      );
    }
  }

  private emitirEventoProdutoAdicionadoAoAtendimento(produto: Produto): void {
    EventEmitterService.get('eventoProdutoAdicionadoAoAtendimento').emit(
      produto
    );
  }

  private emitirEventoProdutoExcluidoDoAtendimento(produto: Produto): void {
    EventEmitterService.get('eventoProdutoRemovidoDoAtendimento').emit(produto);
  }
}
