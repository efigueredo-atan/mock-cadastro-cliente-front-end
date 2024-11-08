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
  dataNascimento: Date | null;
  contatos: Contato | null;
  nomeSocial: string | null;
  enderecos: Endereco[] | null;
}

export interface Endereco {
  cep: string;
  endereco: string;
  numero: number;
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

const ufs = [
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
