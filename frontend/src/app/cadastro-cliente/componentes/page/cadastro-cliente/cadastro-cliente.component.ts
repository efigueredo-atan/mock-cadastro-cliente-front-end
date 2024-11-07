import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
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
import { MessageService } from 'primeng/api';
import { cliente } from '../../../../shared/cliente-mock';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class CadastroClienteComponent implements OnInit {
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
  public stepAtivo: number = 0;

  public formularioInformacoesPessoaisCPF!: FormGroup;
  public formularioInformacoesPessoaisCNPJ!: FormGroup;
  public formularioInformacoesContato!: FormGroup;
  public formularioDocumento!: FormGroup;

  public formularioInformacoesPessoaisSelecionado: FormGroup = this.formularioInformacoesPessoaisCPF;

  public consultandoDocumentos = false;
  public dadosClienteEncontrados = false;
  public modoEdicaoDados = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private messageService: MessageService
  ) {}

  public ngOnInit(): void {
    this.criarFormularioTipoDocumento();
    this.criarFormularioDadosPessoaisCPF();
    this.criarFormularioDadosPessoaisCNPJ();
    this.criarFormularioInformacoesContato();
    this.formularioInformacoesPessoaisSelecionado = this.formularioInformacoesPessoaisCPF;
    this.desabilitarCamposCPF();
    this.desabilitarCamposCNPJ();
  }

  public habilitarModoEdicao(): void {
    this.modoEdicaoDados = true;
    if(this.documentoSelecionado == 'cpf') {
      this.habilitarCamposCPF();
    } else {
      this.habilitarCamposCNPJ();
    }
  }

  public salvarAlteracoes(): void {
    this.modoEdicaoDados = false;
    if(this.documentoSelecionado == 'cpf') {
      this.desabilitarCamposCPF();
    } else {
      this.desabilitarCamposCNPJ();
    }
  }

  public validarDocumento(): void {
    // Validar no phroteus se existe usuario
    // Se nao houver obter dados na API da receita federal

    this.consultandoDocumentos = true;
    this.dadosClienteEncontrados = false;
    setTimeout(() => {
      this.consultandoDocumentos = false;
      this.dadosClienteEncontrados = true;
      this.cliente = cliente;
      if(this.documentoSelecionado == 'cpf') {
        this.atualizarFormularioInformacoesPessoaisCPF(this.cliente);
      } else {
        this.atualizarFormularioInformacoesPessoaisCNPJ(this.cliente);
      }
      console.log(this.formularioInformacoesPessoaisSelecionado)
      console.log(this.formularioInformacoesPessoaisSelecionado.valid)
    }, 1000);
  }

  public selecionarDocumento(event: SelectButtonChangeEvent) {
    this.documentoSelecionado = event.value;
    this.formularioDocumento.value.documentoSelecionado = event.value;
    this.cliente = null;
    this.dadosClienteEncontrados = false;
    if(this.documentoSelecionado == 'cpf') {
      this.formularioInformacoesPessoaisSelecionado = this.formularioInformacoesPessoaisCPF;
      this.formularioDocumento.removeControl('cnpj');
      this.formularioDocumento.addControl(
        'cpf',
        new FormControl(null, [Validators.required, validarDocumentoCPF])
      );
    } else {
      this.formularioInformacoesPessoaisSelecionado = this.formularioInformacoesPessoaisCNPJ;
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

  private criarFormularioDadosPessoaisCPF(): void {
    this.formularioInformacoesPessoaisCPF = this.formBuilder.group({
      nome: [null, [Validators.required]],
      sobrenome: [null, [Validators.required]],
      genero: [null, [Validators.required]],
      dataNascimento: [null, [Validators.required]],
      nomeSocial: [null],
      rg: [null, [Validators.required, validarDocumentoCPF]]
    });
  }

  private criarFormularioDadosPessoaisCNPJ(): void {
    this.formularioInformacoesPessoaisCNPJ = this.formBuilder.group({
      nome: [null, [Validators.required]],
      sobrenome: [null, [Validators.required]],
      genero: [null, [Validators.required]],
      dataNascimento: [null, [Validators.required]],
      nomeSocial: [null],
      incricaoEstadual: [null, [Validators.required]],
      orgaoPublico: [null, Validators.required]
    });
  }

  private criarFormularioInformacoesContato(): void {
    this.formularioInformacoesContato = this.formBuilder.group({
      telefone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  private criarFormularioTipoDocumento(): void {
    this.formularioDocumento = this.formBuilder.group({
      cpf: [null, [validarDocumentoCPF]],
      documentoSelecionado: ['cpf', [Validators.required]]
    });
  }

  private desabilitarCamposCPF(): void {
    this.formularioInformacoesPessoaisCPF.get('nome')?.disable();
    this.formularioInformacoesPessoaisCPF.get('sobrenome')?.disable();
    this.formularioInformacoesPessoaisCPF.get('rg')?.disable();
    this.formularioInformacoesPessoaisCPF.get('dataNascimento')?.disable();
    this.formularioInformacoesPessoaisCPF.get('genero')?.disable();
    this.formularioInformacoesPessoaisCPF.get('nomeSocial')?.disable();
  }

  private desabilitarCamposCNPJ(): void {
    this.formularioInformacoesPessoaisCNPJ.get('nome')?.disable();
    this.formularioInformacoesPessoaisCNPJ.get('sobrenome')?.disable();
    this.formularioInformacoesPessoaisCNPJ.get('dataNascimento')?.disable();
    this.formularioInformacoesPessoaisCNPJ.get('genero')?.disable();
    this.formularioInformacoesPessoaisCNPJ.get('nomeSocial')?.disable();
    this.formularioInformacoesPessoaisCNPJ.get('incricaoEstadual')?.disable();
    this.formularioInformacoesPessoaisCNPJ.get('orgaoPublico')?.disable();
  }

  private habilitarCamposCPF(): void {
    this.formularioInformacoesPessoaisCPF.get('nome')?.enable();
    this.formularioInformacoesPessoaisCPF.get('sobrenome')?.enable();
    this.formularioInformacoesPessoaisCPF.get('rg')?.enable();
    this.formularioInformacoesPessoaisCPF.get('dataNascimento')?.enable();
    this.formularioInformacoesPessoaisCPF.get('genero')?.enable();
    this.formularioInformacoesPessoaisCPF.get('nomeSocial')?.enable();
  }

  private habilitarCamposCNPJ(): void {
    this.formularioInformacoesPessoaisCNPJ.get('nome')?.enable();
    this.formularioInformacoesPessoaisCNPJ.get('sobrenome')?.enable();
    this.formularioInformacoesPessoaisCNPJ.get('dataNascimento')?.enable();
    this.formularioInformacoesPessoaisCNPJ.get('genero')?.enable();
    this.formularioInformacoesPessoaisCNPJ.get('nomeSocial')?.enable();
    this.formularioInformacoesPessoaisCNPJ.get('incricaoEstadual')?.enable();
    this.formularioInformacoesPessoaisCNPJ.get('orgaoPublico')?.enable();
  }

  private atualizarFormularioInformacoesPessoaisCPF(cliente: Cliente): void { 
    this.formularioInformacoesPessoaisCPF.patchValue({
      nome: cliente.nome,
      sobrenome: cliente.sobrenome,
      dataNascimento: cliente.dataNascimento,
      genero: cliente.genero,
      nomeSocial: cliente.nomeSocial,
      rg: cliente.rg,
    });
  }

  private atualizarFormularioInformacoesPessoaisCNPJ(cliente: Cliente): void {
    this.formularioInformacoesPessoaisCNPJ.patchValue({
      nome: cliente.nome,
      sobrenome: cliente.sobrenome,
      dataNascimento: cliente.dataNascimento,
      genero: cliente.genero,
      nomeSocial: cliente.nomeSocial,
      incricaoEstadual: cliente.incricaoEstadual,
      orgaoPublico: cliente.orgaoPublico,
    });
  }
}

// {
//   nome: this.formularioInformacoesPessoais.value.nome,
//   sobrenome: this.formularioInformacoesPessoais.value.sobrenome,
//   cpf: this.formularioInformacoesPessoais.value.cpf,
//   rg: this.formularioInformacoesPessoais.value.rg,
//   genero: this.formularioInformacoesPessoais.value.genero,
//   cnpj: this.formularioInformacoesPessoais.value.cnpj,
//   incricaoEstadual: this.formularioInformacoesPessoais.value.incricaoEstadual,
//   orgaoPublico: this.formularioInformacoesPessoais.value.nome,
//   dataNascimento: this.formularioInformacoesPessoais.value.dataNascimento,
//   contato: this.formularioInformacoesPessoais.value.contato,
// }
