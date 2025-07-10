import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  menuAberto = false;

  @Input() categorias: string[] = [];
  @Output() categoriaSelecionada = new EventEmitter<string>();

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

  selecionarCategoria(categoria: string) {
    this.menuAberto = false;
    this.categoriaSelecionada.emit(categoria);
  }
}