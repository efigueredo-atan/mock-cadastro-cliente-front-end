import { FormControl, ValidationErrors } from "@angular/forms";

export function validarDocumentoCPF(control: FormControl<string>): ValidationErrors {
    if(!control.value) {
        return { "erro": true};
    }
    let valor = control.value.replaceAll("_", "");
    valor = valor.replaceAll(".", "");
    if(valor.length < 12) {
        return { "erro": true}
    }
    return null;
}

export function validarDocumentoCNPJ(control: FormControl<string>): ValidationErrors {
    if(!control.value) {
        return { "erro": true};
    }
    let valor = control.value.replaceAll("_", "");
    valor = valor.replaceAll(".", "");
    if(valor.length < 16) {
        return { "erro": true}
    }
    return null;
}