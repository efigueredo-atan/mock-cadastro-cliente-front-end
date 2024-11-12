export interface ResponseApiCnpj {
    updated: string
    taxId: string
    alias: any
    founded: string
    head: boolean
    company: Company
    statusDate: string
    status: Status
    address: Address
    mainActivity: MainActivity
    phones: Phone[]
    emails: Email[]
    sideActivities: any[]
    registrations: any[]
    suframa: any[]
  }
  
  export interface Company {
    members: any[]
    id: number
    name: string
    equity: number
    nature: Nature
    size: Size
    simples: Simples
    simei: Simei
  }
  
  export interface Nature {
    id: number
    text: string
  }
  
  export interface Size {
    id: number
    acronym: string
    text: string
  }
  
  export interface Simples {
    optant: boolean
    since: string
  }
  
  export interface Simei {
    optant: boolean
    since: string
  }
  
  export interface Status {
    id: number
    text: string
  }
  
  export interface Address {
    municipality: number
    street: string
    number: string
    district: string
    city: string
    state: string
    details: any
    zip: string
    country: Country
  }
  
  export interface Country {
    id: number
    name: string
  }
  
  export interface MainActivity {
    id: number
    text: string
  }
  
  export interface Phone {
    area: string
    number: string
  }
  
  export interface Email {
    address: string
    domain: string
  }
  