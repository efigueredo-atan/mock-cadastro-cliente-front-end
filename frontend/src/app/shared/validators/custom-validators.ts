import { FormControl, ValidationErrors } from '@angular/forms';
import { isValidCPF } from '../util/fuctions';

export function validarDocumentoCPF(
  control: FormControl<string>
): ValidationErrors {
  if (!control.value) {
    return { erro: true };
  }
  let valor = control.value.replaceAll('_', '');
  valor = valor.replaceAll('.', '');
  if (valor.length < 12) {
    return { erro: true };
  }
  return null;
}

export function validarDocumentoCPFValido(
  control: FormControl<string>
): ValidationErrors {
  if (!control.value) {
    return { erro: true };
  }
  let valor = control.value.replaceAll('_', '');
  valor = valor.replaceAll('.', '');
  if (valor.length == 12) {
    let cpfValido = isValidCPF(valor);
    if (cpfValido) {
      return null;
    } else {
      return { erroCPFInvalido: "CPF inválido" };
    }
  }
  return null;
}

export function validarDocumentoCNPJ(
  control: FormControl<string>
): ValidationErrors {
  if (!control.value) {
    return { erro: true };
  }
  let valor = control.value.replaceAll('_', '');
  valor = valor.replaceAll('.', '');
  if (valor.length < 16) {
    return { erro: true };
  }
  return null;
}
