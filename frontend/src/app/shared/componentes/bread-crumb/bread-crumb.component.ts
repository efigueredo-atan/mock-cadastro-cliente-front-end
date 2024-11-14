import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrl: './bread-crumb.component.css',
})
export class BreadCrumbComponent {
  public items: MenuItem[] = [{ label: 'Home' }, { label: 'Cliente' }, { label: 'Cadastro ' }];
}
