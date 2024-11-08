import { Component, Input, OnInit, Output } from '@angular/core';
import { ufs } from '../../../../shared/types/types';
import { FormEnderecoService } from '../../../services/form-endereco.service';
import { FormGroup } from '@angular/forms';
import { ViaCepService } from '../../../services/via-cep.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-editar-adicionar-endereco',
  templateUrl: './modal-editar-adicionar-endereco.component.html',
  styleUrl: './modal-editar-adicionar-endereco.component.css',
})
export class ModalEditarAdicionarEnderecoComponent implements OnInit {
  @Input() public visivel: boolean;
  @Output() public eventoFecharDialog = new EventEmitter();
  public ufs: string[] = ufs;
  public formularioEndereco: FormGroup;
  public cepConsultadoComSucesso = false;
  public erroCEP = false;

  constructor(private readonly formularioEnderecoService: FormEnderecoService,
    private readonly viaCepService: ViaCepService
  ) {}
  
  public ngOnInit(): void {
    this.formularioEndereco = this.formularioEnderecoService.formularioEndereco;
  }
  
  public consultarCep(): void {
    const valorCEP = this.formatarCEP(this.formularioEndereco.value.cep as string);
    if(valorCEP.length == 8) {
      this.viaCepService.obterDadosViaCep(valorCEP).subscribe({
        next: response => {
          if(response.erro == 'true') {
            this.erroCEP = true;
            this.cepConsultadoComSucesso = false;
            this.formularioEndereco.reset();
          } else {
            this.erroCEP = false;
            this.cepConsultadoComSucesso = true;
            this.formularioEnderecoService.habilitarCampos();
            this.formularioEnderecoService.inserirDadosVIACEPNoFormulario(response);
          }
        }
      });

      }
  }

  public fecharDialog(): void {
    this.eventoFecharDialog.emit("");
  }

  private formatarCEP(cep: string): string {
    cep = cep.replaceAll(".", "");
    cep = cep.replaceAll("-", "");
    cep = cep.replaceAll("_", "");
    return cep;
  }
}
