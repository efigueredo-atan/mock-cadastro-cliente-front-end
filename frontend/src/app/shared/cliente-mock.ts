import { Cliente, Genero } from "./types/types";

export let cliente: Cliente = {
    nome: "Maria",
    sobrenome: "Silva",
    cpf: "12345678910",
    genero: Genero.FEMININO,
    rg: "123.456.789-10",
    dataNascimento: new Date(),
    cnpj: "2311321311",
    incricaoEstadual: "1231",
    orgaoPublico: "12313",
    contatos: null,
    nomeSocial: "Maria Silva"
}