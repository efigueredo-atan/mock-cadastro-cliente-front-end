import { FormControl, ValidationErrors } from "@angular/forms";

export function validarDocumento(control: FormControl<string>): ValidationErrors {
    if(!control.value) {
        return { "erro": true};
    }
    console.log(control.value);
    let valor = control.value.replaceAll("_", "");
    valor = valor.replaceAll(".", "");
    console.log(valor);
    if(valor.length < 12) {
        return { "erro": true}
    }
    return null;
}