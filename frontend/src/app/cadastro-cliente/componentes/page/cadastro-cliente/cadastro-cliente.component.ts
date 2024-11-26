import { Component, EventEmitter, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Cliente } from '../../../../shared/types/types';
import { EventEmitterService } from '../../../../services/event-emitter.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class CadastroClienteComponent implements OnInit, OnDestroy {
  public cliente: Cliente = {
    nome: null,
    nomeFantasia: null,
    razaoSocial: null,
    dataFundacao: null,
    sobrenome: null,
    cpf: null,
    genero: null,
    rg: null,
    cnpj: null,
    incricaoEstadual: null,
    orgaoPublico: null,
    dataNascimento: null,
    contatos: null,
    nomeSocial: null,
    enderecos: [],
    funcionario: null,
    ativo: null,
    enderecoSelecionado: null,
  };
  public stepAtivo: number = 0;
  public eventoTrocarStep$: EventEmitter<any>;

  
  public ngOnInit(): void {
    this.obterEventoTrocarStep();
    this.escutarEventoTrocarStep();
  }

  public ngOnDestroy(): void {
    this.eventoTrocarStep$ ? this.eventoTrocarStep$.unsubscribe() : null;
  }
  
  public escutarEventoTrocarStep(): void {
    EventEmitterService.get("eventoTrocarStep").subscribe(obj => {
      this.stepAtivo = obj.index;
      this.cliente = obj.cliente;
    })
  }

  public obterEventoTrocarStep(): void {
    this.eventoTrocarStep$ = EventEmitterService.get('eventoTrocarStep');
  }
}