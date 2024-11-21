import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormPesquisaProdutoService } from '../../../services/form-pesquisa-produto.service';
import { Produto } from '../../../../shared/types/types';
import { produtosMock } from '../../../../shared/produtos.mock';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  combineLatest,
  of,
  startWith,
} from 'rxjs';
import { EventEmitterService } from '../../../../services/event-emitter.service';

@Component({
  selector: 'app-view-produtos',
  templateUrl: './view-produtos.component.html',
  styleUrls: ['./view-produtos.component.css'],
})
export class ViewProdutosComponent implements OnInit {
  public formularioPesquisaProduto: FormGroup;
  public pesquisarPor = [
    { name: 'Todos', value: 'todos' },
    { name: 'Departamento', value: 'departamento' },
    { name: 'Linha', value: 'linha' },
    { name: 'Grupo', value: 'grupo' },
    { name: 'Subgrupo', value: 'subgrupo' },
    { name: 'Características', value: 'caracteristicas' },
  ];
  public departamentos = [
    { name: 'Informática', value: 'informatica' },
    { name: 'Espuma', value: 'espuma' },
    { name: 'Antena', value: 'antena' },
    { name: 'Eletrodomésticos', value: 'eletrodomestico' },
    { name: 'Eletroportáteis', value: 'eletroportateis' },
    { name: 'Móveis', value: 'moveis' },
    { name: 'Decoração', value: 'decoracao' },
    { name: 'Utilidades', value: 'utilidades' },
    { name: 'Saúde', value: 'saude' },
    { name: 'Infantil', value: 'infantil' },
    { name: 'Gamer', value: 'gamer' },
  ];
  public ordenarPor = [
    { name: 'Menor preço', value: 'menorPreco' },
    { name: 'Maior preço', value: 'maiorPreco' },
  ];
  public produtosOriginal: Produto[] = produtosMock;
  public produtosFiltrados$: Observable<Produto[]>;
  public eventoAdicionarProdutoAtendimento$: EventEmitter<Produto>;
  public eventoRemoverProdutoAtendimento$: EventEmitter<Produto>;

  constructor(
    private readonly formularioPesquisaProdutoService: FormPesquisaProdutoService
  ) {}

  ngOnInit(): void {
    this.formularioPesquisaProduto =
      this.formularioPesquisaProdutoService.formularioPesquisaProduto;
    this.iniciarObservables();
    this.obterEventoProdutoAdicionadoAoAtendimento();
    this.escutarEventoProdutoAdicionadoAoAtendimento();
    this.obterEventoProdutoRemovidoDoAtendimento();
    this.escutarEventoProdutoRemovidoDoAtendimento();
  }

  private iniciarObservables(): void {
    // Observable para capturar as mudanças tanto na query quanto na ordenação
    this.produtosFiltrados$ = combineLatest([
      this.formularioPesquisaProduto
        .get('produtoQuery')!
        .valueChanges.pipe(
          startWith(''),
          debounceTime(300),
          distinctUntilChanged()
        ),
      this.formularioPesquisaProduto
        .get('ordenarPor')!
        .valueChanges.pipe(
          startWith(''),
          debounceTime(300),
          distinctUntilChanged()
        ),
    ]).pipe(
      map(([query, ordenacao]) =>
        this.aplicarFiltrosEOrdenacao(query, ordenacao)
      )
    );
  }

  private aplicarFiltrosEOrdenacao(
    query: string,
    ordenacaoSelecionada: string
  ): Produto[] {
    // Filtragem dos produtos com base na query
    let produtosFiltrados = this.filtrarProdutos(query);

    // Ordenação dos produtos filtrados com base na ordenação selecionada
    if (ordenacaoSelecionada === 'menorPreco') {
      produtosFiltrados = this.ordenarProdutosPorMenorPreco(produtosFiltrados);
    } else if (ordenacaoSelecionada === 'maiorPreco') {
      produtosFiltrados = this.ordenarProdutosPorMaiorPreco(produtosFiltrados);
    }

    return produtosFiltrados;
  }

  private filtrarProdutos(query: string): Produto[] {
    if (!query) {
      return this.produtosOriginal; // Retorna todos os produtos caso a query esteja vazia
    }
    return this.produtosOriginal.filter((produto) =>
      produto.nome.toLowerCase().includes(query.toLowerCase())
    );
  }

  private ordenarProdutosPorMenorPreco(produtos: Produto[]): Produto[] {
    return produtos.sort((a, b) => a.valor - b.valor);
  }

  private ordenarProdutosPorMaiorPreco(produtos: Produto[]): Produto[] {
    return produtos.sort((a, b) => b.valor - a.valor);
  }

  public obterEventoProdutoAdicionadoAoAtendimento(): void {
    this.eventoAdicionarProdutoAtendimento$ = EventEmitterService.get(
      'eventoProdutoAdicionadoAoAtendimento'
    );
  }

  public escutarEventoProdutoAdicionadoAoAtendimento(): void {
    this.eventoAdicionarProdutoAtendimento$.subscribe((produto) => {
      this.removerProdutoLista(produto);
    });
  }

  public obterEventoProdutoRemovidoDoAtendimento(): void {
    this.eventoRemoverProdutoAtendimento$ = EventEmitterService.get(
      'eventoProdutoRemovidoDoAtendimento'
    );
  }

  public escutarEventoProdutoRemovidoDoAtendimento(): void {
    this.eventoRemoverProdutoAtendimento$.subscribe((produto) => {
      console.log(produto);
      this.adicionarProdutoLista(produto);
    });
  }

  public removerProdutoLista(produto: Produto): void {
    if (this.existeProdutoNaListaDeProdutos(produto)) {
      const index = this.produtosOriginal.findIndex(
        (produtoLista) => produtoLista.id == produto.id
      );
      if (index >= 0) this.produtosOriginal.splice(index, 1);
    }
  }

  public adicionarProdutoLista(produto: Produto): void {
    if (!this.existeProdutoNaListaDeProdutos(produto)) {
      this.produtosOriginal.push(produto);
      this.produtosOriginal = this.produtosOriginal = this.aplicarFiltrosEOrdenacao(
        this.formularioPesquisaProduto.get('produtoQuery').value,
        this.formularioPesquisaProduto.get('ordenarPor').value
      );
    }
  }

  private existeProdutoNaListaDeProdutos(produto: Produto): boolean {
    return this.produtosOriginal.includes(produto);
  }
}
