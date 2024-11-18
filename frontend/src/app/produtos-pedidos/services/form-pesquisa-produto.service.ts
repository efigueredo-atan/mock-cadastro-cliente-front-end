import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormPesquisaProdutoService {
  private _formularioPesquisaProduto: FormGroup;
  constructor(private readonly formBuilder: FormBuilder) {
    this.construirFormulario();
  }

  public get formularioPesquisaProduto(): FormGroup {
    return this._formularioPesquisaProduto;
  }

  private construirFormulario(): void {
    this._formularioPesquisaProduto = this.formBuilder.group({
      produto: [null],
      filtro: ['todos'],
      departamento: [null]
    });
  }
}
