import { TestBed } from '@angular/core/testing';

import { ValidadorDocumentosService } from './validador-documentos.service';

describe('ValidadorDocumentosService', () => {
  let service: ValidadorDocumentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidadorDocumentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
