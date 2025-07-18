import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import { CardProduto } from './card-produto/card-produto';
import { RouterModule } from '@angular/router';
import { Produto } from '../../../../../core/models/produto/produto';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../../../../core/services/scroll.service';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.scss',
  imports: [CardProduto, RouterModule, CommonModule]
})
export class ListaProdutos implements OnChanges {
  @Input() produtos: Produto[] = [];
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

  constructor(private scroll: ScrollService) { }

  go(url: string, event: Event) {
    event.preventDefault();
    const id = url.replace(/^#/, '');
    this.scroll.scrollTo(id);
  }

  get produtosFiltrados(): Produto[] {
    return this.produtos.filter(p => {
      if (!this.categoriaAtual) return true;
      if (Array.isArray(p.categoria)) {
        return p.categoria.includes(this.categoriaAtual);
      }
      return p.categoria === this.categoriaAtual;
    });
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
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaAtual = pagina;
    }
  }

  get paginasExibidas(): number[] {
    const total = this.totalPaginas;
    const atual = this.paginaAtual;
    let start = Math.max(1, atual - 2);
    let end = Math.min(total, atual + 2);

    if (end - start < 4) {
      if (start === 1) {
        end = Math.min(total, start + 4);
      } else if (end === total) {
        start = Math.max(1, end - 4);
      }
    }

    const paginas: number[] = [];
    for (let i = start; i <= end; i++) {
      paginas.push(i);
    }
    return paginas;
  }
}