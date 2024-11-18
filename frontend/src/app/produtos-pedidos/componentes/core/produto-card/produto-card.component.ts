import { Component, Input } from '@angular/core';
import { Produto } from '../../../../shared/types/types';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrl: './produto-card.component.css'
})
export class ProdutoCardComponent {
  @Input() public produto: Produto;
}
