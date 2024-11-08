import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoTabelaComponent } from './endereco-tabela.component';

describe('EnderecoTabelaComponent', () => {
  let component: EnderecoTabelaComponent;
  let fixture: ComponentFixture<EnderecoTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnderecoTabelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnderecoTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
