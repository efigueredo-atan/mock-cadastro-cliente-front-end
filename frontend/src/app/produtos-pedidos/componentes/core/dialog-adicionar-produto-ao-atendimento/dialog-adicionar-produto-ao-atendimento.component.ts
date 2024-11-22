import { Component, EventEmitter, OnInit } from '@angular/core';
import {
  Cliente,
  Estoque,
  Produto,
  ProdutoAtendimento,
  TipoRetirada,
} from '../../../../shared/types/types';
import { EventEmitterService } from '../../../../services/event-emitter.service';
import { cliente } from '../../../../shared/cliente-mock';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-adicionar-produto-ao-atendimento',
  templateUrl: './dialog-adicionar-produto-ao-atendimento.component.html',
  styleUrl: './dialog-adicionar-produto-ao-atendimento.component.css',
})
export class DialogAdicionarProdutoAoAtendimentoComponent implements OnInit {
  public cliente: Cliente = cliente;
  public step: number = 0;
  public produto: Produto;
  public visivel: boolean = false;
  public eventoFecharDialog$: EventEmitter<Produto>;
  public estoqueSelecionado: Estoque;
  public tiposRetiradas: any[] = [
    { label: TipoRetirada.ENTREGA, formaRetirada: TipoRetirada.ENTREGA },
    {
      label: TipoRetirada.RETIRAR_NA_LOJA,
      formaRetirada: TipoRetirada.RETIRAR_NA_LOJA,
    },
  ];
  public formularioDialog: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.formularioDialog = this.formBuilder.group({
      formaRetirada: [null, Validators.required],
      montagem: [false],
      garantiaEstendida: [false],
    });
  }

  public ngOnInit(): void {
    this.escutarEventoAbrirDialogProduto();
    this.obterEventoFecharDialog();
    this.escutarEventoFecharDialog();
  }

  public adicionarProdutoAoAtendimento(): void {
    const produtoAtendimento = {
      produto: this.produto,
      qtdAtendimento: 0,
      garantiaEstendida: this.formularioDialog.get('garantiaEstendida')?.value,
      tipoRetirada: this.formularioDialog.get('formaRetirada').value as TipoRetirada,
      estoque: this.estoqueSelecionado,
      montagem: this.formularioDialog.get("montagem")?.value,
      frete: 50
    }
    this.emitirEventoAdicionarProdutoAoAtendimento(produtoAtendimento);
  }

  public escutarEventoAbrirDialogProduto(): void {
    EventEmitterService.get(
      'eventoAbrirDialogAdicionarProdutoAtendimento'
    ).subscribe((produto) => {
      this.produto = produto;
      this.visivel = true;
    });
  }

  private obterEventoFecharDialog(): void {
    this.eventoFecharDialog$ = EventEmitterService.get(
      'eventoFecharDialogAdicionarProdutoAtendimento'
    );
  }

  private escutarEventoFecharDialog(): void {
    this.eventoFecharDialog$.subscribe((produto) => {
      this.fecharDialog();
    });
  }

  public fecharDialog(): void {
    this.visivel = false;
  }

  public emitirEventoAdicionarProdutoAoAtendimento(
    produtoAtendimento: ProdutoAtendimento
  ): void {
    this.produto.inseridoNoAtendimento = true;
    EventEmitterService.get('eventoAdicionarProdutoAtendimento').emit(
      produtoAtendimento
    );
    this.fecharDialog();
  }

  public selecionarEstoque(estoque: Estoque): void {
    this.estoqueSelecionado = estoque;
  }

  public avancarStep(): void {
    this.step++;
  }

  public voltarStep(): void {
    if (this.step != 0) {
      this.step--;
    }
  }

  public formatarEnderecoSelecionado(): string {
    var endereco = '';
    if (this.cliente.enderecoSelecionado.rua) {
      endereco += this.cliente.enderecoSelecionado.rua;

      if (this.cliente.enderecoSelecionado.numero) {
        endereco += `, n° ${this.cliente.enderecoSelecionado.numero}`;
      }
      if (this.cliente.enderecoSelecionado.complemento) {
        endereco += `, ${this.cliente.enderecoSelecionado.complemento}`;
      }
    }
    return endereco;
  }
}
