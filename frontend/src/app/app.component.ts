import { Component, ViewEncapsulation } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  public title = 'Cadastro de cliente';
  public sidebarVisivel: boolean = false;
  public items: MenuItem[];

  constructor(private primengConfig: PrimeNGConfig, private router: Router) {}

  public ngOnInit() {
    this.primengConfig.ripple = true;
    this.carregarItens();
  }

  public mostrarSideBar(): void {
    this.sidebarVisivel = this.sidebarVisivel = true;
  }

  public carregarItens(): void {
    this.items = [
      {
        label: 'Clientes',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Cadastrar',
            icon: 'pi pi-plus',
            command: () => {
              this.router.navigate(['/cliente/cadastro']);
              this.sidebarVisivel = false;
            },
          },
        ],
      },
    ];
  }
}
