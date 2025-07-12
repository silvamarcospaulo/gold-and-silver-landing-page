import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  @Input() categorias: string[] = [];
  @Output() categoriaSelecionada = new EventEmitter<string>();
  @Output() scrollParaProdutos = new EventEmitter<void>();

  menuAberto = false;

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

  selecionarCategoria(categoria: string) {
    this.menuAberto = false;
    this.categoriaSelecionada.emit(categoria);
    this.scrollParaProdutos.emit();
  }
}