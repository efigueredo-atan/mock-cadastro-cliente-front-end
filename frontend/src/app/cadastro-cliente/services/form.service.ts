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
    this.desabilitarCamposCPF();
    this.desabilitarCamposCNPJ();
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
    });
  }

  public criarFormularioDadosPessoaisCNPJ(): void {
    this._formularioInformacoesPessoaisCNPJ = this.formBuilder.group({
      nome: [null, [Validators.required]],
      sobrenome: [null],
      genero: [null, [Validators.required]],
      dataNascimento: [null, [Validators.required]],
      nomeSocial: [null],
      incricaoEstadual: [null, [Validators.required]],
      orgaoPublico: [null, Validators.required],
      telefone1: [null, [Validators.required]],
      telefone2: [null],
      email: [null, [Validators.required, Validators.email]],
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
  }

  public desabilitarCamposCNPJ(): void {
    this._formularioInformacoesPessoaisCNPJ.get('nome')?.disable();
    this._formularioInformacoesPessoaisCNPJ.get('sobrenome')?.disable();
    this._formularioInformacoesPessoaisCNPJ.get('dataNascimento')?.disable();
    this._formularioInformacoesPessoaisCNPJ.get('genero')?.disable();
    this._formularioInformacoesPessoaisCNPJ.get('nomeSocial')?.disable();
    this._formularioInformacoesPessoaisCNPJ.get('incricaoEstadual')?.disable();
    this._formularioInformacoesPessoaisCNPJ.get('orgaoPublico')?.disable();
    this._formularioInformacoesPessoaisCNPJ.get('telefone1')?.disable();
    this._formularioInformacoesPessoaisCNPJ.get('telefone2')?.disable();
    this._formularioInformacoesPessoaisCNPJ.get('email')?.disable();
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
  }

  public habilitarCamposCNPJ(): void {
    this._formularioInformacoesPessoaisCNPJ.get('nome')?.enable();
    this._formularioInformacoesPessoaisCNPJ.get('sobrenome')?.enable();
    this._formularioInformacoesPessoaisCNPJ.get('dataNascimento')?.enable();
    this._formularioInformacoesPessoaisCNPJ.get('genero')?.enable();
    this._formularioInformacoesPessoaisCNPJ.get('nomeSocial')?.enable();
    this._formularioInformacoesPessoaisCNPJ.get('incricaoEstadual')?.enable();
    this._formularioInformacoesPessoaisCNPJ.get('orgaoPublico')?.enable();
    this._formularioInformacoesPessoaisCNPJ.get('telefone1')?.enable();
    this._formularioInformacoesPessoaisCNPJ.get('telefone2')?.enable();
    this._formularioInformacoesPessoaisCNPJ.get('email')?.enable();
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
    });
  }

  public atualizarFormularioInformacoesPessoaisCNPJ(cliente: Cliente): void {
    this._formularioInformacoesPessoaisCNPJ.patchValue({
      nome: cliente.nome,
      sobrenome: cliente.sobrenome,
      dataNascimento: cliente.dataNascimento,
      genero: cliente.genero,
      nomeSocial: cliente.nomeSocial,
      incricaoEstadual: cliente.incricaoEstadual,
      orgaoPublico: cliente.orgaoPublico,
      telefone1: cliente.contatos.telefone1,
      telefone2: cliente.contatos.telefone2,
      email: cliente.contatos.email,
    });
  }
}
