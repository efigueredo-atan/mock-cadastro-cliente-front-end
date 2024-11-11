import { Component, ElementRef, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { ufs } from '../../../../shared/types/types';
import { FormEnderecoService } from '../../../services/form-endereco.service';
import { FormGroup } from '@angular/forms';
import { ViaCepService } from '../../../services/via-cep.service';
import { EventEmitter } from '@angular/core';
import { EventEmitterService } from '../../../../services/event-emitter.service';

@Component({
  selector: 'app-modal-editar-adicionar-endereco',
  templateUrl: './modal-editar-adicionar-endereco.component.html',
  styleUrl: './modal-editar-adicionar-endereco.component.css',
})
export class ModalEditarAdicionarEnderecoComponent implements OnDestroy {
  @Input() public visivel: boolean;
  @Output() public eventoFecharDialog = new EventEmitter();
  @Output() public eventoEnderecoRegistrado = new EventEmitter();
  public ufs: string[] = ufs;
  public formularioEndereco: FormGroup;
  public cepConsultadoComSucesso = false;
  public erroCEP = false;
  public registrandoEndereco = false;
  public $subscribeEventoCadastrarEndereco: any;

  @ViewChild('inputEnderecoRua') inputEnderecoRua: ElementRef;

  constructor(
    private readonly formularioEnderecoService: FormEnderecoService,
    private readonly viaCepService: ViaCepService
  ) {
    this.formularioEndereco =
      this.formularioEnderecoService.formularioEndereco;
    this.$subscribeEventoCadastrarEndereco = EventEmitterService.get(
      'cadastrarEndereco'
    ).subscribe(() => {
      this.visivel = true;
        this.formularioEndereco.reset();
        this.resetarCompontente();
      this.formularioEnderecoService.desabilitarCampos(false);
    });
  }

  public ngOnDestroy(): void {
    if(this.$subscribeEventoCadastrarEndereco)
    this.$subscribeEventoCadastrarEndereco.unsubscribe();
  }

  public consultarCep(): void {
    const valorCEP = this.formatarCEP(
      this.formularioEndereco.value.cep as string
    );
    if (valorCEP.length == 8) {
      this.viaCepService.obterDadosViaCep(valorCEP).subscribe({
        next: (response) => {
          if (response.erro == 'true') {
            this.erroCEP = true;
            this.cepConsultadoComSucesso = false;
            this.formularioEndereco.reset();
          } else {
            this.erroCEP = false;
            this.cepConsultadoComSucesso = true;
            this.formularioEnderecoService.habilitarCampos();
            this.focarInputRua();
            this.formularioEnderecoService.inserirDadosVIACEPNoFormulario(
              response
            );
          }
        },
      });
    } else {
      this.erroCEP = true;
    }
  }

  public registrarEndereco(): void {
    this.registrandoEndereco = true;
    this.formularioEnderecoService.desabilitarCampos(true);
    setTimeout(() => {
      this.fecharDialog();
      this.eventoEnderecoRegistrado.emit(
        this.formularioEnderecoService.obterObjetoEndereco()
      );
    }, 1000);
  }

  public fecharDialog(): void {
    this.visivel = false;
    this.eventoFecharDialog.emit('');
  }

  private formatarCEP(cep: string): string {
    cep = cep.replaceAll('.', '');
    cep = cep.replaceAll('-', '');
    cep = cep.replaceAll('_', '');
    return cep;
  }

  public enterPressionado(): void {
    if (!this.cepConsultadoComSucesso) {
      this.consultarCep();
    } else {
      if (this.formularioEndereco.valid) {
        this.registrarEndereco();
      }
    }
  }

  private focarInputRua(): void {
    this.inputEnderecoRua.nativeElement.focus();
  }

  private resetarCompontente(): void {
    this.erroCEP = false;
    this.registrandoEndereco = false;
    this.cepConsultadoComSucesso = false;
    this.formularioEnderecoService.desabilitarCampos(false);
  }
}
