import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormPesquisaProdutoService } from '../../../services/form-pesquisa-produto.service';
import { Produto } from '../../../../shared/types/types';
import { produtosMock } from '../../../../shared/produtos.mock';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  startWith,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-view-produtos',
  templateUrl: './view-produtos.component.html',
  styleUrl: './view-produtos.component.css',
})
export class ViewProdutosComponent implements OnInit {
  public formularioPesquisaProduto: FormGroup;
  public pesquisarPor = [
    {
      name: 'Todos',
      value: 'todos',
    },
    {
      name: 'Departamento',
      value: 'departamento',
    },
    {
      name: 'Linha',
      value: 'linha',
    },
    {
      name: 'Grupo',
      value: 'grupo',
    },
    {
      name: 'Subgrupo',
      value: 'subgrupo',
    },
    {
      name: 'Características',
      value: 'caracteristicas',
    },
  ];
  public departamentos = [
    {
      name: 'Informática',
      value: 'informatica',
    },
    {
      name: 'Espuma',
      value: 'espuma',
    },
    {
      name: 'Antena',
      value: 'antena',
    },
    {
      name: 'Eletrodomésticos',
      value: 'eletrodomestico',
    },
    {
      name: 'Eletroportáteis',
      value: 'eletroportateis',
    },
    {
      name: 'Móveis',
      value: 'moveis',
    },
    {
      name: 'Decoração',
      value: 'decoracao',
    },
    {
      name: 'Utilidades',
      value: 'utilidades',
    },
    {
      name: 'Saúde',
      value: 'saude',
    },
    {
      name: 'Infantil',
      value: 'infantil',
    },
    {
      name: 'Gamer',
      value: 'gamer',
    },
  ];
  public ordenarPor = [
    {
      name: 'Mais relevantes',
      value: 'maisRelevantes',
    },
    {
      name: 'Menor preço',
      value: 'menorPreco',
    },
    {
      name: 'Maior preço',
      value: 'maiorPreco',
    },
  ];
  public produtos: Produto[] = produtosMock;
  public produtosFiltrados$: Observable<Produto[]>;

  constructor(
    private readonly formularioPesquisaProdutoService: FormPesquisaProdutoService
  ) {}

  public ngOnInit(): void {
    this.formularioPesquisaProduto =
      this.formularioPesquisaProdutoService.formularioPesquisaProduto;
    this.produtosFiltrados$ = this.formularioPesquisaProduto
      .get('produtoQuery')!
      .valueChanges.pipe(
        startWith(''),
        debounceTime(300),
        distinctUntilChanged(),
        map((query) => this.filtrarProdutos(query))
      );
  }

  private filtrarProdutos(query: string): Produto[] {
    if (!query) {
      return this.produtos;
    }
    var produtos = this.produtos.filter((produto) => {
      return produto.nome.toLowerCase().includes(query.toLowerCase());
    });
    return produtos
  }
}
