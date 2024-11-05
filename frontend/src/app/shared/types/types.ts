export enum Genero {
    MASCULINO = "Masculino",
    FEMININO = "Feminino",
    OUTRO = "Outro"
}

export interface Cliente {
    nome: string;
    sobrenome: string;
    cpf: string;
    genero: string;
    rg: string;
    cnpj: string;
    incricaoEstadual: string;
    orgaoPublico: string;
    dataNascimento: Date
    contato: Contato;
}

export interface Contato {
    numero: string;
    email: string;
}