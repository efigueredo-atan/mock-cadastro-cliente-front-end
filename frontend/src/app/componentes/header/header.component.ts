import { Component, Output, EventEmitter } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() public eventoMostrarSideBar = new EventEmitter();

  public dispararEventoMostrarSideBar(): void {
    this.eventoMostrarSideBar.emit('');
  }
}
