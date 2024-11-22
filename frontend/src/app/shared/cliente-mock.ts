import { Cliente, Genero } from './types/types';

export let tiposEnderecosMock: string[] = [
  "01 - Residencial",
  "02 - Profissional",
  "03 - Entrega",
  "04 - Montagem",
  "05 - Cobrança"
];

export let cliente: Cliente = {
  funcionario: true,
  ativo: true,
  nome: 'Maria',
  sobrenome: 'Silva',
  cpf: '12345678910',
  genero: Genero.FEMININO,
  rg: '123.456.789-10',
  dataNascimento: '28/06/2003',
  cnpj: '2311321311',
  incricaoEstadual: '1231',
  orgaoPublico: 'SSP-PE',
  nomeSocial: 'Maria Silva',
  contatos: {
    telefone1: '(11) 97625-6212',
    telefone2: '(87) 99999-9999',
    email: 'email@atan.com.br',
  },
  enderecoSelecionado: {
    id: '1',
    cep: '56640000',
    rua: 'Rua Ademar Bezerra de Lima',
    numero: 2020,
    complemento: 'Casa',
    uf: 'PE',
    cidade: 'Custódia',
    bairro: 'Rodoviária',
    referencia: 'Próximo a estação de energia',
    tipoEndereco: tiposEnderecosMock[0],
    principal: true
  },
  enderecos: [
    {
      id: '1',
      cep: '56640000',
      rua: 'Rua Ademar Bezerra de Lima',
      numero: 2020,
      complemento: 'Casa',
      uf: 'PE',
      cidade: 'Custódia',
      bairro: 'Rodoviária',
      referencia: 'Próximo a estação de energia',
      tipoEndereco: tiposEnderecosMock[0],
      principal: true
    },
    {
      id: '2',
      cep: '56640000',
      rua: 'Rua Ademar Bezerra de Lima1',
      numero: 2020,
      complemento: 'Casa',
      uf: 'PE',
      cidade: 'Custódia',
      bairro: 'Rodoviária',
      referencia: 'Próximo a estação de energia',
      tipoEndereco: tiposEnderecosMock[1],
      principal: false
    },
    {
      id: '3',
      cep: '56640000',
      rua: 'Rua Ademar Bezerra de Lima2',
      numero: 2020,
      complemento: 'Casa',
      uf: 'PE',
      cidade: 'Custódia',
      bairro: 'Rodoviária',
      referencia: 'Próximo a estação de energia',
      tipoEndereco: tiposEnderecosMock[2],
      principal: false
    },
  ],
  nomeFantasia: null,
  razaoSocial: null,
  dataFundacao: null
};
