import { TestBed } from '@angular/core/testing';

import { FormPesquisaProdutoService } from './form-pesquisa-produto.service';

describe('FormPesquisaProdutoService', () => {
  let service: FormPesquisaProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormPesquisaProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
