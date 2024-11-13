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
  public stepAtivo: number = 1;

  public avancarStep(cliente: Cliente) {
    this.cliente = cliente;
    this.stepAtivo++;
  }

  public voltarStep(cliente: Cliente) {
    this.cliente = cliente;
    this.stepAtivo--;
  }
}