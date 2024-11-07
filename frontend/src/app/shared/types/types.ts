export enum Genero {
    MASCULINO = "Masculino",
    FEMININO = "Feminino",
    OUTRO = "Outro"
}

export interface Cliente {
    nome: string;
    sobrenome: string;
    cpf: string| null;
    genero: string | null;
    rg: string | null;
    cnpj: string| null;
    incricaoEstadual: string| null;
    orgaoPublico: string | null;
    dataNascimento: Date | null
    contatos: Contato[]| null;
    nomeSocial: string | null;
}

export interface Contato {
    numero: string;
    email: string;
}

export enum TiposToastMensssages {
    INFO = 'info',
    SUCCESS = 'success',
    WARNING = 'warning',
    DANGER = 'danger',
    SECONDARY = 'secondary',
    CONTRAST = 'constrast'
}