import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Cliente } from '../../../../shared/types/types';
import { cliente } from '../../../../shared/cliente-mock';
import { Step } from '../step.inteface';
import { EventEmitterService } from '../../../../services/event-emitter.service';

@Component({
  selector: 'app-step-historico-cliente',
  templateUrl: './step-historico-cliente.component.html',
  styleUrl: './step-historico-cliente.component.css',
})
export class StepHistoricoClienteComponent implements Step, OnInit, OnDestroy {
  @Output() public voltarStepperEvent: EventEmitter<Cliente> =
    new EventEmitter();
  @Input() public cliente: Cliente = null;
  public indexStep: number = 2;
  public eventoTrocarStep$: EventEmitter<any>;

  public ngOnInit(): void {
    this.obterEventoTrocarStep();
    this.escutarEventoTrocarStep();
  }

  public ngOnDestroy(): void {
    this.eventoTrocarStep$ ? this.eventoTrocarStep$.unsubscribe() : null;
  }

  public obterEventoTrocarStep(): void {
    this.eventoTrocarStep$ = EventEmitterService.get('eventoTrocarStep');
  }

  public escutarEventoTrocarStep(): void {
    this.eventoTrocarStep$.subscribe((resposta) => {
      if (resposta.index == this.indexStep) {
        console.log('step endereços');
      }
    });
  }

  public voltarStep(): void {
    this.emitirEventoTrocarStep(this.indexStep - 1);
  }

  public avancarStep(): void {
    this.emitirEventoTrocarStep(this.indexStep + 1);
  }

  public emitirEventoTrocarStep(index: number): void {
    EventEmitterService.get('eventoTrocarStep').emit({
      index: index,
      cliente: this.cliente,
    });
  }
}
