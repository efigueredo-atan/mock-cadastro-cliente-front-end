import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() public eventoMostrarSideBar = new EventEmitter();

  public dispararEventoMostrarSideBar(): void {
    this.eventoMostrarSideBar.emit('');
  }
}
