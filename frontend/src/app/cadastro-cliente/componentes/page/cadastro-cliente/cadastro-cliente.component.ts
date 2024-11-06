import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectButtonChangeEvent } from 'primeng/selectbutton';
import { Cliente, Genero } from '../../../../shared/types/types';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class CadastroClienteComponent implements OnInit {
  public tipoDocumento: any[] = [
    { label: 'CPF', documentoSelecionado: 'cpf' },
    { label: 'CNPJ', documentoSelecionado: 'cnpj' },
  ];
  public genero: any[] = [
    { name: Genero.MASCULINO, value: Genero.MASCULINO.toString() },
    { name: Genero.FEMININO, value: Genero.FEMININO.toString() },
    { name: Genero.OUTRO, value: Genero.OUTRO.toString() },
  ];

  public messages = [
    { severity: 'warn', detail: 'Obrigatório' },
];

  public documentoSelecionado: string = null;
  public generoSelecionado: string = '';
  public stepAtivo: number = 0;

  public formularioInformacoesPessoais!: FormGroup;
  public formularioInformacoesContato!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.criarFormularioDadosPessoais();
    this.criarFormularioInformacoesContato();
  }

  public selecionarDocumento(event: SelectButtonChangeEvent) {
    this.documentoSelecionado = event.value;

    if(this.documentoSelecionado == null) {
      return;
    }
    if(this.documentoSelecionado.toLocaleLowerCase() == "cpf") {
      this.formularioInformacoesPessoais.removeControl("cnpj");
      this.formularioInformacoesPessoais.removeControl("incricaoEstadual");
      this.formularioInformacoesPessoais.removeControl("orgaoPublico");
      this.formularioInformacoesPessoais.addControl('cpf', new FormControl(null, [Validators.required, Validators.minLength(11)]));
      this.formularioInformacoesPessoais.addControl('rg', new FormControl(null, [Validators.required, Validators.minLength(11)]));
    } else if(this.documentoSelecionado.toLocaleLowerCase() == 'cnpj') {
      this.formularioInformacoesPessoais.removeControl("cpf");
      this.formularioInformacoesPessoais.removeControl("rg");
      this.formularioInformacoesPessoais.addControl('cnpj', new FormControl(null, Validators.required));
      this.formularioInformacoesPessoais.addControl('incricaoEstadual', new FormControl(null, Validators.required));
      this.formularioInformacoesPessoais.addControl('orgaoPublico', new FormControl(null, Validators.required));
    }
  }

  public selecionarGenero(event: SelectButtonChangeEvent) {
    this.generoSelecionado = event.value;
  }

  private criarFormularioDadosPessoais(): void {
    this.formularioInformacoesPessoais = this.formBuilder.group({
      nome: [null, [Validators.required]],
      sobrenome: [null, [Validators.required]],
      genero: [null, [Validators.required]],
      dataNascimento: [null, [Validators.required]],
      nomeSocial: [null],
    });
  }

  private criarFormularioInformacoesContato(): void {
    this.formularioInformacoesContato = this.formBuilder.group({
      telefone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
    });
  }
}



    // let cliente: Cliente = {
    //   nome: this.formularioInformacoesPessoais.value.nome,
    //   sobrenome: this.formularioInformacoesPessoais.value.sobrenome,
    //   cpf: this.formularioInformacoesPessoais.value.cpf,
    //   rg: this.formularioInformacoesPessoais.value.rg,
    //   genero: this.formularioInformacoesPessoais.value.genero,
    //   cnpj: this.formularioInformacoesPessoais.value.cnpj,
    //   incricaoEstadual: this.formularioInformacoesPessoais.value.incricaoEstadual,
    //   orgaoPublico: this.formularioInformacoesPessoais.value.nome,
    //   dataNascimento: this.formularioInformacoesPessoais.value.dataNascimento,
    //   contato: this.formularioInformacoesPessoais.value.contato,
    // }