import { Component, ViewEncapsulation } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'Cadastro de cliente';
  constructor(private primengConfig: PrimeNGConfig, private config: PrimeNGConfig) {}

    public ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
