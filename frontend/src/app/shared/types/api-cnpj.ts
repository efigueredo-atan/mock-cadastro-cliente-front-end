export interface ResponseApiCnpj {
  status: string
  ultima_atualizacao: string
  cnpj: string
  tipo: string
  porte: string
  nome: string
  fantasia: string
  abertura: string
  atividade_principal: AtividadePrincipal[]
  atividades_secundarias: AtividadesSecundaria[]
  natureza_juridica: string
  logradouro: string
  numero: string
  complemento: string
  cep: string
  bairro: string
  municipio: string
  uf: string
  email: string
  telefone: string
  efr: string
  situacao: string
  data_situacao: string
  motivo_situacao: string
  situacao_especial: string
  data_situacao_especial: string
  capital_social: string
  qsa: Qsa[]
  simples: Simples
  simei: Simei
  billing: Billing
}

export interface AtividadePrincipal {
  code: string
  text: string
}

export interface AtividadesSecundaria {
  code: string
  text: string
}

export interface Qsa {
  nome: string
  qual: string
  pais_origem: string
  nome_rep_legal: string
  qual_rep_legal: string
}

export interface Simples {
  optante: boolean
  data_opcao: string
  data_exclusao: string
  ultima_atualizacao: string
}

export interface Simei {
  optante: boolean
  data_opcao: string
  data_exclusao: string
  ultima_atualizacao: string
}

export interface Billing {
  free: boolean
  database: boolean
}
