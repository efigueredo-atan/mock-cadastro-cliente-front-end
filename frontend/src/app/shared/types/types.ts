export enum Genero {
  MASCULINO = 'Masculino',
  FEMININO = 'Feminino',
  OUTRO = 'Outro',
}

export interface Cliente {
  nome: string;
  sobrenome: string;
  cpf: string | null;
  genero: string | null;
  rg: string | null;
  cnpj: string | null;
  incricaoEstadual: string | null;
  orgaoPublico: string | null;
  dataNascimento: string | null;
  contatos: Contato | null;
  nomeSocial: string | null;
  enderecos: Endereco[] | null;
}

export interface Endereco {
  id: string | null;
  cep: string;
  rua: string;
  numero: number | string;
  complemento: string;
  uf: string;
  cidade: string;
  bairro: string;
  referencia: string;
}

export interface Contato {
  telefone1: string;
  telefone2: string;
  email: string;
}

export enum TiposToastMensssages {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  SECONDARY = 'secondary',
  CONTRAST = 'constrast',
}

export const ufs = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MS',
  'MT',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
];

export interface ViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro: string;
}

