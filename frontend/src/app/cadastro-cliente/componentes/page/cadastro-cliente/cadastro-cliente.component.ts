import { Component, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SelectButtonChangeEvent } from 'primeng/selectbutton';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class CadastroClienteComponent {
  public home: MenuItem = { icon: 'pi pi-home'};
  public items: MenuItem[] = [
    { label: "Cliente" },
    { label: "Cadastro " }
  ]
  public tipoDocumento: any[] = [
    { label: "CPF", documentoSelecionado: "cpf"},
    { label: "CNPJ", documentoSelecionado: "cnpj"}
  ];
  public genero: any[] = [
    { name: "Masculino", value: "masculino"},
    { name: "Feminino", value: "feminino"},
    { name: "Outro", value: "outro"}
  ];
  public documentoSelecionado: string = "off";
  public generoSelecionado: string = "";

  public selecionarDocumento(event: SelectButtonChangeEvent) {
    this.documentoSelecionado = event.value;
  }

  public selecionarGenero(event: SelectButtonChangeEvent) {
    this.generoSelecionado = event.value;
  }
}
