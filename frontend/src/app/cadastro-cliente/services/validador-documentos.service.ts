import { Injectable } from '@angular/core';
import { isValidCPF, validCNPJ } from '../../shared/util/fuctions';

@Injectable({
  providedIn: 'root'
})
export class ValidadorDocumentosService {

  constructor() { }

  public validarCPF(cpf: string): ErroFormularioDocumento {
    if (!isValidCPF(cpf)) {
      return {
        errorCPF: true,
        errorCNPJ: false,
        mensagem: '*CPF inválido',
      };
    }
    return this.objetoErroFormularioDocumentoVazio();
  }

  public validarCNPJ(cnpj: string): ErroFormularioDocumento {
    if (!validCNPJ(cnpj)) {
      return {
        errorCPF: false,
        errorCNPJ: true,
        mensagem: '*CNPJ inválido',
      };
    }
    return this.objetoErroFormularioDocumentoVazio();
  }

  public objetoErroFormularioDocumentoVazio(): ErroFormularioDocumento {
    return {
      errorCPF: false,
      errorCNPJ: false,
      mensagem: '',
    };
  }
}

export interface ErroFormularioDocumento {
  errorCPF: boolean;
  errorCNPJ: boolean;
  mensagem: string;
}
