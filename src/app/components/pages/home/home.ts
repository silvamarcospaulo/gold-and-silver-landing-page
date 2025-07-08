import { Component } from '@angular/core';
import { Header } from "../../reutilizaveis/header/header";
import { Footer } from "../../reutilizaveis/footer/footer";
import { Inicio } from "./sections/inicio/inicio";
import { Link } from '../../../core/models/link/link';
import { CarouselItem } from '../../../core/models/carouselItem/carousel-item';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, Inicio],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class Home {
  linksFooter: Link[] = [
    { label: 'Sobre', url: '/sobre' },
    { label: 'Produtos', url: '/produtos' },
    { label: 'Contato', url: '/contato' },
    { label: 'Política de Privacidade', url: '/politica-privacidade' }
  ];

  imagensCarrossel: CarouselItem[] = [
    { src: 'assets/images/carrossel/salaarborizada.jpg', alt: 'Slide 1' },
    { src: 'assets/images/carrossel/salabranca.jpg', alt: 'Slide 2' },
    { src: 'assets/images/carrossel/salaverde.jpg', alt: 'Slide 3' }
  ]
}