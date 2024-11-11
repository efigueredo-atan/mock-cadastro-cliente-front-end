import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Endereco, ufs, ViaCepResponse } from '../../shared/types/types';

@Injectable({
  providedIn: 'root',
})
export class FormEnderecoService {
  private _formularioEndereco: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.criarFormulario();
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

  public desabilitarCampos(cep: boolean): void {
    if(cep) {
      this._formularioEndereco.get("cep")?.disable();
    } else {
      this._formularioEndereco.get("cep")?.enable();
    }
    this._formularioEndereco.get('rua')?.disable();
    this._formularioEndereco.get('numero')?.disable();
    this._formularioEndereco.get('complemento')?.disable();
    this._formularioEndereco.get('bairro')?.disable();
    this._formularioEndereco.get('cidade')?.disable();
    this._formularioEndereco.get('uf')?.disable();
    this._formularioEndereco.get('referencia').disable();
  }

  public habilitarCampos(): void {
    this._formularioEndereco.get('rua')?.enable();
    this._formularioEndereco.get('numero')?.enable();
    this._formularioEndereco.get('complemento')?.enable();
    this._formularioEndereco.get('bairro')?.enable();
    this._formularioEndereco.get('cidade')?.enable();
    this._formularioEndereco.get('uf')?.enable();
    this._formularioEndereco.get('referencia').enable();
  }

  public obterObjetoEndereco(id?: string): Endereco {
    return {
      cep: this._formularioEndereco.get('cep').value,
      rua: this._formularioEndereco.get('rua').value,
      numero: this._formularioEndereco.get('numero').value,
      complemento: this._formularioEndereco.get('complemento').value,
      bairro: this._formularioEndereco.get('bairro').value,
      cidade: this._formularioEndereco.get('cidade').value,
      uf: this._formularioEndereco.get('uf').value,
      referencia: this._formularioEndereco.get("referencia").value,
      id: id
    };
  }

  public preencherFormularioComEndereco(endereco: Endereco): void {
    this._formularioEndereco.patchValue({
      cep: endereco.cep,
      rua: endereco.rua,
      numero: endereco.numero,
      complemento: endereco.complemento,
      bairro: endereco.bairro,
      cidade: endereco.cidade,
      uf: endereco.uf,
      referencia: endereco.referencia
    })
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
      referencia: [null]
    });
  }
}
