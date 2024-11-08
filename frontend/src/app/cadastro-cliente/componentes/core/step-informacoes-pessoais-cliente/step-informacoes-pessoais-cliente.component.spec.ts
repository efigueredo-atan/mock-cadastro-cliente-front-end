import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepInformacoesPessoaisClienteComponent } from './step-informacoes-pessoais-cliente.component';

describe('StepInformacoesPessoaisClienteComponent', () => {
  let component: StepInformacoesPessoaisClienteComponent;
  let fixture: ComponentFixture<StepInformacoesPessoaisClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepInformacoesPessoaisClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepInformacoesPessoaisClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
