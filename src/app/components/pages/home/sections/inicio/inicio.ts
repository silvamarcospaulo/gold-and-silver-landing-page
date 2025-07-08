import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CarouselItem } from '../../../../../core/models/carouselItem/carousel-item';
import { PromoItem } from '../../../../../core/models/promoItem/promo-item';
import { Carrossel } from './carrossel/carrossel';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule, Carrossel],
  standalone: true,
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio {
  @Input() imagensCarrossel!: CarouselItem[];

  promoItems: PromoItem[] = [
    { label: 'LOJA ATACADISTA', description: 'Atendemos lojistas e revendedores', icon: 'bi bi-shop' },
    { label: 'PARCELAMENTO', description: 'Parcele em até 10x sem juros', icon: 'bi bi-credit-card-fill' },
    { label: 'PEDIDOS', description: 'Pedido mínimo promocional de R$ 500,00 até 21/07', icon: 'bi bi-tag' },
    { label: 'FRETE GRÁTIS', description: 'A partir de R$ 1.000,00 para todo Brasil até 21/07', icon: 'bi bi-truck' },
    { label: '1 ANO DE GARANTIA', description: 'Em peças banhadas', icon: 'bi bi-award' }
  ];
}