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
  funcionario: boolean | null;
  ativo: boolean | null;
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

export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  valor: number;
  estoque: number;
  urlImagem: string;
  inseridoNoAtendimento: boolean;
  departamento: Departamento;
}

export interface ProdutoAtendimento {
  produto: Produto,
  qtdAtendimento: number
}

export interface Atendimento {
  id: string;
  valorTotalComDesconto: number;
  valorTotalSemDesconto: number;
  descontoAtendimentoNumerico: number;
  descontoAtendimentoPorcentagem: number;
  descontoDosProdutos: number;
  descontoTotal: number;
  produtos: ProdutoAtendimento[];
  qtdItens: number;
  qtdProdutos: number;
}

export enum Departamento {
  INFORMATICA = "Informática",
  ESPUMA = 'Espuma',
  ANTENA = 'Antena',
  ELETRODOMESTICOS = 'Eletrodomésticos',
  ELETROPORTATEIS = 'Eletroportáteis',
  MOVEIS = 'Móveis',
  DECORACAO = 'Decoração',
  UTILIDADES = 'Utilidades',
  SAUDE = 'Saúde',
  INFANTIL = 'Infantil',
  GAMER = 'Gamer'
}

export enum TipoFiltro {
  DEPARTAMENTO = 'Departamento',
  LINHA = 'Linha',
  GRUPO = 'Grupo',
  SUBGRUPO = 'Subgrupo',
  CARACTERISTICAS = 'Características'

}

export interface Filtro {
  tipoFiltro: TipoFiltro,
  valor: string; 
}