import { Component, Input } from '@angular/core';
import { Produto } from '../../../../../core/models/produto/produto';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardProduto } from './card-produto/card-produto';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [CommonModule, RouterModule, CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrls: ['./lista-produtos.scss']
})
export class ListaProdutos {
  @Input() produtos: Produto[] = [];
  @Input() categoriaSelecionada: string = '';

  itensPorPagina = 8;
  paginaAtual = 1;

  get produtosFiltrados(): Produto[] {
    return this.produtos.filter(p =>
      !this.categoriaSelecionada || p.categoria === this.categoriaSelecionada
    );
  }

  get totalPaginas(): number {
    return Math.ceil(this.produtosFiltrados.length / this.itensPorPagina);
  }

  get produtosPaginados(): Produto[] {
    const start = (this.paginaAtual - 1) * this.itensPorPagina;
    return this.produtosFiltrados.slice(start, start + this.itensPorPagina);
  }

  mudarPagina(novaPagina: number) {
    this.paginaAtual = novaPagina;
  }
}