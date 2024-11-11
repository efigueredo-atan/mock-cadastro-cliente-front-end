import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViaCepResponse } from '../../shared/types/types';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {
  constructor(private readonly httpClient: HttpClient) { }

  public obterDadosViaCep(cep: string): Observable<ViaCepResponse> {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    return this.httpClient.get<ViaCepResponse>(url);
  }
}
