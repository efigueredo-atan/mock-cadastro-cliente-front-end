import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAdicionarProdutoAoAtendimentoComponent } from './dialog-adicionar-produto-ao-atendimento.component';

describe('DialogAdicionarProdutoAoAtendimentoComponent', () => {
  let component: DialogAdicionarProdutoAoAtendimentoComponent;
  let fixture: ComponentFixture<DialogAdicionarProdutoAoAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogAdicionarProdutoAoAtendimentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAdicionarProdutoAoAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
