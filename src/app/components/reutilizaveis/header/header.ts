import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  menuAberto = false;
  dropdownAberto = false;

  categorias: string[] = [
    'ROUPEIROS',
    'COMODAS',
    'BALCÕES',
    'COZINHAS',
    'MULTIUSOS',
    'FOGÕES',
    'TUBOLARES',
    'CAMAS',
    'ESTOFADOS',
    'LAVADORAS',
    'SALA',
    'FRUTEIRAS',
    'TABUA DE PASSAR',
    'CADEIRAS AVULSAS'
  ];

  @Output() categoriaSelecionada = new EventEmitter<string>();

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

  toggleDropdown() {
    this.dropdownAberto = !this.dropdownAberto;
  }

  selecionarCategoria(categoria: string) {
    this.dropdownAberto = false;
    this.menuAberto = false;
    this.categoriaSelecionada.emit(categoria);
  }
}