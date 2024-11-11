import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Cliente } from '../../../../shared/types/types';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class CadastroClienteComponent {
  public cliente: Cliente = null;
  public stepAtivo: number = 0;

  public avancarStep(event: any) {
    this.stepAtivo++;
  }

  public voltarStep(event: any) {
    this.stepAtivo--;
  }
}