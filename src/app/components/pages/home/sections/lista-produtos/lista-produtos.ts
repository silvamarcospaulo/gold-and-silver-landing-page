// lista-produtos.ts
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Produto } from '../../../../../core/models/produto/produto';
import { CardProduto } from './card-produto/card-produto';


@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.scss',
  imports: [CardProduto]
})

export class ListaProdutos implements OnChanges {
  @Input() produtos: Produto[] = [];
  produto!: Produto;
  @Input() categorias: string[] = [];
  @Input() categoriaFiltrada: string | null = null;
  @Output() categoriaSelecionada = new EventEmitter<string>();

  menuAberto = false;
  itensPorPagina = 8;
  paginaAtual = 1;
  categoriaAtual: string = '';

  ngOnChanges() {
    this.categoriaAtual = this.categoriaFiltrada || '';
    this.paginaAtual = 1;
  }

  get produtosFiltrados(): Produto[] {
    return this.produtos.filter(p =>
      !this.categoriaAtual || p.categoria === this.categoriaAtual
    );
  }

  get totalPaginas(): number {
    return Math.ceil(this.produtosFiltrados.length / this.itensPorPagina);
  }

  get produtosPaginados(): Produto[] {
    const start = (this.paginaAtual - 1) * this.itensPorPagina;
    return this.produtosFiltrados.slice(start, start + this.itensPorPagina);
  }

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

  selecionarCategoria(categoria: string) {
    this.categoriaAtual = categoria;
    this.paginaAtual = 1;
    this.menuAberto = false;
    this.categoriaSelecionada.emit(categoria);
  }

  limparFiltro() {
    this.categoriaAtual = '';
    this.paginaAtual = 1;
    this.menuAberto = false;
    this.categoriaSelecionada.emit('');
  }

  mudarPagina(pagina: number) {
    this.paginaAtual = pagina;
  }
}