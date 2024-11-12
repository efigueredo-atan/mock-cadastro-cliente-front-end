import { Cliente, Genero } from "./types/types";

export let cliente: Cliente = {
    nome: "Maria",
    sobrenome: "Silva",
    cpf: "12345678910",
    genero: Genero.FEMININO,
    rg: "123.456.789-10",
    dataNascimento: "28/06/2003",
    cnpj: "2311321311",
    incricaoEstadual: "1231",
    orgaoPublico: "12313",
    nomeSocial: "Maria Silva",
    contatos: {
        telefone1: '(11) 97625-6212',
        telefone2: '(87) 99999-9999',
        email: 'email@atan.com.br'
    },
    enderecos: [
        {
            id: "1",
            cep: "56640000",
            rua: "Rua Ademar Bezerra de Lima",
            numero: 2020,
            complemento: "Casa",
            uf: "PE",
            cidade: "Custódia",
            bairro: "Rodoviária",
            referencia: "Próximo a estação de energia"
        },
        {
            id: "2",
            cep: "56640000",
            rua: "Rua Ademar Bezerra de Lima1",
            numero: 2020,
            complemento: "Casa",
            uf: "PE",
            cidade: "Custódia",
            bairro: "Rodoviária",
            referencia: "Próximo a estação de energia"
        },
        {
            id: "3",
            cep: "56640000",
            rua: "Rua Ademar Bezerra de Lima2",
            numero: 2020,
            complemento: "Casa",
            uf: "PE",
            cidade: "Custódia",
            bairro: "Rodoviária",
            referencia: "Próximo a estação de energia"
        },
    ]
}