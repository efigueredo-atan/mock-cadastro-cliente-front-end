import { TestBed } from '@angular/core/testing';

import { FormEnderecoService } from './form-endereco.service';

describe('FormEnderecoService', () => {
  let service: FormEnderecoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormEnderecoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
