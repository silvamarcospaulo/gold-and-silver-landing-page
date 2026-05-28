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
    { label: 'CATÁLOGO', description: 'Produtos organizados para pesquisar e comparar', icon: 'bi bi-journal-text' },
    { label: 'LEILÕES', description: 'Lotes com oportunidades para acompanhar online', icon: 'bi bi-hammer' },
    { label: 'ATACADO', description: 'Condições pensadas para lojistas e revendedores', icon: 'bi bi-shop' },
    { label: 'ATENDIMENTO', description: 'Equipe disponível para orientar a melhor compra', icon: 'bi bi-whatsapp' }
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
