import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CarouselItem } from '../../../../../core/models/carouselItem/carousel-item';
import { PromoItem } from '../../../../../core/models/promoItem/promo-item';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio implements OnInit, OnDestroy {
  @Input() imagensCarrossel!: CarouselItem[];

  promoItems: PromoItem[] = [
    // { label: 'LOJA ATACADISTA', description: 'Atendemos lojistas e revendedores', icon: 'bi bi-shop' },
    { label: 'PARCELAMENTO', description: 'Parcele em até 12x com juros', icon: 'bi bi-credit-card-fill' },
    { label: 'PEDIDOS', description: 'Pode retirar no Centro de Distribuição', icon: 'bi bi-tag' },
    { label: 'FRETE GRÁTIS', description: 'Entregamos em todas as regiões', icon: 'bi bi-truck' },
    { label: 'GARANTIA', description: 'Garantia de fábrica', icon: 'bi bi-award' }
  ];

  currentIndex = 0;
  carouselTransform = 'translateX(0%)';
  intervalId: any;

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.promoItems.length;
      this.carouselTransform = `translateX(-${this.currentIndex * 100}%)`;
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}