import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ufs, ViaCepResponse } from '../../shared/types/types';

@Injectable({
  providedIn: 'root',
})
export class FormEnderecoService {
  private _formularioEndereco: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.criarFormulario();
    this.desabilitarCampos();
  }

  public get formularioEndereco(): FormGroup {
    return this._formularioEndereco;
  }

  public inserirDadosVIACEPNoFormulario(viaCepResponse: ViaCepResponse): void {
    this.formularioEndereco.patchValue({
      uf: viaCepResponse.uf,
      cidade: viaCepResponse.localidade,
      complemento: viaCepResponse.complemento,
      bairro: viaCepResponse.bairro,
      rua: viaCepResponse.logradouro
    })
  }

  public desabilitarCampos(): void {
    this._formularioEndereco.get('rua')?.disable();
    this._formularioEndereco.get('numero')?.disable();
    this._formularioEndereco.get('complemento')?.disable();
    this._formularioEndereco.get('bairro')?.disable();
    this._formularioEndereco.get('cidade')?.disable();
    this._formularioEndereco.get('uf')?.disable();
  }

  public habilitarCampos(): void {
    this._formularioEndereco.get('rua')?.enable();
    this._formularioEndereco.get('numero')?.enable();
    this._formularioEndereco.get('complemento')?.enable();
    this._formularioEndereco.get('bairro')?.enable();
    this._formularioEndereco.get('cidade')?.enable();
    this._formularioEndereco.get('uf')?.enable();
  }

  private criarFormulario(): void {
    this._formularioEndereco = this.formBuilder.group({
      cep: [null, [Validators.minLength(10), Validators.required]],
      rua: [null, [Validators.required]],
      numero: [null, [Validators.required]],
      complemento: [null, [Validators.required]],
      bairro: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      uf: [null, [Validators.required]],
    });
  }
}
