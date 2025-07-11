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
    'Cama',
    'Comoda',
    'Balcão',
    'Cozinha',
    'Multiuso',
    'Fogão',
    'Tubular',
    'Estofado',
    'Lavadora',
    'Sala',
    'Fruteira',
    'Tábua',
    'Cadeira',
    'Mesa',
    'Painel',
    'GuardaRoupa',
    'Colchao',
    'Base'
  ];

  produtos: Produto[] = [
    {
      idProduto: 1,
      categoria: 'Cama',
      nomeDoProduto: 'Cama Box Queen',
      descricao: 'Estrutura reforçada com madeira maciça.',
      cor: 'Cinza',
      altura: 43,
      largura: 158,
      comprimento: 198,
      tamanho: 'Queen',
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 2,
      categoria: 'Cama',
      nomeDoProduto: 'Cama Box Solteiro',
      descricao: 'Ideal para quartos compactos.',
      cor: 'Preto',
      altura: 43,
      largura: 88,
      comprimento: 188,
      tamanho: 'Solteiro',
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 3,
      categoria: 'Colchao',
      nomeDoProduto: 'Colchão D20 Solteiro',
      descricao: 'Espuma de alta densidade com tratamento antimofo.',
      cor: 'Branco',
      altura: 12,
      largura: 88,
      comprimento: 188,
      tipo: 'Espuma',
      tamanho: 'Solteiro',
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 4,
      categoria: 'Colchao',
      nomeDoProduto: 'Colchão D33 Casal',
      descricao: 'Conforto e durabilidade para o dia a dia.',
      cor: 'Bege',
      altura: 17,
      largura: 138,
      comprimento: 188,
      tipo: 'Espuma',
      tamanho: 'Casal',
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 5,
      categoria: 'Sofa',
      nomeDoProduto: 'Sofá 2 Lugares Retrátil',
      descricao: 'Compacto e confortável para ambientes menores.',
      cor: 'Marrom',
      altura: 90,
      largura: 180,
      profundidade: 130,
      quantidadeDeLugares: 2,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 6,
      categoria: 'Sofa',
      nomeDoProduto: 'Sofá 3 Lugares Reclinável',
      descricao: 'Conforto premium com design moderno.',
      cor: 'Cinza Escuro',
      altura: 95,
      largura: 220,
      profundidade: 140,
      quantidadeDeLugares: 3,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 7,
      categoria: 'Fogao',
      nomeDoProduto: 'Fogão 4 Bocas Inox',
      descricao: 'Forno com visor panorâmico e acendimento automático.',
      cor: 'Inox',
      capacidade: 60,
      quantidadeDeBocas: 4,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 8,
      categoria: 'Fogao',
      nomeDoProduto: 'Fogão 5 Bocas Branco',
      descricao: 'Modelo moderno com acabamento brilhante.',
      cor: 'Branco',
      capacidade: 65,
      quantidadeDeBocas: 5,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 9,
      categoria: 'GuardaRoupa',
      nomeDoProduto: 'Guarda-Roupa 3 Portas',
      descricao: 'Ideal para quartos pequenos.',
      cor: 'Tabaco',
      altura: 190,
      largura: 140,
      profundidade: 45,
      quantidadeDePortas: 3,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 10,
      categoria: 'GuardaRoupa',
      nomeDoProduto: 'Guarda-Roupa 6 Portas com Espelho',
      descricao: 'Amplo espaço interno com divisões inteligentes.',
      cor: 'Branco',
      altura: 220,
      largura: 200,
      profundidade: 55,
      quantidadeDePortas: 6,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 11,
      categoria: 'Mesa',
      nomeDoProduto: 'Mesa de Cabeceira 1 Gaveta',
      descricao: 'Compacta e funcional.',
      cor: 'Branco/Cedro',
      altura: 60,
      largura: 50,
      profundidade: 40,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 12,
      categoria: 'Mesa',
      nomeDoProduto: 'Mesa de Jantar 4 Lugares',
      descricao: 'Tampo em vidro temperado.',
      cor: 'Preto',
      largura: 120,
      comprimento: 80,
      formato: 'Retangular',
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 13,
      categoria: 'Mesa',
      nomeDoProduto: 'Mesa de Jantar 6 Lugares',
      descricao: 'Ideal para reuniões familiares.',
      cor: 'Amêndoa',
      largura: 160,
      comprimento: 90,
      formato: 'Retangular',
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 14,
      categoria: 'Cadeira',
      nomeDoProduto: 'Cadeira de Madeira com Braço',
      descricao: 'Conforto e estilo para sua sala.',
      cor: 'Imbuia',
      comOuSemBraco: 'Com Braço',
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 15,
      categoria: 'Cadeira',
      nomeDoProduto: 'Cadeira Estofada Sem Braço',
      descricao: 'Assento macio com encosto ergonômico.',
      cor: 'Preto',
      comOuSemBraco: 'Sem Braço',
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 16,
      categoria: 'Painel',
      nomeDoProduto: 'Painel para TV 60"',
      descricao: 'Design moderno com acabamento em brilho.',
      cor: 'Off White',
      altura: 120,
      largura: 160,
      profundidade: 25,
      imagem: 'mock-produto.png'
    },
    {
      idProduto: 17,
      categoria: 'Painel',
      nomeDoProduto: 'Painel com Prateleiras',
      descricao: 'Ideal para organizar objetos decorativos.',
      cor: 'Grafite/Nogueira',
      altura: 110,
      largura: 150,
      profundidade: 30,
      imagem: 'mock-produto.png'
    },

    ...Array.from({ length: 33 }).map((_, i) => ({
      idProduto: 18 + i,
      categoria: ['Cama', 'Colchao', 'Sofa', 'Fogao', 'GuardaRoupa', 'Mesa', 'Cadeira', 'Painel'][i % 8],
      nomeDoProduto: `Produto ${18 + i}`,
      descricao: 'Produto gerado automaticamente para testes.',
      cor: ['Cinza', 'Branco', 'Preto', 'Bege', 'Marrom'][i % 5],
      imagem: 'mock-produto.png'
    }))
  ];

  categoriaFiltrada: string | null = null;

  atualizarCategoriaFiltrada(categoria: string) {
    this.categoriaFiltrada = categoria;
  }

}