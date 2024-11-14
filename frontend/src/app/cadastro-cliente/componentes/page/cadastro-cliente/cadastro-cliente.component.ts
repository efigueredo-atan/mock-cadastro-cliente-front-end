import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Cliente } from '../../../../shared/types/types';
import { EventEmitterService } from '../../../../services/event-emitter.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class CadastroClienteComponent implements OnInit {
  public cliente: Cliente = null;
  public stepAtivo: number = 0;

  
  public ngOnInit(): void {
    this.escutarEventoTrocarStep();
  }
  
  public escutarEventoTrocarStep(): void {
    EventEmitterService.get("eventoTrocarStep").subscribe(obj => {
      this.stepAtivo = obj.index;
      this.cliente = obj.cliente;
    })
  }
}