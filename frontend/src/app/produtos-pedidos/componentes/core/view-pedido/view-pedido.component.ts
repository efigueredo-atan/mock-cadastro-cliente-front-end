import { Component, OnInit } from '@angular/core';
import { Atendimento } from '../../../../shared/types/types';
import { produtosMock } from '../../../../shared/produtos.mock';

@Component({
  selector: 'app-view-pedido',
  templateUrl: './view-pedido.component.html',
  styleUrl: './view-pedido.component.css',
})
export class ViewPedidoComponent implements OnInit {
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
  }
}
