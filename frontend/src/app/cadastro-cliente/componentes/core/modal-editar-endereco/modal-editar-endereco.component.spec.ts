import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarEnderecoComponent } from './modal-editar-endereco.component';

describe('ModalEditarEnderecoComponent', () => {
  let component: ModalEditarEnderecoComponent;
  let fixture: ComponentFixture<ModalEditarEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalEditarEnderecoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
