import { Component, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SelectButtonChangeEvent } from 'primeng/selectbutton';
import { Cliente, Genero } from '../../../../shared/types/types';
import {
  validarDocumentoCNPJ,
  validarDocumentoCPF,
} from '../../../../shared/validators/custom-validators';
import { cliente } from '../../../../shared/cliente-mock';
import { FormCadastroClienteService } from '../../../services/form.service';
import { ValidadorDocumentosService } from '../../../services/validador-documentos.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-informacoes-pessoais-cliente',
  templateUrl: './step-informacoes-pessoais-cliente.component.html',
  styleUrl: './step-informacoes-pessoais-cliente.component.css',
})
export class StepInformacoesPessoaisClienteComponent implements OnInit {

  @Output() public avancarStepperEvent = new EventEmitter();

  public cliente: Cliente = null;
  public tipoDocumento: any[] = [
    { label: 'CPF', documentoSelecionado: 'cpf' },
    { label: 'CNPJ', documentoSelecionado: 'cnpj' },
  ];
  public genero: any[] = [
    { name: Genero.MASCULINO, value: Genero.MASCULINO.toString() },
    { name: Genero.FEMININO, value: Genero.FEMININO.toString() },
    { name: Genero.OUTRO, value: Genero.OUTRO.toString() },
  ];

  public documentoSelecionado: string = 'cpf';
  public generoSelecionado: string = '';

  public consultandoDocumentos = false;
  public dadosClienteEncontrados = false;
  public modoEdicaoDados = false;
  public erroFormularioDocumento = {
    errorCPF: false,
    errorCNPJ: false,
    mensagem: '',
  };

  public formularioInformacoesPessoaisCPF!: FormGroup;
  public formularioInformacoesPessoaisCNPJ!: FormGroup;
  public formularioDocumento!: FormGroup;
  public formularioInformacoesPessoaisSelecionado: FormGroup =
    this.formularioInformacoesPessoaisCPF;

  constructor(
    private readonly formCadastroClienteService: FormCadastroClienteService,
    private readonly validadorDocumentosService: ValidadorDocumentosService
  ) {}

  public ngOnInit(): void {
    this.obterInstanciasDeFormularios();
    this.formularioInformacoesPessoaisSelecionado =
      this.formularioInformacoesPessoaisCPF;
  }

  public habilitarModoEdicao(): void {
    this.modoEdicaoDados = true;
    if (this.documentoSelecionado == 'cpf') {
      this.formCadastroClienteService.habilitarCamposCPF();
    } else {
      this.formCadastroClienteService.habilitarCamposCNPJ();
    }
  }

  public salvarAlteracoes(): void {
    this.modoEdicaoDados = false;
    if (this.documentoSelecionado == 'cpf') {
      this.formCadastroClienteService.desabilitarCamposCPF();
    } else {
      this.formCadastroClienteService.desabilitarCamposCNPJ();
    }
  }

  public validarDocumento(): void {
    // Validar no phroteus se existe usuario
    // Se nao houver obter dados na API da receita federal
    if (!this.houveErroValidacaoDocumentos()) {
      this.consultandoDocumentos = true;
      this.dadosClienteEncontrados = false;
      setTimeout(() => {
        this.consultandoDocumentos = false;
        this.dadosClienteEncontrados = true;
        this.cliente = cliente;
        if (this.documentoSelecionado == 'cpf') {
          this.formCadastroClienteService.atualizarFormularioInformacoesPessoaisCPF(
            this.cliente
          );
        } else {
          this.formCadastroClienteService.atualizarFormularioInformacoesPessoaisCNPJ(
            this.cliente
          );
        }
      }, 1000);
    } else {
      this.formularioDocumento.get('cpf').reset();
      this.formularioDocumento.get('cnpj').reset();
    }
  }

  public removerInformacoesClienteSeInputForAlteradoEClienteEncontrado(
    event: any
  ): void {
    if (this.dadosClienteEncontrados) {
      this.resetarCliente();
    }
  }
  public selecionarDocumento(event: SelectButtonChangeEvent) {
    this.modoEdicaoDados = false;
    this.documentoSelecionado = event.value;
    this.formularioDocumento.value.documentoSelecionado = event.value;
    this.cliente = null;
    this.resetarObjetoErroDocumento();
    this.dadosClienteEncontrados = false;
    if (this.documentoSelecionado == 'cpf') {
      this.formularioInformacoesPessoaisSelecionado =
        this.formularioInformacoesPessoaisCPF;
      this.formularioDocumento.removeControl('cnpj');
      this.formularioDocumento.addControl(
        'cpf',
        new FormControl(null, [Validators.required, validarDocumentoCPF])
      );
    } else {
      this.formularioInformacoesPessoaisSelecionado =
        this.formularioInformacoesPessoaisCNPJ;
      this.formularioDocumento.removeControl('cpf');
      this.formularioDocumento.addControl(
        'cnpj',
        new FormControl(null, [Validators.required, validarDocumentoCNPJ])
      );
    }
  }

  public selecionarGenero(event: SelectButtonChangeEvent) {
    this.generoSelecionado = event.value;
  }

  private resetarCliente(): void {
    this.cliente = null;
    this.dadosClienteEncontrados = false;
  }

  private resetarObjetoErroDocumento(): void {
    this.erroFormularioDocumento =
      this.validadorDocumentosService.objetoErroFormularioDocumentoVazio();
  }

  private obterInstanciasDeFormularios(): void {
    this.formularioDocumento =
      this.formCadastroClienteService.formularioDocumento;
    this.formularioInformacoesPessoaisCPF =
      this.formCadastroClienteService.formularioInformacoesPessoaisCPF;
    this.formularioInformacoesPessoaisCNPJ =
      this.formCadastroClienteService.formularioInformacoesPessoaisCNPJ;
  }

  private houveErroValidacaoDocumentos(): boolean {
    if (this.documentoSelecionado == 'cpf') {
      this.erroFormularioDocumento = this.validadorDocumentosService.validarCPF(
        this.formularioDocumento.get('cpf').value
      );
      return this.erroFormularioDocumento.errorCPF;
    } else {
      this.erroFormularioDocumento =
        this.validadorDocumentosService.validarCNPJ(
          this.formularioDocumento.get('cnpj').value
        );
      return this.erroFormularioDocumento.errorCNPJ;
    }
  }

  public emitirEventoAvancarStep(): void {
    this.avancarStepperEvent.emit("");
  }
}