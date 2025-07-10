import { Component } from '@angular/core';
import { Header } from "../../reutilizaveis/header/header";
import { Footer } from "../../reutilizaveis/footer/footer";
import { Inicio } from "./sections/inicio/inicio";
import { Link } from '../../../core/models/link/link';
import { CarouselItem } from '../../../core/models/carouselItem/carousel-item';
import { ListaProdutos } from "./sections/lista-produtos/lista-produtos";
import { Produto } from '../../../core/models/produto/produto';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, Inicio, ListaProdutos],
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
    'TÚBUA',
    'CADEIRAS'
  ];

  produtos: Produto[] = [
    {
      idProduto: 1,
      categoria: 'Cama',
      nomeDoProduto: 'Cama Box Queen',
      descricao: 'Estrutura em madeira, tecido suede, tratamento antiácaro.',
      cor: 'Cinza',
      altura: 43,
      largura: 158,
      comprimento: 188,
      tamanho: 'Queen',
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 2,
      categoria: 'Cama',
      nomeDoProduto: 'Cama Box Casal',
      descricao: 'Base de cama com tecido suede e estrutura reforçada.',
      cor: 'Bege',
      altura: 43,
      largura: 138,
      comprimento: 188,
      tamanho: 'Casal',
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 3,
      categoria: 'Base',
      nomeDoProduto: 'Base Box Solteiro',
      descricao: 'Superfície antideslizante, madeira reflorestada.',
      cor: 'Marrom',
      altura: 30,
      largura: 88,
      comprimento: 188,
      tamanho: 'Solteiro',
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 4,
      categoria: 'Base',
      nomeDoProduto: 'Base Baú Casal',
      descricao: 'Articulação com pistões, amplo espaço interno.',
      cor: 'Preto',
      altura: 52,
      largura: 138,
      comprimento: 188,
      tamanho: 'Casal',
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 4,
      categoria: 'Colchao',
      nomeDoProduto: 'Colchão D20 12cm',
      descricao: 'Espuma D20, tratamento antiácaro e antimofo.',
      cor: 'Bege',
      altura: 12,
      largura: 138,
      comprimento: 188,
      tipo: 'Espuma',
      tamanho: 'Casal',
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 5,
      categoria: 'Colchao',
      nomeDoProduto: 'Colchão D33 17cm',
      descricao: 'Espuma D33 selada, suporte de 120kg.',
      cor: 'Cinza',
      altura: 17,
      largura: 138,
      comprimento: 188,
      tipo: 'Espuma',
      tamanho: 'Casal',
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 6,
      categoria: 'Colchao',
      nomeDoProduto: 'Colchão D45 22cm',
      descricao: 'Espuma D45 para maior firmeza.',
      cor: 'Bege',
      altura: 22,
      largura: 158,
      comprimento: 198,
      tipo: 'Espuma',
      tamanho: 'Queen',
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 7,
      categoria: 'Sofa',
      nomeDoProduto: 'Sofá México 2.00',
      descricao: 'Assento reclinável, encosto em flocos de espuma.',
      cor: 'Cappucino',
      altura: 90,
      largura: 200,
      profundidade: 150,
      quantidadeDeLugares: 3,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 7,
      categoria: 'Sofa',
      nomeDoProduto: 'Sofá Quartzo 2.50',
      descricao: 'Veludo premium, encosto reclinável e assento retrátil.',
      cor: 'Azul',
      altura: 95,
      largura: 250,
      profundidade: 130,
      quantidadeDeLugares: 4,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 8,
      categoria: 'Sofa',
      nomeDoProduto: 'Sofá Quartzo 2.90',
      descricao: 'Espuma D23 com molas bonnel e encosto reclinável.',
      cor: 'Marrom',
      altura: 95,
      largura: 290,
      profundidade: 130,
      quantidadeDeLugares: 5,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 9,
      categoria: 'Fogao',
      nomeDoProduto: 'Fogão Atlas 4 Bocas',
      descricao: 'Mesa de inox, forno 50L, acendimento automático.',
      cor: 'Preto',
      capacidade: 50,
      quantidadeDeBocas: 4,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 10,
      categoria: 'Fogao',
      nomeDoProduto: 'Fogão Atlas 5 Bocas',
      descricao: 'Acendimento automático, mesa de inox.',
      cor: 'Branco',
      capacidade: 50,
      quantidadeDeBocas: 5,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 11,
      categoria: 'GuardaRoupa',
      nomeDoProduto: 'Roupeiro Gold 3 Portas',
      descricao: '3 portas, 2 gavetas, cabideiro revestido em PVC.',
      cor: 'Atacama/Grafite',
      altura: 186,
      largura: 153,
      profundidade: 41,
      quantidadeDePortas: 3,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 12,
      categoria: 'GuardaRoupa',
      nomeDoProduto: 'Roupeiro Gold 4 Portas',
      descricao: '4 portas, estrutura em MDP e puxadores de MDF.',
      cor: 'Branco',
      altura: 186,
      largura: 180,
      profundidade: 41,
      quantidadeDePortas: 4,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 13,
      categoria: 'GuardaRoupa',
      nomeDoProduto: 'Roupeiro Capela Paris',
      descricao: 'Espelho, 4 portas, 3 gavetas e nicho.',
      cor: 'Branco/Rosa',
      altura: 200,
      largura: 163,
      profundidade: 47,
      quantidadeDePortas: 4,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 14,
      categoria: 'Mesa',
      nomeDoProduto: 'Mesa de Cabeceira Urban',
      descricao: '1 gaveta, estrutura em MDP/MDF.',
      cor: 'Off White/Cedro',
      altura: 65,
      largura: 58,
      profundidade: 41,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 15,
      categoria: 'Mesa',
      nomeDoProduto: 'Conjunto Mesa Bianca Quadrada',
      descricao: 'Mesa + 4 cadeiras, tampo quadrado.',
      cor: 'Branca',
      largura: 75,
      comprimento: 75,
      formato: 'Quadrado',
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 16,
      categoria: 'Mesa',
      nomeDoProduto: 'Conjunto Mesa Bianca Circular',
      descricao: 'Estrutura tubular reforçada, tampo circular.',
      cor: 'Craqueada',
      diametro: 75,
      formato: 'Circular',
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 17,
      categoria: 'Cadeira',
      nomeDoProduto: 'Cadeira Reclinável Suede',
      descricao: 'Assento estofado com braço, encosto reclinável.',
      cor: 'Cinza',
      comOuSemBraco: 'Com Braço',
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 18,
      categoria: 'Cadeira',
      nomeDoProduto: 'Cadeira Sem Braço Madeira',
      descricao: 'Estrutura de madeira maciça, pintura fosca.',
      cor: 'Cedro',
      comOuSemBraco: 'Sem Braço',
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 19,
      categoria: 'Painel',
      nomeDoProduto: 'Painel Davos',
      descricao: 'TV até 55", estrutura MDF, detalhe ripado.',
      cor: 'Off White/Cedro',
      altura: 110,
      largura: 140,
      profundidade: 26,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 20,
      categoria: 'Painel',
      nomeDoProduto: 'Painel Home Maxi',
      descricao: '2 nichos, 2 prateleiras, para TV até 65".',
      cor: 'Preto',
      altura: 118,
      largura: 180,
      profundidade: 29,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 21,
      categoria: 'Rack',
      nomeDoProduto: 'Rack Aruba',
      descricao: '1 porta deslizante, pés de madeira maciça.',
      cor: 'Cedro',
      altura: 58,
      largura: 136,
      profundidade: 36,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 22,
      categoria: 'Rack',
      nomeDoProduto: 'Rack King',
      descricao: '2 portas ripadas, trilhos em ABS.',
      cor: 'Off White/Cedro',
      altura: 58,
      largura: 180,
      profundidade: 36,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 23,
      categoria: 'Comoda',
      nomeDoProduto: 'Cômoda Londres',
      descricao: '2 portas, 4 gavetas, acabamento texturizado.',
      cor: 'Branco',
      altura: 115,
      largura: 120,
      profundidade: 44.5,
      quantidadeDePortas: 2,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 24,
      categoria: 'Estante',
      nomeDoProduto: 'Estante Classic',
      descricao: '5 prateleiras, estrutura reforçada em MDF.',
      cor: 'Nogal',
      altura: 180,
      largura: 80,
      profundidade: 35,
      quantidadeDePrateleiras: 5,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 25,
      categoria: 'Lavadora',
      nomeDoProduto: 'Lavadora Libell 14kg',
      descricao: '5 programas, filtro antifiapos, desligamento automático.',
      cor: 'Branco',
      altura: 94,
      largura: 48,
      profundidade: 53,
      capacidade: 14,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 26,
      categoria: 'Lavadora',
      nomeDoProduto: 'Tanquinho Colormaq 10kg',
      descricao: 'Sistema de turbilhonamento, eixo inox.',
      cor: 'Prata',
      altura: 97,
      largura: 48,
      profundidade: 57,
      capacidade: 10,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 27,
      categoria: 'Beliche',
      nomeDoProduto: 'Beliche Torneada',
      descricao: 'Madeira maciça, suporta até 110kg.',
      cor: 'Malbec',
      altura: 160,
      largura: 80,
      comprimento: 205,
      imagem: 'mock-produto.png'
    }
  ];
}