import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepEnderecosClienteComponent } from './step-enderecos-cliente.component';

describe('StepEnderecosClienteComponent', () => {
  let component: StepEnderecosClienteComponent;
  let fixture: ComponentFixture<StepEnderecosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepEnderecosClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepEnderecosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
