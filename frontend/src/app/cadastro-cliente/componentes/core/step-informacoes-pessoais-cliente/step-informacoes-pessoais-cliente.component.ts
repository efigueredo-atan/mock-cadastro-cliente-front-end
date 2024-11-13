import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectButtonChangeEvent } from 'primeng/selectbutton';
import { Cliente, Genero } from '../../../../shared/types/types';
import { validarDocumentoCNPJ } from '../../../../shared/validators/custom-validators';
import { cliente } from '../../../../shared/cliente-mock';
import { FormCadastroClienteService } from '../../../services/form.service';
import { ValidadorDocumentosService } from '../../../services/validador-documentos.service';
import { EventEmitter } from '@angular/core';
import { ApiCnpjService } from '../../../services/api-cnpj.service';
import { ResponseApiCnpj } from '../../../../shared/types/api-cnpj';

@Component({
  selector: 'app-step-informacoes-pessoais-cliente',
  templateUrl: './step-informacoes-pessoais-cliente.component.html',
  styleUrl: './step-informacoes-pessoais-cliente.component.css',
})
export class StepInformacoesPessoaisClienteComponent implements OnInit {
  @Output() public avancarStepperEvent: EventEmitter<Cliente> =
    new EventEmitter();
  @Input() public cliente: Cliente = null;

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
    private readonly validadorDocumentosService: ValidadorDocumentosService,
    private readonly apiCnpjService: ApiCnpjService
  ) {}

  public ngOnInit(): void {
    this.obterInstanciasDeFormularios();
    this.formularioInformacoesPessoaisSelecionado =
      this.formularioInformacoesPessoaisCPF;
  }

  public enterPressionado(): void {
    if (!this.consultandoDocumentos && !this.dadosClienteEncontrados) {
      this.validarDocumento();
    }
  }

  public validarDocumento(): void {
    // Validar no phroteus se existe usuario
    // Se nao houver obter dados na API da receita federal
    if (!this.houveErroValidacaoDocumentos()) {
      this.consultandoDocumentos = true;
      this.dadosClienteEncontrados = false;
      console.log(this.documentoSelecionado);

      if (this.documentoSelecionado == 'cpf') {
        // Consultar CPF
        setTimeout(() => {
          this.consultandoDocumentos = false;
          this.dadosClienteEncontrados = true;
          this.cliente = cliente;
          this.formCadastroClienteService.atualizarFormularioInformacoesPessoaisCPF(
            this.cliente
          );
        }, 1000);
      } else {
        // Consultar CNPJ
        var cnpj = this.formularioDocumento.get('cnpj').value;
        cnpj = this.formatarCnpjECpf(cnpj);
        this.apiCnpjService.consultarCNPJ(cnpj).subscribe((resposta) => {
          this.consultandoDocumentos = false;
          this.dadosClienteEncontrados = true;
          this.cliente = this.obterClientePelaRespostaApiCnpj(resposta);
          this.formCadastroClienteService.atualizarFormularioInformacoesPessoaisCNPJ(
            this.cliente
          );
          console.log(this.cliente);
          console.log(this.formularioInformacoesPessoaisCNPJ);
        });
      }
    } else {
      this.formularioDocumento.get('cpf').reset();
      this.formularioDocumento.get('cnpj').reset();
    }
  }

  private obterClientePelaRespostaApiCnpj(resposta: ResponseApiCnpj): Cliente {
    return {
      nome: resposta.company.name,
      contatos: {
        telefone1:
          resposta.phones.length > 0
            ? `${resposta.phones[0].area}${resposta.phones[0].number}`
            : null,
        telefone2: null,
        email: resposta.emails.length > 0 ? resposta.emails[0].address : null,
      },
      sobrenome: null,
      cpf: null,
      genero: null,
      rg: null,
      cnpj: resposta.taxId,
      incricaoEstadual: null,
      orgaoPublico: null,
      dataNascimento: null,
      nomeSocial: null,
      enderecos: [
        {
          id: null,
          uf: resposta.address.state,
          cep: resposta.address.zip,
          cidade: resposta.address.city,
          bairro: resposta.address.district,
          rua: resposta.address.street,
          numero: resposta.address.number,
          complemento: null,
          referencia: null,
          tipoEndereco: null,
          principal: false
        },
      ],
    };
  }

  private formatarCnpjECpf(dado: string): string {
    var dadoFormatado = dado.replaceAll('.', ''),
      dadoFormatado = dadoFormatado.replaceAll('/', '');
    dadoFormatado = dadoFormatado.replaceAll('-', '');
    return dadoFormatado;
  }

  public removerInformacoesClienteSeInputForAlteradoEClienteEncontrado(
    event: any
  ): void {
    if (this.dadosClienteEncontrados) {
      this.resetarCliente();
    }
  }
  public selecionarDocumento(event: SelectButtonChangeEvent) {
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
        new FormControl('', [Validators.required])
      );
    } else {
      this.formularioInformacoesPessoaisSelecionado =
        this.formularioInformacoesPessoaisCNPJ;
      this.formularioDocumento.removeControl('cpf');
      this.formularioDocumento.addControl(
        'cnpj',
        new FormControl('', [Validators.required, validarDocumentoCNPJ])
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
    this.avancarStepperEvent.emit(this.cliente);
  }
}
