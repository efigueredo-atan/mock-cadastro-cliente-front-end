export enum Genero {
  MASCULINO = 'Masculino',
  FEMININO = 'Feminino',
  OUTRO = 'Outro',
}

export interface Cliente {
  nome: string | null; 
  nomeFantasia: string | null; 
  razaoSocial: string | null; 
  dataFundacao: string | null; 
  sobrenome: string | null; 
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
  cep: string | null;
  rua: string | null;
  numero: number | string | null;
  complemento: string | null;
  uf: string | null;
  cidade: string | null;
  bairro: string | null;
  referencia: string | null;
  tipoEndereco: string | null;
  principal: boolean | null;
}

export interface Contato {
  telefone1: string | null;
  telefone2: string | null;
  email: string | null;
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

