import { Component } from '@angular/core';
import { Header } from "./sections/header/header";
import { Footer } from "../../reutilizaveis/footer/footer";
import { Inicio } from "./sections/inicio/inicio";
import { Link } from '../../../core/models/link/link';
import { CarouselItem } from '../../../core/models/carouselItem/carousel-item';
import { ListaProdutos } from "./sections/lista-produtos/lista-produtos";
import { VideoSeo } from "./sections/video-seo/video-seo";
import { Carrossel } from './sections/carrossel/carrossel';
import { SobreNos } from "./sections/sobre-nos/sobre-nos";
import { BotaoWhatsApp } from "../../reutilizaveis/botao-whats-app/botao-whats-app";

@Component({
  selector: 'app-home',
  imports: [Header, Footer, Inicio, ListaProdutos, VideoSeo, Carrossel, SobreNos, BotaoWhatsApp],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  linksFooter: Link[] = [
    { label: 'Home', url: '#carousel-inicio' },
    { label: 'Seja um revendedor autorizado', url: '#video-seo' },
    { label: 'Catálogo', url: 'https://catalogo.goldesilverdistribuicao.com.br/' },
    { label: 'Leilões', url: 'https://leilao.goldesilverdistribuicao.com.br/' },
    { label: 'Sobre nós', url: '#sobre-nos' },
  ];

  imagensCarrossel: CarouselItem[] = [
    { src: 'assets/images/carrossel/salaarborizada.jpg', alt: 'Slide 1' },
    { src: 'assets/images/carrossel/salabranca.jpg', alt: 'Slide 2' },
    { src: 'assets/images/carrossel/salaverde.jpg', alt: 'Slide 3' },
    { src: 'assets/images/carrossel/cafeteira.jpg', alt: 'Slide 4' },
    { src: 'assets/images/carrossel/cozinha.jpg', alt: 'Slide 5' },
    { src: 'assets/images/carrossel/sala-de-estar.jpg', alt: 'Slide 6' }
  ];
}

