import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemCampoObrigatorioComponent } from './mensagem-campo-obrigatorio.component';

describe('MensagemCampoObrigatorioComponent', () => {
  let component: MensagemCampoObrigatorioComponent;
  let fixture: ComponentFixture<MensagemCampoObrigatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MensagemCampoObrigatorioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensagemCampoObrigatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
