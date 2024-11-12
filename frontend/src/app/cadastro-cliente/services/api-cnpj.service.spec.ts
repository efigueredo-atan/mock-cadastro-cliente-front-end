import { TestBed } from '@angular/core/testing';

import { ApiCnpjService } from './api-cnpj.service';

describe('ApiCnpjService', () => {
  let service: ApiCnpjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCnpjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
