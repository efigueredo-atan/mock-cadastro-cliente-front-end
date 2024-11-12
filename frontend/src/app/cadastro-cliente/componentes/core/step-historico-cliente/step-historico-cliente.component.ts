import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from '../../../../shared/types/types';
import { cliente } from '../../../../shared/cliente-mock';

@Component({
  selector: 'app-step-historico-cliente',
  templateUrl: './step-historico-cliente.component.html',
  styleUrl: './step-historico-cliente.component.css'
})
export class StepHistoricoClienteComponent {
  @Output() public voltarStepperEvent: EventEmitter<Cliente> = new EventEmitter();
  @Input() public cliente: Cliente = cliente;

  public emitirEventoVoltarStepper(): void {
    this.voltarStepperEvent.emit(this.cliente);
  }

}
