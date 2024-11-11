import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepHistoricoClienteComponent } from './step-historico-cliente.component';

describe('StepHistoricoClienteComponent', () => {
  let component: StepHistoricoClienteComponent;
  let fixture: ComponentFixture<StepHistoricoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepHistoricoClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepHistoricoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
