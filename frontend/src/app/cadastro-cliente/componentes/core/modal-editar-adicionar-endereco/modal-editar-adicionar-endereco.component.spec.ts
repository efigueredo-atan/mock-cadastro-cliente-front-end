import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarAdicionarEnderecoComponent } from './modal-editar-adicionar-endereco.component';

describe('ModalEditarAdicionarEnderecoComponent', () => {
  let component: ModalEditarAdicionarEnderecoComponent;
  let fixture: ComponentFixture<ModalEditarAdicionarEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalEditarAdicionarEnderecoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarAdicionarEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
