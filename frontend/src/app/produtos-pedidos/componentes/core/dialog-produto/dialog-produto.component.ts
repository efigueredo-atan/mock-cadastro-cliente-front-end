import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../../../../services/event-emitter.service';
import { Produto } from '../../../../shared/types/types';
import { produtosMock } from '../../../../shared/produtos.mock';

@Component({
  selector: 'app-dialog-produto',
  templateUrl: './dialog-produto.component.html',
  styleUrl: './dialog-produto.component.css',
})
export class DialogProdutoComponent implements OnInit {
  public produto: Produto;
  public visivel: boolean = false;
  public produtosRelacionados: Produto[] = [];
  public responsiveOptions = [
    {
        breakpoint: '1500px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '1900px',
        numVisible: 5,
        numScroll: 1
    },
    {
        breakpoint: '2200px',
        numVisible: 6,
        numScroll: 1
    },
];

  public ngOnInit(): void {
    this.escutarEventoAbrirDialogProduto();
    this.produtosRelacionados.push(produtosMock[0])
    this.produtosRelacionados.push(produtosMock[1])
    this.produtosRelacionados.push(produtosMock[2])
    this.produtosRelacionados.push(produtosMock[3])
    this.produtosRelacionados.push(produtosMock[4])
    this.produtosRelacionados.push(produtosMock[5])
  }

  public escutarEventoAbrirDialogProduto(): void {
    EventEmitterService.get('eventoAbrirDialogProduto').subscribe((produto) => {
      this.produto = produto;
      this.visivel = true;
      console.log(this.produtosRelacionados)
    });
  }
}
