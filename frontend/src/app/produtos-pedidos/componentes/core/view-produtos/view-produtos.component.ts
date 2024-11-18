import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormPesquisaProdutoService } from '../../../services/form-pesquisa-produto.service';
import { Produto } from '../../../../shared/types/types';
import { produtosMock } from '../../../../shared/produtos.mock';

@Component({
  selector: 'app-view-produtos',
  templateUrl: './view-produtos.component.html',
  styleUrl: './view-produtos.component.css'
})
export class ViewProdutosComponent implements OnInit {
  public formularioPesquisaProduto: FormGroup;
  public filtros = [
    {
      name: 'Todos',
      value: 'todos'
    },
    {
      name: 'Nome',
      value: 'nome'
    },
    {
      name: 'Cod. Referência',
      value: 'codReferencia'
    },
    {
      name: 'Cod. Barras',
      value: 'codBarras'
    },
    {
      name: 'Cod. Interno',
      value: 'codInterno'
    },
    {
      name: 'Tag',
      value: 'tag'
    },
  ]
  public departamentos = [
    {
      name: 'Informática',
      value: 'informatica'
    },
    {
      name: 'Espuma',
      value: 'espuma'
    },
    {
      name: 'Antena',
      value: 'antena'
    },
    {
      name: 'Eletrodomésticos',
      value: 'eletrodomestico'
    },
    {
      name: 'Eletroportáteis',
      value: 'eletroportateis'
    },
    {
      name: 'Móveis',
      value: 'moveis'
    },
    {
      name: 'Decoração',
      value: 'decoracao'
    },
    {
      name: 'Utilidades',
      value: 'utilidades'
    },
    {
      name: 'Saúde',
      value: 'saude'
    },
    {
      name: 'Infantil',
      value: 'infantil'
    },
    {
      name: 'Gamer',
      value: 'gamer'
    },
  ]
  public produtos: Produto[] = produtosMock;  

  constructor(private readonly formularioPesquisaProdutoService: FormPesquisaProdutoService) {}

  public ngOnInit(): void {
    this.formularioPesquisaProduto = this.formularioPesquisaProdutoService.formularioPesquisaProduto;
  }

}
