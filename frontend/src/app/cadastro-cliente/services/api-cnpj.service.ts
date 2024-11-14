import { Injectable } from '@angular/core';
import { ResponseApiCnpj } from '../../shared/types/api-cnpj';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCnpjService {

  constructor(private readonly httpClient: HttpClient) { }

  public consultarCNPJ(cnpj: string): Observable<ResponseApiCnpj> {
    var url = `https://receitaws.com.br/v1/cnpj/${cnpj}`;
    // var url = `/v1/cnpj/${cnpj}`;
    return this.httpClient.get<ResponseApiCnpj>(url);
  }
}
