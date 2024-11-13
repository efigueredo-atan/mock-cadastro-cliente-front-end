import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validarDocumentoCPF } from '../../shared/validators/custom-validators';
import { Cliente } from '../../shared/types/types';

@Injectable({
  providedIn: 'root',
})
export class FormCadastroClienteService {
  private _formularioInformacoesPessoaisCPF!: FormGroup;
  private _formularioInformacoesPessoaisCNPJ!: FormGroup;
  private _formularioDocumento!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.criarFormularioTipoDocumento();
    this.criarFormularioDadosPessoaisCPF();
    this.criarFormularioDadosPessoaisCNPJ();
  }

  public get formularioInformacoesPessoaisCPF(): FormGroup {
    return this._formularioInformacoesPessoaisCPF;
  }

  public get formularioInformacoesPessoaisCNPJ(): FormGroup {
    return this._formularioInformacoesPessoaisCNPJ;
  }

  public get formularioDocumento(): FormGroup {
    return this._formularioDocumento;
  }

  public criarFormularioTipoDocumento(): void {
    this._formularioDocumento = this.formBuilder.group({
      cpf: [null, [validarDocumentoCPF]],
      documentoSelecionado: ['cpf', [Validators.required]],
    });
  }

  public criarFormularioDadosPessoaisCPF(): void {
    this._formularioInformacoesPessoaisCPF = this.formBuilder.group({
      nome: [null, [Validators.required]],
      sobrenome: [null],
      genero: [null, [Validators.required]],
      dataNascimento: [null, [Validators.required]],
      nomeSocial: [null],
      rg: [null, [Validators.required, validarDocumentoCPF]],
      telefone1: [null, [Validators.required]],
      telefone2: [null],
      email: [null, [Validators.required, Validators.email]],
      orgaoPublico: [null, Validators.required],
      funcionario: [false],
      ativo: [false]
    });
  }

  public criarFormularioDadosPessoaisCNPJ(): void {
    this._formularioInformacoesPessoaisCNPJ = this.formBuilder.group({
      genero: [null, [Validators.required]],
      incricaoEstadual: [null, [Validators.required]],
      telefone1: [null, [Validators.required]],
      telefone2: [null],
      email: [null, [Validators.required, Validators.email]],
      razaoSocial: [null, [Validators.required]],
      nomeFantasia: [null, [Validators.required]],
      dataFundacao: [null, [Validators.required]],
    });
  }

  public desabilitarCamposCPF(): void {
    this._formularioInformacoesPessoaisCPF.get('nome')?.disable();
    this._formularioInformacoesPessoaisCPF.get('sobrenome')?.disable();
    this._formularioInformacoesPessoaisCPF.get('rg')?.disable();
    this._formularioInformacoesPessoaisCPF.get('dataNascimento')?.disable();
    this._formularioInformacoesPessoaisCPF.get('genero')?.disable();
    this._formularioInformacoesPessoaisCPF.get('nomeSocial')?.disable();
    this._formularioInformacoesPessoaisCPF.get('telefone1')?.disable();
    this._formularioInformacoesPessoaisCPF.get('telefone2')?.disable();
    this._formularioInformacoesPessoaisCPF.get('email')?.disable();
    this._formularioInformacoesPessoaisCPF.get('orgaoPublico')?.disable();
    this._formularioInformacoesPessoaisCPF.get('funcionario')?.disable();
    this._formularioInformacoesPessoaisCPF.get('ativo')?.disable();
  }

  public desabilitarCamposCNPJ(): void {
    this._formularioInformacoesPessoaisCNPJ.get('genero')?.disable();
    this._formularioInformacoesPessoaisCNPJ.get('incricaoEstadual')?.disable();
    this._formularioInformacoesPessoaisCNPJ.get('telefone1')?.disable();
    this._formularioInformacoesPessoaisCNPJ.get('telefone2')?.disable();
    this._formularioInformacoesPessoaisCNPJ.get('email')?.disable();
    this._formularioInformacoesPessoaisCNPJ.get('razaoSocial')?.disable();
    this._formularioInformacoesPessoaisCNPJ.get('nomeFantasia')?.disable();
    this._formularioInformacoesPessoaisCNPJ.get('dataFundacao')?.disable();
  }

  public habilitarCamposCPF(): void {
    this._formularioInformacoesPessoaisCPF.get('nome')?.enable();
    this._formularioInformacoesPessoaisCPF.get('sobrenome')?.enable();
    this._formularioInformacoesPessoaisCPF.get('rg')?.enable();
    this._formularioInformacoesPessoaisCPF.get('dataNascimento')?.enable();
    this._formularioInformacoesPessoaisCPF.get('genero')?.enable();
    this._formularioInformacoesPessoaisCPF.get('nomeSocial')?.enable();
    this._formularioInformacoesPessoaisCPF.get('telefone1')?.enable();
    this._formularioInformacoesPessoaisCPF.get('telefone2')?.enable();
    this._formularioInformacoesPessoaisCPF.get('email')?.enable();
    this._formularioInformacoesPessoaisCPF.get('orgaoPublico')?.enable();
    this._formularioInformacoesPessoaisCPF.get('funcionario')?.enable();
    this._formularioInformacoesPessoaisCPF.get('ativo')?.enable();
  }

  public habilitarCamposCNPJ(): void {
    this._formularioInformacoesPessoaisCNPJ.get('genero')?.enable();
    this._formularioInformacoesPessoaisCNPJ.get('incricaoEstadual')?.enable();
    this._formularioInformacoesPessoaisCNPJ.get('telefone1')?.enable();
    this._formularioInformacoesPessoaisCNPJ.get('telefone2')?.enable();
    this._formularioInformacoesPessoaisCNPJ.get('email')?.enable();
    this._formularioInformacoesPessoaisCNPJ.get('razaoSocial')?.enable();
    this._formularioInformacoesPessoaisCNPJ.get('nomeFantasia')?.enable();
    this._formularioInformacoesPessoaisCNPJ.get('dataFundacao')?.enable();
  }

  public atualizarFormularioInformacoesPessoaisCPF(cliente: Cliente): void {
    this._formularioInformacoesPessoaisCPF.patchValue({
      nome: cliente.nome,
      sobrenome: cliente.sobrenome,
      dataNascimento: cliente.dataNascimento,
      genero: cliente.genero,
      nomeSocial: cliente.nomeSocial,
      rg: cliente.rg,
      telefone1: cliente.contatos.telefone1,
      telefone2: cliente.contatos.telefone2,
      email: cliente.contatos.email,
      funcionario: cliente.funcionario,
      ativo: cliente.ativo,
    });
  }

  public atualizarFormularioInformacoesPessoaisCNPJ(cliente: Cliente): void {
    this._formularioInformacoesPessoaisCNPJ.patchValue({
      razaoSocial: cliente.razaoSocial,
      dataFundacao: cliente.dataFundacao,
      genero: cliente.genero,
      incricaoEstadual: cliente.incricaoEstadual,
      telefone1: cliente.contatos.telefone1,
      telefone2: cliente.contatos.telefone2,
      email: cliente.contatos.email,
      nomeFatasia: cliente.nomeFantasia
    });
  }
}
