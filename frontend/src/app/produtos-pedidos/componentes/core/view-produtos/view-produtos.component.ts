import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormPesquisaProdutoService } from '../../../services/form-pesquisa-produto.service';
import {
  Departamento,
  Filtro,
  Produto,
  TipoFiltro,
} from '../../../../shared/types/types';
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
    {
      name: TipoFiltro.DEPARTAMENTO.toString(),
      value: TipoFiltro.DEPARTAMENTO,
    },
    { name: TipoFiltro.LINHA.toString(), value: TipoFiltro.LINHA },
    { name: TipoFiltro.GRUPO.toString(), value: TipoFiltro.GRUPO },
    { name: TipoFiltro.SUBGRUPO.toString(), value: TipoFiltro.SUBGRUPO },
    {
      name: TipoFiltro.CARACTERISTICAS.toString(),
      value: TipoFiltro.CARACTERISTICAS,
    },
  ];
  public departamentos = [
    {
      name: Departamento.INFORMATICA.toString(),
      value: Departamento.INFORMATICA,
    },
    { name: Departamento.ESPUMA.toString(), value: Departamento.ESPUMA },
    { name: Departamento.ANTENA.toString(), value: Departamento.ANTENA },
    {
      name: Departamento.ELETRODOMESTICOS.toString(),
      value: Departamento.ELETRODOMESTICOS,
    },
    {
      name: Departamento.ELETROPORTATEIS.toString(),
      value: Departamento.ELETROPORTATEIS,
    },
    { name: Departamento.MOVEIS.toString(), value: Departamento.MOVEIS },
    { name: Departamento.DECORACAO.toString(), value: Departamento.DECORACAO },
    {
      name: Departamento.UTILIDADES.toString(),
      value: Departamento.UTILIDADES,
    },
    { name: Departamento.SAUDE.toString(), value: Departamento.SAUDE },
    { name: Departamento.INFANTIL.toString(), value: Departamento.INFANTIL },
    { name: Departamento.GAMER.toString(), value: Departamento.GAMER },
  ];
  public ordenarPor = [
    { name: 'Menor preço', value: 'menorPreco' },
    { name: 'Maior preço', value: 'maiorPreco' },
  ];
  public produtosOriginal: Produto[] = produtosMock;
  public produtosFiltrados$: Observable<Produto[]>;
  public eventoAdicionarProdutoAtendimento$: EventEmitter<Produto>;
  public eventoRemoverProdutoAtendimento$: EventEmitter<Produto>;
  public filtros: Filtro[] = [];

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
      this.formularioPesquisaProduto
        .get('departamento')
        .valueChanges.pipe(startWith(''), distinctUntilChanged()),
    ]).pipe(
      map(([query, ordenacao, departamento]) =>
        this.aplicarFiltrosEOrdenacao(query, ordenacao, departamento)
      )
    );
  }

  private aplicarFiltrosEOrdenacao(
    query: string,
    ordenacaoSelecionada: string,
    departamento: any
  ): Produto[] {
    // Filtragem dos produtos com base na query
    let produtosFiltrados = this.filtrarProdutos(query);

    // Filtragrem dos produtos com base no departamento
    this.adicionarDepartamentoAListaDeFiltragem(departamento.value);

    // Ordenação dos produtos filtrados com base na ordenação selecionada
    if (ordenacaoSelecionada === 'menorPreco') {
      produtosFiltrados = this.ordenarProdutosPorMenorPreco(produtosFiltrados);
    } else if (ordenacaoSelecionada === 'maiorPreco') {
      produtosFiltrados = this.ordenarProdutosPorMaiorPreco(produtosFiltrados);
    }

    return produtosFiltrados;
  }

  public removerFiltro(filtro: Filtro): void {
    console.log(this.filtros)
    this.filtros = this.filtros.filter((filtroLista) => {
      const valorNaoIgual = filtroLista.valor != filtro.valor;
      const tipoNaoIgual = filtroLista.tipoFiltro != filtro.tipoFiltro;
      return valorNaoIgual && tipoNaoIgual;
    });
    console.log(this.filtros)
  }

  private adicionarDepartamentoAListaDeFiltragem(departamento: string): void {
    if (departamento) {
      const filtro: Filtro = {
        tipoFiltro: TipoFiltro.DEPARTAMENTO,
        valor: departamento,
      };
      if (!this.jaExisteFiltroNaLista(filtro)) {
        this.filtros.unshift(filtro);
      }
    }
  }

  private jaExisteFiltroNaLista(filtro: Filtro): boolean {
    const filtroEncontrado = this.filtros.find((filtroLista) => {
      const valorIgual = filtroLista.valor == filtro.valor;
      const tipoFiltroIgual = filtroLista.tipoFiltro == filtro.tipoFiltro;
      return valorIgual && tipoFiltroIgual;
    });
    if (filtroEncontrado) {
      return true;
    }
    return false;
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
    // if (this.existeProdutoNaListaDeProdutos(produto)) {
    //   this.produtosOriginal = this.produtosOriginal.filter(
    //     (produtoLista) => produtoLista.id !== produto.id
    //   );
    // }
  }

  public adicionarProdutoLista(produto: Produto): void {
    // if (!this.existeProdutoNaListaDeProdutos(produto)) {
    //   this.produtosOriginal = [...this.produtosOriginal, produto];
    // }
  }

  private existeProdutoNaListaDeProdutos(produto: Produto): boolean {
    return this.produtosOriginal.includes(produto);
  }

  // private atualizarProdutosFiltrados(): void {
  //   const query = this.formularioPesquisaProduto.get('produtoQuery')!.value;
  //   const ordenacao = this.formularioPesquisaProduto.get('ordenarPor')!.value;

  //   this.produtosFiltrados$ = of(
  //     this.aplicarFiltrosEOrdenacao(query, ordenacao)
  //   );
  // }
}
