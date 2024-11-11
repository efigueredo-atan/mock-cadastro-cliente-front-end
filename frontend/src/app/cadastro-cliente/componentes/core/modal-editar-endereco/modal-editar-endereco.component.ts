import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Endereco, ufs } from '../../../../shared/types/types';
import { FormEnderecoService } from '../../../services/form-endereco.service';
import { EventEmitterService } from '../../../../services/event-emitter.service';

@Component({
  selector: 'app-modal-editar-endereco',
  templateUrl: './modal-editar-endereco.component.html',
  styleUrl: './modal-editar-endereco.component.css',
})
export class ModalEditarEnderecoComponent implements OnDestroy {
  @Input() endereco: Endereco;
  @Input() public visivel: boolean;
  @Output() public eventoFecharDialog = new EventEmitter();
  @Output() public eventoEnderecoAlterado: EventEmitter<Endereco> = new EventEmitter();
  public ufs: string[] = ufs;
  public formularioEndereco: FormGroup;
  public salvandoAlteracoesEndereco: boolean;
  public $subscribeEventoEditarEndereco: any;

  constructor(private readonly formularioEnderecoService: FormEnderecoService) {
    this.formularioEndereco = this.formularioEnderecoService.formularioEndereco;
    this.$subscribeEventoEditarEndereco = EventEmitterService.get(
      'editarEndereco'
    ).subscribe((endereco) => {
      this.visivel = true;
      this.endereco = endereco;
      this.salvandoAlteracoesEndereco = false;
      this.formularioEnderecoService.preencherFormularioComEndereco(
        this.endereco
      );
      this.formularioEnderecoService.habilitarCampos();
    });
  }

  public ngOnDestroy(): void {
    if (this.$subscribeEventoEditarEndereco)
      this.$subscribeEventoEditarEndereco.unsubscribe();
  }

  public fecharDialog(): void {
    this.visivel = false;
    this.eventoFecharDialog.emit('');
  }

  public enterPressionado(): void {
    this.salvarAlteracoes();
  }

  public salvarAlteracoes(): void {
    this.salvandoAlteracoesEndereco = true;
    this.formularioEnderecoService.desabilitarCampos(true);
    setTimeout(() => {
      this.fecharDialog();
      this.eventoEnderecoAlterado.emit(
        this.formularioEnderecoService.obterObjetoEndereco()
      );
    }, 1000);
  }
}
