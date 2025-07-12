import { Component, ViewChild, ElementRef } from '@angular/core';
import { Header } from "./sections/header/header";
import { Footer } from "../../reutilizaveis/footer/footer";
import { Inicio } from "./sections/inicio/inicio";
import { Link } from '../../../core/models/link/link';
import { CarouselItem } from '../../../core/models/carouselItem/carousel-item';
import { ListaProdutos } from "./sections/lista-produtos/lista-produtos";
import { Produto } from '../../../core/models/produto/produto';
import { VideoSeo } from "./sections/video-seo/video-seo";
import { VideoPhizChat } from "./sections/video-phiz-chat/video-phiz-chat";

@Component({
  selector: 'app-home',
  imports: [Header, Footer, Inicio, ListaProdutos, VideoSeo, VideoPhizChat],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  @ViewChild('secaoProdutos') secaoProdutos!: ElementRef;

  linksFooter: Link[] = [
    { label: 'Sobre', url: '/sobre' },
    { label: 'Produtos', url: '/produto' },
    { label: 'Contato', url: '/contato' },
    { label: 'Política de Privacidade', url: '/politica-privacidade' }
  ];

  imagensCarrossel: CarouselItem[] = [
    { src: 'assets/images/carrossel/salaarborizada.jpg', alt: 'Slide 1' },
    { src: 'assets/images/carrossel/salabranca.jpg', alt: 'Slide 2' },
    { src: 'assets/images/carrossel/salaverde.jpg', alt: 'Slide 3' }
  ];

  categorias: string[] = [
    "Acessórios", "Acoplados", "Aparador", "Balcão", "Banheiro", "Base", "Buffet",
    "Cadeira", "Cama", "Climatização", "Colchao", "Comoda", "Cozinha", "Eletrodomésticos",
    "Em Aço", "Escrivaninha", "Espelho", "Estante", "Estofado", "Fogão", "Fruteira",
    "Guarda Roupas", "Infantil", "Lavadora", "Mesa", "Modulados", "Painel", "Penteadeira",
    "Porta de Correr", "Quarto", "Rack", "Sala", "Sapateiras", "Tubular"
  ];

  produtos: Produto[] =
    [
      {
        "id": 184021,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO TURIM C/ 2 PORTAS DE CORRER - CANELATO 3D",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453318416807a681955bf.webp"
      },
      {
        "id": 184022,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO TURIM C/ 2 PORTAS DE CORRER - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-27/1745783492680e8ac46e174.webp"
      },
      {
        "id": 184029,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TOLEDO 6 PORTAS - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453349286807b290aba07.webp"
      },
      {
        "id": 184031,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TOKIO 6 PTS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454250036809126b9e997.webp"
      },
      {
        "id": 184034,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA CINAMOMO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855862680fa57678a57.webp"
      },
      {
        "id": 184035,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855760680fa5105bc0d.webp"
      },
      {
        "id": 184036,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA 3 PTS PLUS - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745507529680a54c9e10af.webp"
      },
      {
        "id": 184037,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA 3 PTS PLUS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453350226807b2eebbb0b.webp"
      },
      {
        "id": 184038,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA 3 PORTAS PREMIUM - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453350416807b3017fa65.webp"
      },
      {
        "id": 184039,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA 3 PORTAS PREMIUM - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453350846807b32c62981.webp"
      },
      {
        "id": 184041,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO PAULO 6 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855865680fa5792ac27.webp"
      },
      {
        "id": 184042,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 6 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453496576807ec19df6d7.webp"
      },
      {
        "id": 184043,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 6 PORTAS - ACACIA / REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453500976807edd1782b3.webp"
      },
      {
        "id": 184046,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO SANTIAGO 2 PORTAS PLUS - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454252776809137d79421.webp"
      },
      {
        "id": 184047,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO SANTIAGO 2 PORTAS PLUS - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453351406807b364b77a1.webp"
      },
      {
        "id": 184048,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO SANTIAGO 2 PORTAS PLUS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453351556807b37381749.webp"
      },
      {
        "id": 184055,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. RUBI 8 P. 4 GAV. C/ ESP. - CINAMOMO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453353836807b457c7f2c.webp"
      },
      {
        "id": 184056,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO RUBI 8 P. 4 GAV. C/ ESPELHO - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453353996807b46735e25.webp"
      },
      {
        "id": 184057,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO RUBI 8 PORTAS 4 GAV. C/ ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453354176807b479ae851.webp"
      },
      {
        "id": 184058,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO REIS 6 PTS FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453355206807b4e0532c4.webp"
      },
      {
        "id": 184059,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO REIS 6 PTS BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453355676807b50f8b38d.webp"
      },
      {
        "id": 184064,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. PORTUGAL 6 PTS PRIME - CINAMOMO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454290676809224b0ada3.webp"
      },
      {
        "id": 184065,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. PORTUGAL 6 PTS PRIME - CINAM. / OFF / CINAM.",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453356876807b5878c663.webp"
      },
      {
        "id": 184066,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO PORTUGAL 6 PTS PRIME - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453364806807b8a010a48.webp"
      },
      {
        "id": 184067,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO PORTUGAL 6 PTS PRIME - CACAU",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453364806807b8a010a48.webp"
      },
      {
        "id": 184075,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO NEW VERONA 6 PORTAS - CINAMOMO / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745509250680a5b82083c9.webp"
      },
      {
        "id": 184076,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO NEW VERONA 6 PORTAS - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745509264680a5b908c6de.webp"
      },
      {
        "id": 184078,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO NEW PARMA - IPE DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745509310680a5bbe2acf1.webp"
      },
      {
        "id": 184079,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO NEW PARMA - CINAMOMO / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745509331680a5bd30d6a0.webp"
      },
      {
        "id": 184083,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO MONTANA C\\ 2 PORTAS DE CORRER - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453368106807b9ead6f36.webp"
      },
      {
        "id": 184084,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MONACO 10 PORTAS - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453368836807ba33870a0.webp"
      },
      {
        "id": 184085,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MONACO 10 PORTAS - AREIA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453368996807ba430cf71.webp"
      },
      {
        "id": 184086,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MALIBU NEW 6 PTS - JEQUITIBA / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453369456807ba7125b65.webp"
      },
      {
        "id": 184087,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MALIBU NEW 6 PTS - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453369756807ba8f1605e.webp"
      },
      {
        "id": 184088,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MALIBU NEW 6 PTS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453369976807baa598177.webp"
      },
      {
        "id": 184091,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO LOTSE - DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453370766807baf4d9abc.webp"
      },
      {
        "id": 184092,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO LOTSE - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453371736807bb55eb295.webp"
      },
      {
        "id": 184104,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO HERCULES 6PTS C/ESP.  BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-25/1745609270680be236a9799.webp"
      },
      {
        "id": 184105,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO HERCULES 6PTS C/ ESP. FREIJO-OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453373926807bc307b9d8.webp"
      },
      {
        "id": 184106,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO HERCULES 6PTS C/ ESP.  DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453374046807bc3c71c9d.webp"
      },
      {
        "id": 184107,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO HERCULES 6PTS C/ ESP.  CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453374706807bc7e7b4dd.webp"
      },
      {
        "id": 184116,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GOLD 3 PORTAS - ATACAMA / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453381236807bf0bcc07a.webp"
      },
      {
        "id": 184117,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GOIANIA 6 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453382736807bfa1dcb85.webp"
      },
      {
        "id": 184118,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GOIANIA 6 PORTAS - CANELATO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453382856807bfad9bf7b.webp"
      },
      {
        "id": 184119,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO GENESIS PRETO C/ ESPELHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453383506807bfee56f24.webp"
      },
      {
        "id": 184120,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO GENESIS CINAMOMO - OFF WHITE C/ ESPELHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453480686807e5e4d250b.webp"
      },
      {
        "id": 184121,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO GENESIS BRANCO C/ ESPELHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453480686807e5e4d250b.webp"
      },
      {
        "id": 184122,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO GENESIS  CINAMOMO C/ ESPELHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453480686807e5e4d250b.webp"
      },
      {
        "id": 184123,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 6 PTS - CANELATO 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453482216807e67d1d420.webp"
      },
      {
        "id": 184124,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 6 PTS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453482386807e68e72334.webp"
      },
      {
        "id": 184125,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 6 PTS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453482556807e69f74ea8.webp"
      },
      {
        "id": 184126,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 6 PTS - ACACIA / REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453482826807e6ba69add.webp"
      },
      {
        "id": 184127,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 4 PTS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453483136807e6d911a30.webp"
      },
      {
        "id": 184128,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 4 PTS - CANELATO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453483386807e6f215617.webp"
      },
      {
        "id": 184129,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 4 PTS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453483786807e71ada01d.webp"
      },
      {
        "id": 184130,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 4 PTS - ACACIA REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453484086807e738202e6.webp"
      },
      {
        "id": 184131,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 4 PTS - 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453484206807e744363c9.webp"
      },
      {
        "id": 184132,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 3 PTS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453484536807e7653e282.webp"
      },
      {
        "id": 184133,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 3 PTS - ACACIA MAD./ REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-09/1752088207686ebe8f2faa7.webp"
      },
      {
        "id": 184134,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 3 PTS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453484826807e7822fb81.webp"
      },
      {
        "id": 184135,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 3 PTS - 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453484986807e79242d75.webp"
      },
      {
        "id": 184136,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FIORELA 100% MDF- JACARANDÁ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453485216807e7a94db09.webp"
      },
      {
        "id": 184141,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO ESPANHA PREMIUM -BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-25/1745612007680bece75b254.webp"
      },
      {
        "id": 184142,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO ESPANHA PREMIUM - DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453486366807e81cab1db.webp"
      },
      {
        "id": 184143,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUP. ESPANHA PLUS C/ ESP. - DEMOLIÇÃO / DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453486926807e854c3f47.webp"
      },
      {
        "id": 184144,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO ESPANHA  C/ ESPELHO - DEMOLIÇÃO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453490366807e9ac234a5.webp"
      },
      {
        "id": 184145,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUP. ESPANHA PLUS C/ ESPELHO - CINAMOMO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453492446807ea7cd47a7.webp"
      },
      {
        "id": 184146,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO ESPANHA PLUS C/ ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453492706807ea96d833c.webp"
      },
      {
        "id": 184153,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO DALLAS 6 P. C/ 6 GAV. - CINAMOMO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453493676807eaf790dba.webp"
      },
      {
        "id": 184154,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO DALLAS 6 PORTAS C/ 6 GAV. - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429180680922bc00a0c.webp"
      },
      {
        "id": 184155,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO DALLAS 6 PORTAS C/ 6 GAV. - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453493816807eb05cd93a.webp"
      },
      {
        "id": 184161,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CATATAU NEW 3 PTS - BCO/RS/NAT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429209680922d9efc44.webp"
      },
      {
        "id": 184162,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CAPELINHA - CANELATO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429255680923074b614.webp"
      },
      {
        "id": 184166,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CANCUN 6 PORTAS - AMARULA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453495646807ebbc5a1b2.webp"
      },
      {
        "id": 184177,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO BARCELONA/CLARICE PLUS C/ ESPELHO - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453338586807ae62ef87c.webp"
      },
      {
        "id": 184178,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO BARCELONA/CLARICE PLUS C/ ESP - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453338716807ae6f53c26.webp"
      },
      {
        "id": 184179,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUP. BARCELONA/CLARICE PLUS C/ ESP. - FREIJO / BR",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453498696807eced54dd6.webp"
      },
      {
        "id": 184180,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO BARCELONA/CLARICE PLUS C/ ESP. - FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453338886807ae80b3787.webp"
      },
      {
        "id": 184181,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUP. BARCELONA/CLARICE PLUS C/ ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453500446807ed9cba9e4.webp"
      },
      {
        "id": 184182,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO BAHIA 3 PTS PLUS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453500846807edc49ff82.webp"
      },
      {
        "id": 184187,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO ARIZONA 3 PORTAS DE CORRER - IPE VANILLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453502176807ee49c1584.webp"
      },
      {
        "id": 184188,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ARIES C/ ESPELHO E PÉS - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453503406807eec422653.webp"
      },
      {
        "id": 184189,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ARIES C/ ESPELHO E PÉS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453504416807ef29f35bb.webp"
      },
      {
        "id": 184190,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ARAMOVEIS 7 PTS GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453504716807ef47166eb.webp"
      },
      {
        "id": 184192,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ANTARES 6 PORT PRIME - CINAM / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453511746807f20682d9e.webp"
      },
      {
        "id": 184193,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ANTARES 6 PORTAS PRIME - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453511746807f20682d9e.webp"
      },
      {
        "id": 184194,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUP. ANJOS C/ 9 GAV. E ESP. - DEMOLIÇÃO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453513256807f29dbb674.webp"
      },
      {
        "id": 184195,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO ANJOS C/ 9 GAVETAS E ESPELHO - DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453513856807f2d9f2df6.webp"
      },
      {
        "id": 184196,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUP. ANJOS C/ 9 GAV. E ESP. - CINAMOMO/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453514256807f301eac1d.webp"
      },
      {
        "id": 184197,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO ANJOS C/ 9 GAVETAS E ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453514616807f3258611e.webp"
      },
      {
        "id": 184201,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5142 GOLD 4P 2G - EBANO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429439680923bf13d33.webp"
      },
      {
        "id": 184202,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5142 GOLD 4P 2G - ATACAMA/OFF  WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453516896807f40915839.webp"
      },
      {
        "id": 184203,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5142 GOLD 4P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453517026807f416d0290.webp"
      },
      {
        "id": 184204,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5142 GOLD 4P 2G - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453517456807f441255ce.webp"
      },
      {
        "id": 184205,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5138 GOLD 6P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453517626807f452292c5.webp"
      },
      {
        "id": 184206,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5138 GOLD 6P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453517876807f46b47306.webp"
      },
      {
        "id": 184207,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5138 GOLD 6P 2G - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453518306807f496952dc.webp"
      },
      {
        "id": 184208,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5132 GOLD 3P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453518706807f4bedc405.webp"
      },
      {
        "id": 184209,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5132 GOLD 3P 2G - ATACAMA/ OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453518936807f4d5f1d66.webp"
      },
      {
        "id": 184210,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5132 GOLD 3P 2G - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453519626807f51aa65f4.webp"
      },
      {
        "id": 184211,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPE 0240 ALTO 4P 2G INTERNAS - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453519816807f52d82071.webp"
      },
      {
        "id": 184212,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 0240 ALTO 4P 2G INTERNAS - ATACAMA/AREIA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453519946807f53a99bde.webp"
      },
      {
        "id": 184213,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 6020 6P 2G INTERNAS - EBANO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429486680923ee032aa.webp"
      },
      {
        "id": 184214,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 0230 6P 2G INTERNAS - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453521356807f5c7ac50a.webp"
      },
      {
        "id": 184215,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 0230 6P 2G INTERNAS - ATACAMA/AREIA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453521516807f5d7cdeb3.webp"
      },
      {
        "id": 184216,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 0230 6P 2G INTERNAS - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453521806807f5f480dac.webp"
      },
      {
        "id": 184219,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK VINCI - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453522266807f62258413.webp"
      },
      {
        "id": 184220,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK VINCI - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453522516807f63b12303.webp"
      },
      {
        "id": 184221,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK VINCI - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453522646807f64814bf1.webp"
      },
      {
        "id": 184222,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK TITAN - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453523736807f6b5a6f06.webp"
      },
      {
        "id": 184223,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK TITAN - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453523966807f6cc311fe.webp"
      },
      {
        "id": 184224,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK TITAN - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453524146807f6de0ba30.webp"
      },
      {
        "id": 184225,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK STAR PRETO/CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453524526807f70456527.webp"
      },
      {
        "id": 184226,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK STAR OFF WHITE/CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453524706807f7168da00.webp"
      },
      {
        "id": 184227,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK LIVERPOOL - OFF WHITE",
        "imagem": ""
      },
      {
        "id": 184228,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK LEGACY 2.0 MTS - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453525126807f74080024.webp"
      },
      {
        "id": 184229,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK LEGACY 2.0 MTS - CEDRO / PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453525406807f75c91cf2.webp"
      },
      {
        "id": 184230,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK KING - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453526396807f7bf5c6a7.webp"
      },
      {
        "id": 184231,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK KING - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453526546807f7ceb2c1b.webp"
      },
      {
        "id": 184234,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK DARIN - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453527196807f80fea5eb.webp"
      },
      {
        "id": 184235,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK DARIN - FENDI",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453527486807f82c7998c.webp"
      },
      {
        "id": 184236,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK DARIN - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453527726807f8440eaba.webp"
      },
      {
        "id": 184237,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK CAYMAN - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453527896807f855c064f.webp"
      },
      {
        "id": 184238,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK CAYMAN - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453528076807f8677fa3f.webp"
      },
      {
        "id": 184239,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK C/ PAINEL LEGACY - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453528356807f88395e31.webp"
      },
      {
        "id": 184242,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK ARUBA - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453529316807f8e3489bb.webp"
      },
      {
        "id": 184243,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK ARUBA - NOGUEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453529926807f920a1859.webp"
      },
      {
        "id": 184244,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK ARUBA - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453532386807fa1636700.webp"
      },
      {
        "id": 184245,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK ANDROS - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453532746807fa3a3a36d.webp"
      },
      {
        "id": 184246,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK ANDROS - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453532856807fa45516d6.webp"
      },
      {
        "id": 184248,
        "categoria": [
          "Acessórios",
          "Kits"
        ],
        "nomeDoProduto": "PORTA COPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453533376807fa7909e45.webp"
      },
      {
        "id": 184249,
        "categoria": [
          "Sala",
          "Poltronas"
        ],
        "nomeDoProduto": "POLTRONA VINTAGE C/ TECIDO EM LINHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453534136807fac5d9a2c.webp"
      },
      {
        "id": 184250,
        "categoria": [
          "Sala",
          "Poltronas"
        ],
        "nomeDoProduto": "POLTRONA SAMOA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453534416807fae13a890.webp"
      },
      {
        "id": 184251,
        "categoria": [
          "Sala",
          "Poltronas"
        ],
        "nomeDoProduto": "POLTRONA OPALA C/ PÉS RETRÔ - CORES VARIADAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453534986807fb1a89142.webp"
      },
      {
        "id": 184252,
        "categoria": [
          "Sala",
          "Poltronas"
        ],
        "nomeDoProduto": "POLTRONA ADULTA C/ PÉS RETRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453535366807fb40b3d55.webp"
      },
      {
        "id": 184264,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL MASTER 1.80 RIPADO - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453538956807fca7ca9bd.webp"
      },
      {
        "id": 184265,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL MASTER 1.8 / - FENDI",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/1747224028682485dcf056a.webp"
      },
      {
        "id": 184268,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453544936807fefd749e6.webp"
      },
      {
        "id": 184269,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453545116807ff0f8e33d.webp"
      },
      {
        "id": 184270,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX - NOGAL / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453561476808057390216.webp"
      },
      {
        "id": 184271,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX - CEDRO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453561586808057eec0b3.webp"
      },
      {
        "id": 184272,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356214680805b682ee6.webp"
      },
      {
        "id": 184273,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356226680805c23d039.webp"
      },
      {
        "id": 184274,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL DUNAS - OFF WHITE + NATURALE",
        "imagem": ""
      },
      {
        "id": 184281,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL AVANT 1.80 - NOGUEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/174535629468080606035c6.webp"
      },
      {
        "id": 184282,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL AVANT 1.80 - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/174535633668080630a8749.webp"
      },
      {
        "id": 184283,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL AVANT 1.35 - NOGUEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/174535635668080644837c9.webp"
      },
      {
        "id": 184284,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL AVANT 1.35 - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356408680806783088b.webp"
      },
      {
        "id": 184285,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL ARBO RIPADO C/ NICHO - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356498680806d206440.webp"
      },
      {
        "id": 184286,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL ARBO RIPADO C/ NICHO - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453565746808071e77a02.webp"
      },
      {
        "id": 184287,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL ( DAVOS / DIJON ) - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453566516808076be7a64.webp"
      },
      {
        "id": 184288,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL ( DAVOS / DIJON ) - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453566666808077aba9bd.webp"
      },
      {
        "id": 184289,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "NICHO DIOR 1.60 OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/174535669368080795778ac.webp"
      },
      {
        "id": 184295,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO PREMIUM C/ ESP. FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356742680807c607fd5.webp"
      },
      {
        "id": 184296,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO PREMIUM C/ ESP. BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356763680807db510ca.webp"
      },
      {
        "id": 184297,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO NEW - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356777680807e991dd4.webp"
      },
      {
        "id": 184298,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO NEW - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453568106808080a53998.webp"
      },
      {
        "id": 184299,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO NEW - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/174535683868080826eb5cc.webp"
      },
      {
        "id": 184300,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO NEW - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356867680808433b29a.webp"
      },
      {
        "id": 184306,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453569426808088eaf91f.webp"
      },
      {
        "id": 184307,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - ACACIA MADEIRADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-09/1752088245686ebeb5e0cb0.webp"
      },
      {
        "id": 184308,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - ACACIA / REFLECTA BRILHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-09/1752088257686ebec16f141.webp"
      },
      {
        "id": 184309,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO ALTO 4P - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745357013680808d5196ed.webp"
      },
      {
        "id": 184310,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO ALTO 4P - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454187926808fa282c621.webp"
      },
      {
        "id": 184313,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO 1.83 MTS - EBANO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454190116808fb03b658c.webp"
      },
      {
        "id": 184314,
        "categoria": [
          "Roupeiros",
          "Modulados"
        ],
        "nomeDoProduto": "MODULADO 5 PORTAS - FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454190436808fb232195d.webp"
      },
      {
        "id": 184321,
        "categoria": [
          "Mesas",
          "Sala de jantar"
        ],
        "nomeDoProduto": "MESA PETRA 1.20 X 0.80 EM MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454252056809133558c74.webp"
      },
      {
        "id": 184322,
        "categoria": [
          "Mesas",
          "Sala de jantar"
        ],
        "nomeDoProduto": "MESA PETRA 1.03 X 1.03 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745425355680913cb170bb.webp"
      },
      {
        "id": 184323,
        "categoria": [
          "Mesas",
          "Sala de jantar"
        ],
        "nomeDoProduto": "MESA PETRA 0.90 X 0.90 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745425355680913cb170bb.webp"
      },
      {
        "id": 184327,
        "categoria": [
          "Mesas",
          "Sala de jantar"
        ],
        "nomeDoProduto": "MESA HERA 1.60 X 0.90 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745425886680915dec0784.webp"
      },
      {
        "id": 184328,
        "categoria": [
          "Mesas",
          "Sala de jantar"
        ],
        "nomeDoProduto": "MESA HERA 1.20 X 0.80 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745425886680915dec0784.webp"
      },
      {
        "id": 184329,
        "categoria": [
          "Mesas",
          "Sala de jantar"
        ],
        "nomeDoProduto": "MESA DUBAI 1.60 X 0.80 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174542834968091f7d67956.webp"
      },
      {
        "id": 184330,
        "categoria": [
          "Mesas",
          "Sala de jantar"
        ],
        "nomeDoProduto": "MESA DUBAI 1.20 X 0.80 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174542834968091f7d67956.webp"
      },
      {
        "id": 184332,
        "categoria": [
          "Sala",
          "Mesa de Centro"
        ],
        "nomeDoProduto": "MESA DE CENTRO HOLAMBRA - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454285406809203c582e6.webp"
      },
      {
        "id": 184333,
        "categoria": [
          "Sala",
          "Mesa de Centro"
        ],
        "nomeDoProduto": "MESA DE CENTRO HOLAMBRA - FENDI",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745428561680920518c91a.webp"
      },
      {
        "id": 184334,
        "categoria": [
          "Sala",
          "Mesa de Centro"
        ],
        "nomeDoProduto": "MESA DE CENTRO CDK",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745428655680920af29276.webp"
      },
      {
        "id": 184335,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA VILLARE - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543107068092a1e126f7.webp"
      },
      {
        "id": 184336,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA VILLARE - PEROLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543108668092a2e04cb8.webp"
      },
      {
        "id": 184341,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA URBAN - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174542909268092264ab213.webp"
      },
      {
        "id": 184342,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA URBAN - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174542910468092270ac84d.webp"
      },
      {
        "id": 184343,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA CITY - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429239680922f737879.webp"
      },
      {
        "id": 184344,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA CITY - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174542983068092546f21ec.webp"
      },
      {
        "id": 184348,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "MESA COM 3 PRATELEIRAS EM AÇO - FREIJO / PRETO FOSCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429972680925d44e2ef.webp"
      },
      {
        "id": 184349,
        "categoria": [
          "Mesas",
          "Sala de jantar"
        ],
        "nomeDoProduto": "MESA COM 2 BANCOS - FREIJO / PRETO FOSCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429988680925e491e9d.webp"
      },
      {
        "id": 184350,
        "categoria": [
          "Mesas",
          "Sala de jantar"
        ],
        "nomeDoProduto": "MESA BELA 0.90 X 0.90 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745430049680926211dc61.webp"
      },
      {
        "id": 184356,
        "categoria": [
          "Lavadoras",
          "Tanquinho"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 20.5 KG - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454301136809266110a91.webp"
      },
      {
        "id": 184357,
        "categoria": [
          "Lavadoras",
          "Tanquinho"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 20.5 KG - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454301136809266110a91.webp"
      },
      {
        "id": 184358,
        "categoria": [
          "Lavadoras",
          "Tanquinho"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 14 KG - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745430188680926ac60ae2.webp"
      },
      {
        "id": 184359,
        "categoria": [
          "Lavadoras",
          "Tanquinho"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 14 KG - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745430188680926ac60ae2.webp"
      },
      {
        "id": 184360,
        "categoria": [
          "Lavadoras",
          "Tanquinho"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 10KG 220 V - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745430501680927e59d310.webp"
      },
      {
        "id": 184365,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "LAMINA RIPADA ARBO 0.94 MTS - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543059468092842380ac.webp"
      },
      {
        "id": 184366,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "LAMINA RIPADA ARBO 0.94 MTS - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543059468092842380ac.webp"
      },
      {
        "id": 184367,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT PAQUETA 910 PLUS - LM / RIPADO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543117068092a82f06ba.webp"
      },
      {
        "id": 184368,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT PAQUETA 910 - LM MEL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543121368092aadcfa2e.webp"
      },
      {
        "id": 184369,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT PAQUETA 910 - GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543126168092adde6cda.webp"
      },
      {
        "id": 184370,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT PAQUETA 1210 - RIPADO BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745430885680929652ab29.webp"
      },
      {
        "id": 184371,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT PAQUETÁ 1210 - LM  MEL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745430976680929c03c4ac.webp"
      },
      {
        "id": 184372,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT PAQUETA 1210 - GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543104468092a048972c.webp"
      },
      {
        "id": 184378,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT GOLF REFLECTA 5P 2G - RIPADO /ARENAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543187968092d47db65e.webp"
      },
      {
        "id": 184379,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT GOLF REFLECTA 5P 2G - LM/BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543189768092d5990ded.webp"
      },
      {
        "id": 184380,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT GOLF REFLECTA 5P 2G - ARENAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543227168092ecfcfb01.webp"
      },
      {
        "id": 184381,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT GOLF REFLECTA - CINZA SUPREMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543210868092e2c7aede.webp"
      },
      {
        "id": 184383,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT CEARA 5 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/17472318716824a47febc32.webp"
      },
      {
        "id": 184384,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT CEARA 5 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745432617680930295341e.webp"
      },
      {
        "id": 184385,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT CEARA 5 PORTAS - ACACIA MADEIRADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745432791680930d7e7a65.webp"
      },
      {
        "id": 184386,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT CEARA 4 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745432816680930f0da41e.webp"
      },
      {
        "id": 184387,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT CEARA 4 PORTAS - 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745432827680930fb6dc0c.webp"
      },
      {
        "id": 184388,
        "categoria": [
          "Acessórios",
          "Kits"
        ],
        "nomeDoProduto": "KIT C/ 8 PES - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745432999680931a77b369.webp"
      },
      {
        "id": 184389,
        "categoria": [
          "Acessórios",
          "Kits"
        ],
        "nomeDoProduto": "KIT C/ 8 PES - IMBUIA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745433081680931f978a90.webp"
      },
      {
        "id": 184390,
        "categoria": [
          "Acessórios",
          "Kits"
        ],
        "nomeDoProduto": "KIT C/ 8 PES - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454331516809323f64437.webp"
      },
      {
        "id": 184395,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "JOGO DE MESA CROMO C/ 4 CAD. BR SEM TAMPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-01/174614297868140702097ee.webp"
      },
      {
        "id": 184397,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO MAXI - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745432805680930e5cca51.webp"
      },
      {
        "id": 184398,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO MAXI - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745432823680930f73ea99.webp"
      },
      {
        "id": 184399,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO MAXI - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454333566809330c5ba53.webp"
      },
      {
        "id": 184400,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO MAXI - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745433305680932d978584.webp"
      },
      {
        "id": 184401,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO AVANT 1.8 C/ NICHO - NOGUEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454336586809343ac5b10.webp"
      },
      {
        "id": 184402,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO AVANT 1.8 C/ NICHO - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454341986809365673ed0.webp"
      },
      {
        "id": 184403,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO AVANT 1.4 C/ NICHO - NOGUEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454336586809343ac5b10.webp"
      },
      {
        "id": 184404,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO AVANT 1.4 C/ NICHO - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434307680936c37bdd3.webp"
      },
      {
        "id": 184406,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "HOME IPANEMA - NATURE / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-01/174614379168140a2fc023b.webp"
      },
      {
        "id": 184408,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA REGIA - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745433382680933266a759.webp"
      },
      {
        "id": 184409,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA MARTA - MONTANA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745433555680933d32abdb.webp"
      },
      {
        "id": 184410,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA MARTA - LM / LM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745433520680933b0f176e.webp"
      },
      {
        "id": 184411,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA MARTA - LM / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745433575680933e72a525.webp"
      },
      {
        "id": 184412,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA MARTA - CARVALHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745433555680933d32abdb.webp"
      },
      {
        "id": 184413,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA MARTA - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454336136809340d2fc01.webp"
      },
      {
        "id": 184415,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA DALLAS - LM / LM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454341416809361d3dc61.webp"
      },
      {
        "id": 184416,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA DALLAS - LM / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745434183680936470f5ba.webp"
      },
      {
        "id": 184417,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA DALLAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454342396809367fcb470.webp"
      },
      {
        "id": 184418,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA DALLAS - BCO / CARVALHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454342706809369e1acae.webp"
      },
      {
        "id": 184421,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGÃO MONACO TOP GLASS 5 BOCAS PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434291680936b3c4d7d.webp"
      },
      {
        "id": 184422,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGÃO MONACO TOP GLASS 5 BOCAS BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434304680936c05d5c1.webp"
      },
      {
        "id": 184423,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGÃO MONACO TOP GLASS 4 BOCAS PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434318680936ce17a2a.webp"
      },
      {
        "id": 184424,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGÃO MONACO TOP GLASS 4 BOCAS BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434330680936dabffe7.webp"
      },
      {
        "id": 184425,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGAO GAS 5Q MONACO PLUS PTO 20",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434350680936eee65b8.webp"
      },
      {
        "id": 184426,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGAO GAS 5Q MONACO PLUS BCO 20",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434361680936f992dcb.webp"
      },
      {
        "id": 184427,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGÃO GAS 5BC MONACO TOP GLASS BCO 12",
        "imagem": "https://phizclip-assets.phiz.live/phizshop/pro/Store/Goods/2025-04-23/17454344096809372991bc2.gif"
      },
      {
        "id": 184428,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGAO GAS 4BC COLISEUM PRETO S A 12",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454344296809373db7f08.webp"
      },
      {
        "id": 184429,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGAO GAS 4BC COLISEUM BCO S A 12",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454344466809374e0e1f5.webp"
      },
      {
        "id": 184430,
        "categoria": [
          "Cozinha",
          "Cooktop"
        ],
        "nomeDoProduto": "FOGÃO COOKTOP GOLD 5 BOCAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454344586809375ac8ac7.webp"
      },
      {
        "id": 184433,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGAO 4 BOCAS MONACO PLUS PTO 20",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-20/1747744884682c7874ba4e6.webp"
      },
      {
        "id": 184434,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGAO 4 BOCAS MONACO PLUS BCO 20",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454344786809376ee14be.webp"
      },
      {
        "id": 184435,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.9 MTS C/ PORTA COPO - CINZA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856105680fa6693a057.webp"
      },
      {
        "id": 184436,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.50 MTS - C/ PORTA COPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-27/1745780722680e7ff2cb766.webp"
      },
      {
        "id": 184437,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.5 MTS C/ PORTA COPO",
        "imagem": ""
      },
      {
        "id": 184438,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.1 MTS C/ PORTA COPO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856076680fa64cc4a67.webp"
      },
      {
        "id": 184445,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO RETRATIL RECLINAVEL 3080",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-05/174647218868190cfc2ce8b.webp"
      },
      {
        "id": 184456,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO MORF 2.90 MTS - AZUL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-09/1746811721681e3b4960442.webp"
      },
      {
        "id": 184463,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO LIFE 2.0 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543535268093ad870f13.webp"
      },
      {
        "id": 184464,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO LAUS PRIME 2.90 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543545368093b3d438f5.webp"
      },
      {
        "id": 184465,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO LAUS PRIME 2.50 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543547768093b5589aab.webp"
      },
      {
        "id": 184466,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO LAUS PRIME 2.00 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543551168093b779f8e0.webp"
      },
      {
        "id": 184467,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO LARISSA DE CANTO - CORES VARIADAS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856095680fa65fc4127.webp"
      },
      {
        "id": 184474,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO BARCELONA  2 E 3 LUG.",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856097680fa66132bd5.webp"
      },
      {
        "id": 184475,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ATLANTA 2.9 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543548668093b5ee7209.webp"
      },
      {
        "id": 184476,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ATLANTA 2.5 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543549568093b6766ece.webp"
      },
      {
        "id": 184477,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ATLANTA 2.0 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543550268093b6e8a0ef.webp"
      },
      {
        "id": 184478,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ATLANTA  2.90 MTS C/ MOLAS ENSACADAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/1746213040681518b048929.webp"
      },
      {
        "id": 184479,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ATLANTA  2.50 MTS C/ MOLAS ENSACADAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/1746213047681518b79c211.webp"
      },
      {
        "id": 184480,
        "categoria": [
          "Ecritório",
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE OFFICE - NATURE / PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543554568093b99eef3f.webp"
      },
      {
        "id": 184481,
        "categoria": [
          "Ecritório",
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE OFFICE - BRANCO / NATURE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543555468093ba2954c7.webp"
      },
      {
        "id": 184482,
        "categoria": [
          "Ecritório",
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE LIVREIRO LARISSA - ROSE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543556568093bad4d593.webp"
      },
      {
        "id": 184483,
        "categoria": [
          "Ecritório",
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE LIVREIRO LARISSA - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543575568093c6b6a204.webp"
      },
      {
        "id": 184484,
        "categoria": [
          "Ecritório",
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE LIVREIRO LARISSA - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543576568093c7561c69.webp"
      },
      {
        "id": 184485,
        "categoria": [
          "Ecritório",
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE DE AÇO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543578568093c8925b21.webp"
      },
      {
        "id": 184494,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA TAURUS 1.20 MTS - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543595768093d3526529.webp"
      },
      {
        "id": 184495,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA TAURUS 1.20 MTS - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543597168093d431dbc4.webp"
      },
      {
        "id": 184497,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA OFFICE - NATURE / PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543560468093bd481a5c.webp"
      },
      {
        "id": 184500,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA EM 'l' THOR - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543562968093bede69e5.webp"
      },
      {
        "id": 184501,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA EM L TAURUS - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543566468093c1037af2.webp"
      },
      {
        "id": 184502,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA EM L TAURUS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543571068093c3ef2a70.webp"
      },
      {
        "id": 184503,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA ARIEL - MEL / PEROLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543575968093c6f01ec6.webp"
      },
      {
        "id": 184504,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA ARIEL - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543577568093c7fec967.webp"
      },
      {
        "id": 184505,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA ARIEL - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543578568093c8923732.webp"
      },
      {
        "id": 184507,
        "categoria": [
          "Cozinha",
          "Cozinhas"
        ],
        "nomeDoProduto": "COZINHA VITORIA SOMENTE O \"L\" - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543138068092b547b17c.webp"
      },
      {
        "id": 184508,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA VITORIA SOMENTE O \"L\" - GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543164968092c61b734d.webp"
      },
      {
        "id": 184521,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA THALIA / AGATHA - LM / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745430757680928e5bc25f.webp"
      },
      {
        "id": 184522,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA THALIA / AGATHA - LM / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745430740680928d4bb45e.webp"
      },
      {
        "id": 184523,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA THALIA / AGATHA - ARENAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543117568092a87c8c7f.webp"
      },
      {
        "id": 184524,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA SIENA 6P 1G - AVENA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745430444680927acbbc28.webp"
      },
      {
        "id": 184525,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA SIENA 6P 1G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745430344680927484ab90.webp"
      },
      {
        "id": 184527,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA ROMA 4P 2G - AVENA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543027968092707c5c16.webp"
      },
      {
        "id": 184528,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA ROMA 4P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429946680925bae305a.webp"
      },
      {
        "id": 184529,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA RAVENA - MADEIRADO REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543170068092c9495c2f.webp"
      },
      {
        "id": 184530,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA RAVENA - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-09/1752088734686ec09e8c7d8.webp"
      },
      {
        "id": 184531,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA PREMIUM 1800 7P 2G- MONTANA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543233368092f0d515ad.webp"
      },
      {
        "id": 184532,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA PREMIUM 1800 7P 2G - MONTANA/BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454326766809306442f82.webp"
      },
      {
        "id": 184533,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA PREMIUM 1800 7P 2G - MONTANA/ARENA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745432824680930f811d77.webp"
      },
      {
        "id": 184534,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA MONACO - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745433062680931e67fbf0.webp"
      },
      {
        "id": 184535,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA MONACO - CANELATO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745433077680931f59b1ac.webp"
      },
      {
        "id": 184538,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA MILA 5P 3G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454331566809324411eb8.webp"
      },
      {
        "id": 184539,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA MILA 5P 3G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543316868093250c5371.webp"
      },
      {
        "id": 184540,
        "categoria": [
          "Cozinha",
          "Em Aço"
        ],
        "nomeDoProduto": "COZINHA MADRI 4 PEÇAS EM AÇO - TERRACOTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454334506809336a8b496.webp"
      },
      {
        "id": 184542,
        "categoria": [
          "Cozinha",
          "Em Aço"
        ],
        "nomeDoProduto": "COZINHA MADRI 4 PEÇAS EM AÇO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454336456809342d187a8.webp"
      },
      {
        "id": 184543,
        "categoria": [
          "Cozinha",
          "Em Aço"
        ],
        "nomeDoProduto": "COZINHA MADRI 4 PEÇAS EM AÇO - AZUL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454337346809348632325.webp"
      },
      {
        "id": 184544,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA LANA C/ BALCÃO 6P 3G - MARROCOS/BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434066680935d25bb29.webp"
      },
      {
        "id": 184545,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA JUMA C/ BALCÃO 7P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745434292680936b43c900.webp"
      },
      {
        "id": 184546,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA JUMA C/ BALCÃO 7P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434317680936cd31cb3.webp"
      },
      {
        "id": 184547,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA ISIS 5P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454344316809373f4b84c.webp"
      },
      {
        "id": 184548,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA ISIS 5P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543445168093753f41dd.webp"
      },
      {
        "id": 184549,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA ISABELLE C/ BALCÃO 6P 2G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454344926809377ca10a3.webp"
      },
      {
        "id": 184550,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA ISABELLE C/ BALCÃO 6P 2G - ATAC./OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434531680937a379deb.webp"
      },
      {
        "id": 184551,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA ISABELLE C/ BALCÃO 6P 1G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434543680937af19082.webp"
      },
      {
        "id": 184552,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA FUTURA / IBIZA 2.13 - LM / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454346386809380e2564f.webp"
      },
      {
        "id": 184553,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA FUTURA / IBIZA 2.13 - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454347196809385fc60b2.webp"
      },
      {
        "id": 184554,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA FUTURA / IBIZA 2.13 - ARENAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745434860680938ec2c0e8.webp"
      },
      {
        "id": 184555,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA FORTALEZA C/ BALCAO - CANELATO/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543521568093a4fc42a9.webp"
      },
      {
        "id": 184557,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA EMILY C/ BALCÃO 6P 1G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543575868093c6e7c998.webp"
      },
      {
        "id": 184559,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA CEARA 4P 1G - ACACIA MADEIRADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543598068093d4c9b9d6.webp"
      },
      {
        "id": 184562,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA CAROL 6P 1G - ATACAMA/BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543607568093dabbd3f9.webp"
      },
      {
        "id": 184565,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA ATENAS C/ BALCÃO 8P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543607468093daade95c.webp"
      },
      {
        "id": 184566,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA ATENAS C/ BALCÃO 8P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543609068093dba4b840.webp"
      },
      {
        "id": 184567,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZ ANGELINA PRIME FRISADA - CINAMOMO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543610068093dc41941b.webp"
      },
      {
        "id": 184568,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZ ANGELINA PRIME FRISADA - CINAMOMO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543610868093dcc25ede.webp"
      },
      {
        "id": 184569,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA ALINE - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543613268093de4827a8.webp"
      },
      {
        "id": 184570,
        "categoria": [
          "Cozinha",
          "Em Aço"
        ],
        "nomeDoProduto": "COZINHA ALANA EM AÇO 8P 1G - BRANCO/AZUL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543616068093e0023135.webp"
      },
      {
        "id": 184571,
        "categoria": [
          "Cozinha",
          "Em Aço"
        ],
        "nomeDoProduto": "COZINHA ALANA EM AÇO - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543616768093e078215a.webp"
      },
      {
        "id": 184572,
        "categoria": [
          "Cozinha",
          "Em Aço"
        ],
        "nomeDoProduto": "COZINHA ALANA EM AÇO - BRANCO/TERRACOTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543621168093e33d7922.webp"
      },
      {
        "id": 184573,
        "categoria": [
          "Cozinha",
          "Em Aço"
        ],
        "nomeDoProduto": "COZINHA ALANA EM AÇO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543621968093e3bb541a.webp"
      },
      {
        "id": 184574,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZ 910 4P 2G C/ 2 P. DE ABRIR- ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/17472312926824a23c62159.webp"
      },
      {
        "id": 184575,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT 910 4P 2G C/ 2 P. DE ABRIR- ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/17472315986824a36e45b42.webp"
      },
      {
        "id": 184576,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZ.1210 4P 1G C/ 2 P. DE COR. - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/17472314496824a2d930f23.webp"
      },
      {
        "id": 184577,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZ 1210 4P 1G C/ 2 P. DE CORRER - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543611068093dcedc63b.webp"
      },
      {
        "id": 184587,
        "categoria": [
          "Cozinha",
          "Cooktop"
        ],
        "nomeDoProduto": "COOKTOP GAS 5Q ATLAS AGILE UP GLASS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543613068093de26e722.webp"
      },
      {
        "id": 184588,
        "categoria": [
          "Cozinha",
          "Cooktop"
        ],
        "nomeDoProduto": "COOKTOP DAKO SUPREME 5 BOCAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543615568093dfba2ca3.webp"
      },
      {
        "id": 184590,
        "categoria": [
          "Cozinha",
          "Cooktop"
        ],
        "nomeDoProduto": "COOKTOP ATLAS TRIPLA CHAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543618768093e1b40c90.webp"
      },
      {
        "id": 184597,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJUNTO BIANCA 1,40 X 0,75 C/ 6 CAD. BR SEM TAMPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-01/17461341546813e48a97738.webp"
      },
      {
        "id": 184598,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJUNTO BIANCA 1,20 X 0,75 C/ 4 CAD. PT SEM TAMPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460528106812a6cabee49.webp"
      },
      {
        "id": 184599,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJUNTO BIANCA 0,75 X 1,40 C/ 6 CAD. PT SEM TAMPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460528006812a6c09e50c.webp"
      },
      {
        "id": 184600,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJUNTO BIANCA 0,75 X 1,40 C/ 6 CADEIRAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543658468093fa8a1732.webp"
      },
      {
        "id": 184601,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJ. BIANCA 0,7 5 X1,20 C/ 4 Cd- OURO ENVELHECIDO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543720268094212c6704.webp"
      },
      {
        "id": 184602,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJUNTO BIANCA 0,75 X 1,20 C/ 4 CADEIRAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454372746809425a1c950.webp"
      },
      {
        "id": 184603,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJ. BIANCA 0,75 X 0,75 C/ 4 CAD. S/ TAMPO PT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543701468094156cab8b.webp"
      },
      {
        "id": 184604,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJUNTO BIANCA 0,75 X 0,75 C/ 4 CAD. BR SEM TAMPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745437097680941a9e7ec2.webp"
      },
      {
        "id": 184611,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA SKY 1P 3G - MEL/PEROLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437312680942805ebfc.webp"
      },
      {
        "id": 184612,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA  SKY 1P 3G - BRANCA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454373296809429185aa6.webp"
      },
      {
        "id": 184613,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA SKY 1P 3G - AMENDOA WOOD",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454373426809429e56186.webp"
      },
      {
        "id": 184614,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA SEVILHA 1P 5G C/ PORTA JOIAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437426680942f2553dc.webp"
      },
      {
        "id": 184615,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA SEVILHA 1P 4G C/ PORTA JOIAS - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437439680942ff968b9.webp"
      },
      {
        "id": 184616,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA SAPATEIRA ECCOS - NATURE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543625068093e5a006f8.webp"
      },
      {
        "id": 184617,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA SAPATEIRA ECCOS - GIANDUIA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543625768093e6181f2d.webp"
      },
      {
        "id": 184620,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA MILÃO 1P 5G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543626868093e6cb92c8.webp"
      },
      {
        "id": 184621,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA MILÃO 1P 5G - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543627768093e751163e.webp"
      },
      {
        "id": 184622,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA MILÃO  1P 5G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543628668093e7e5a9ee.webp"
      },
      {
        "id": 184623,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA LONDRES 2P 4G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543631568093e9be77ed.webp"
      },
      {
        "id": 184624,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA LONDRES 2P 4G - ATCAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543632268093ea2a5bfe.webp"
      },
      {
        "id": 184628,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA JADE 8G - PEROLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543633468093eae1817b.webp"
      },
      {
        "id": 184629,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA JADE 8G - FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543634568093eb9069d2.webp"
      },
      {
        "id": 184630,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA JADE 8G - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543635668093ec401417.webp"
      },
      {
        "id": 184631,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA JADE 8G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543637168093ed373880.webp"
      },
      {
        "id": 184632,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA DETROIT NEW - JEQUITIBA / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543638768093ee3137dc.webp"
      },
      {
        "id": 184633,
        "categoria": [
          "Linha Infantil",
          "Kids"
        ],
        "nomeDoProduto": "CÔMODA  CATATAU NEW 3GAV - BCO/RS/NAT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543640768093ef7e8024.webp"
      },
      {
        "id": 184649,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO SUPREME D-20 0.78 X 1.88",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543647868093f3e51595.webp"
      },
      {
        "id": 184650,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO SUPREME D-20 - 0.88 X 1.88",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543648668093f46dc8c5.webp"
      },
      {
        "id": 184651,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO SUPREME CASAL D-20 - 1.38 X 1.88",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543650068093f54e6028.webp"
      },
      {
        "id": 184654,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO MERCURIO 1.38 X 1.88 C/ 26 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543651468093f62b28d5.webp"
      },
      {
        "id": 184658,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER MLSP 1.58 X 1.98 X 0.25",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543668968094011047de.webp"
      },
      {
        "id": 184659,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER MlSP 1.38 X 1.88 X 0.25",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543668968094011047de.webp"
      },
      {
        "id": 184660,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-45 CASAL C/22 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543678568094071b2943.webp"
      },
      {
        "id": 184661,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 CASAL C/14",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745436874680940ca0ba71.webp"
      },
      {
        "id": 184662,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 CASAL C/ 17 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745436909680940ed5aed2.webp"
      },
      {
        "id": 184663,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 0.88 C/17",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745436909680940ed5aed2.webp"
      },
      {
        "id": 184664,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 0.88 C/14",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454369686809412802e8d.webp"
      },
      {
        "id": 184665,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 0.78 C/17",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454369686809412802e8d.webp"
      },
      {
        "id": 184666,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 0.78 C/14",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745436909680940ed5aed2.webp"
      },
      {
        "id": 184669,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO D-33 C/ 22 CM SLT- 0.88 X 1.88 X 0.22",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745436909680940ed5aed2.webp"
      },
      {
        "id": 184670,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO D-33 C/ 22 CM QUEEN - 1.58 X 1.88 X 0.22",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543707368094191c5ef1.webp"
      },
      {
        "id": 184671,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO D-33 C/ 22 CM CASAL - 1.38 X 1.88 X 0.22",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543707368094191c5ef1.webp"
      },
      {
        "id": 184675,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO CASAL GOIAS D-20 12 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437170680941f2673ba.webp"
      },
      {
        "id": 184678,
        "categoria": [
          "Climatização",
          "Climatizador"
        ],
        "nomeDoProduto": "CLIMATIZADOR 60 LITROS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454371986809420e41576.webp"
      },
      {
        "id": 184679,
        "categoria": [
          "Climatização",
          "Climatizador"
        ],
        "nomeDoProduto": "CLIMATIZADOR 125 LITROS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543720668094216dc57e.webp"
      },
      {
        "id": 184682,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "CAMA CASAL CLARA - FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437239680942371e9c4.webp"
      },
      {
        "id": 184683,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "CAMA CASAL CLARA - DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543927968094a2f851eb.webp"
      },
      {
        "id": 184686,
        "categoria": [
          "Cama",
          "Acoplados"
        ],
        "nomeDoProduto": "CAMA BOX SOLTEIRO 10 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437149680941ddca4e0.webp"
      },
      {
        "id": 184687,
        "categoria": [
          "Cama",
          "Acoplados"
        ],
        "nomeDoProduto": "CAMA BOX CASAL 10 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543718968094205b16b2.webp"
      },
      {
        "id": 184689,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "CAMA BIBOX COM BAU E GAV. - JACARANDA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543722168094225c2f43.webp"
      },
      {
        "id": 184690,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "CAMA BIBOX COM BAU E GAV. - CAMARU",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437240680942387bb3b.webp"
      },
      {
        "id": 184691,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "CAMA BIBOX COM BAU E GAV. - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454372626809424e08224.webp"
      },
      {
        "id": 184693,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "CAMA BAU JADE C/ GAV. - NATURE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437539680943637ba19.webp"
      },
      {
        "id": 184694,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "CAMA BAU JADE C/ GAV. - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454375556809437319d37.webp"
      },
      {
        "id": 184695,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "CAMA AUXILIAR 0.90 ELEGANZA NATURE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745439201680949e1dd394.webp"
      },
      {
        "id": 184696,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "CAMA AUXILIAR 0.90 ELEGANZA JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745439218680949f272016.webp"
      },
      {
        "id": 184697,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "CAMA AUXILIAR 0.90 ELEGANZA BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454373066809427a26242.webp"
      },
      {
        "id": 184698,
        "categoria": [
          "Banheiro",
          "Espelho"
        ],
        "nomeDoProduto": "Caixa C/ 2 espelhos 0.70 x 0.20",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-06-27/1751027364685e8ea43d929.webp"
      },
      {
        "id": 184699,
        "categoria": [
          "Cadeiras Avulsas",
          "Cadeiras"
        ],
        "nomeDoProduto": "CADEIRA VIVACE PLUS - TECIDO CASTOR",
        "imagem": ""
      },
      {
        "id": 184700,
        "categoria": [
          "Cadeiras Avulsas",
          "Cadeiras"
        ],
        "nomeDoProduto": "CADEIRA VIVACE PLUS - TECIDO CARAMELO",
        "imagem": ""
      },
      {
        "id": 184701,
        "categoria": [
          "Cadeiras Avulsas",
          "Cadeiras"
        ],
        "nomeDoProduto": "CADEIRA TUBOLAR INDIVIDUAL C/4 UNIDADES",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437400680942d8d844c.webp"
      },
      {
        "id": 184702,
        "categoria": [
          "Cadeiras Avulsas",
          "Cadeiras"
        ],
        "nomeDoProduto": "CADEIRA ESTOFADA ALBERTO LINHO 303 - COR 07",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745438150680945c668ea2.webp"
      },
      {
        "id": 184703,
        "categoria": [
          "Cadeiras Avulsas",
          "Cadeiras"
        ],
        "nomeDoProduto": "CADEIRA ESTOFADO ALB- COR 22 CX C/ 2 - CINZA CLARO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454380366809455491c83.webp"
      },
      {
        "id": 184704,
        "categoria": [
          "Cadeiras Avulsas",
          "Cadeiras"
        ],
        "nomeDoProduto": "CADEIRA ESTOFADA ALBERTO - COR 14 CX C/ 2 - MARROM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745438069680945753f8b4.webp"
      },
      {
        "id": 184705,
        "categoria": [
          "Cadeiras Avulsas",
          "Cadeiras"
        ],
        "nomeDoProduto": "CADEIRA ESTOFADA ALB - COR 07 CX C/ 2 - GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745438112680945a052a19.webp"
      },
      {
        "id": 184710,
        "categoria": [
          "Cama",
          "Cabeceira de Cama"
        ],
        "nomeDoProduto": "CABECEIRA BOX 1.40 / 1.60 ZARA CAPITONÊ - PEROLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437666680943e2e1b61.webp"
      },
      {
        "id": 184711,
        "categoria": [
          "Cama",
          "Cabeceira de Cama"
        ],
        "nomeDoProduto": "CABECEIRA BOX 1.40 / 1.60 ZARA CAPITONÊ - JACARANDA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437678680943eee219e.webp"
      },
      {
        "id": 184712,
        "categoria": [
          "Cama",
          "Cabeceira de Cama"
        ],
        "nomeDoProduto": "CABECEIRA BOX 1.40 / 1.60 ZARA CAPITONÊ - CAMARU",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454377606809444028220.webp"
      },
      {
        "id": 184713,
        "categoria": [
          "Cama",
          "Cabeceira de Cama"
        ],
        "nomeDoProduto": "CABECEIRA ANA ESTOFADA 1.40 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543797468094516b4c6b.webp"
      },
      {
        "id": 184715,
        "categoria": [
          "Sala de Estar",
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET MAGNUM 0.90 OFF WHITE/CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543806768094573b2e6f.webp"
      },
      {
        "id": 184716,
        "categoria": [
          "Sala de Estar",
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET MAGNUM 0.90 FENDI/FREIJO NOBRE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454380816809458133532.webp"
      },
      {
        "id": 184723,
        "categoria": [
          "Sala de Estar",
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET AÇORES - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543810368094597e903a.webp"
      },
      {
        "id": 184724,
        "categoria": [
          "Linha Infantil",
          "Kids"
        ],
        "nomeDoProduto": "BERÇO MINI-CAMA ALVIN - NATURE / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438119680945a73dcfe.webp"
      },
      {
        "id": 184725,
        "categoria": [
          "Linha Infantil",
          "Kids"
        ],
        "nomeDoProduto": "BERÇO MINI-CAMA ALVIN - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438134680945b6eb154.webp"
      },
      {
        "id": 184727,
        "categoria": [
          "Cama",
          "Beliche"
        ],
        "nomeDoProduto": "BELICHE PRISMA PLUS BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437601680943a1b07b3.webp"
      },
      {
        "id": 184728,
        "categoria": [
          "Cama",
          "Beliche"
        ],
        "nomeDoProduto": "BELICHE FLORIPA PLUS JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437649680943d16e5c0.webp"
      },
      {
        "id": 184729,
        "categoria": [
          "Cama",
          "Beliche"
        ],
        "nomeDoProduto": "BELICHE ABSOLUT JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437690680943fa726c1.webp"
      },
      {
        "id": 184730,
        "categoria": [
          "Cama",
          "Beliche"
        ],
        "nomeDoProduto": "BELICHE ABSOLUT BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543769968094403c02f9.webp"
      },
      {
        "id": 184731,
        "categoria": [
          "Cama",
          "Bases de Cama"
        ],
        "nomeDoProduto": "BASE QUEEN EM SUEDE - 1,58 X 1,98 M",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-01/1746142202681403fa02f24.webp"
      },
      {
        "id": 184733,
        "categoria": [
          "Cama",
          "Bases de Cama"
        ],
        "nomeDoProduto": "BASE PARA CAMA SUPER QUEEN - 193 X 2.03",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543771268094410f2441.webp"
      },
      {
        "id": 184735,
        "categoria": [
          "Cama",
          "Bases de Cama"
        ],
        "nomeDoProduto": "BASE PARA CAMA SOLTEIRO - 0.88 X 1.88",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454377286809442019e66.webp"
      },
      {
        "id": 184737,
        "categoria": [
          "Cama",
          "Bases de Cama"
        ],
        "nomeDoProduto": "BASE CASAL  EM SUEDE - 1,38 X 1,88 M",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454377566809443c2a981.webp"
      },
      {
        "id": 184738,
        "categoria": [
          "Cama",
          "Bases de Cama"
        ],
        "nomeDoProduto": "BASE BAU SOLTEIRO SUEDE - 0.88 X 1.88",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454377826809445692cdd.webp"
      },
      {
        "id": 184739,
        "categoria": [
          "Cama",
          "Bases de Cama"
        ],
        "nomeDoProduto": "BASE BAU LIGHT SUEDE AMASSADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454378346809448a5076b.webp"
      },
      {
        "id": 184743,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "BASE + COLCHÃO MERCURY SOLTEIRO 0.88 X 1.88 X 0.56",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543824668094626649dc.webp"
      },
      {
        "id": 184744,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "BASE + COLCHÃO MERCURY 1,93 X 1,98 X 0 ,56 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454383006809465c535b4.webp"
      },
      {
        "id": 184745,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "BASE + COLCHÃO MERCURY 1,58 X 1,98 X 0,56 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454383006809465c535b4.webp"
      },
      {
        "id": 184746,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "BASE + COLCHÃO MERCURY 1,38 X 1,88 X 0,56 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454383666809469e035a7.webp"
      },
      {
        "id": 184752,
        "categoria": [
          "Sala",
          "Bar"
        ],
        "nomeDoProduto": "BAR ADEGA BALI - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438397680946bdd815d.webp"
      },
      {
        "id": 184753,
        "categoria": [
          "Sala",
          "Bar"
        ],
        "nomeDoProduto": "BAR ADEGA BALI - OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438408680946c82d6ff.webp"
      },
      {
        "id": 184754,
        "categoria": [
          "Sala",
          "Bar"
        ],
        "nomeDoProduto": "BAR ADEGA BALI - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438418680946d2d7d95.webp"
      },
      {
        "id": 184773,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO MULTIUSO HAVANA NEW - MADEIRADO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454384946809471e6813d.webp"
      },
      {
        "id": 184774,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO MULTIUSO HAVANA NEW - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543832068094670dd35a.webp"
      },
      {
        "id": 184775,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO MULTIUSO HAVANA NEW - ACACIA MADEIRADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543830668094662c495a.webp"
      },
      {
        "id": 184783,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO DUNA 2P 1G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438550680947560db40.webp"
      },
      {
        "id": 184784,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO DENVER 2P - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454385616809476140b17.webp"
      },
      {
        "id": 184785,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP MUNIQUE - OFF WHITE / CANELATO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438580680947749eafd.webp"
      },
      {
        "id": 184786,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP MUNIQUE - MADEIRADO REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745438710680947f6ca838.webp"
      },
      {
        "id": 184787,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP MUNIQUE - MADEIRADO / PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745438596680947845bfcc.webp"
      },
      {
        "id": 184791,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.20 2P 3G TP VAZADO - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438658680947c278afb.webp"
      },
      {
        "id": 184792,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.20 2P 3G TP VAZADO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438704680947f04310d.webp"
      },
      {
        "id": 184793,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.20 2P 3G - PRETO (TP VAZADO)",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438719680947ff4f2e5.webp"
      },
      {
        "id": 184794,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.20 2P 3G - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454387466809481a91e7f.webp"
      },
      {
        "id": 184795,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.20 2P 3G - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543876968094831c8ded.webp"
      },
      {
        "id": 184796,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.20 2P 3G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745439110680949868ef20.webp"
      },
      {
        "id": 184797,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.05 1P 1G - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543882568094869582bd.webp"
      },
      {
        "id": 184798,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.05 1P 1G - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454390346809493a01a03.webp"
      },
      {
        "id": 184799,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.05 1P 1G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-29/174596892168115f198bc4f.webp"
      },
      {
        "id": 184801,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 0.80 2P - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454385546809475ac6d0f.webp"
      },
      {
        "id": 184802,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 0.80 2P - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543856968094769524bb.webp"
      },
      {
        "id": 184803,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO CLARA PLUS 3P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438582680947768131d.webp"
      },
      {
        "id": 184804,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO CLARA PLUS 3P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454385916809477fa2558.webp"
      },
      {
        "id": 184805,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO CLARA PLUS 3P 2G - ATACAMA/BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438636680947ac20d1f.webp"
      },
      {
        "id": 184806,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO 3 PTS 1 GAV. - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543880768094857c49f6.webp"
      },
      {
        "id": 184808,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO 1.40 P/ COOKTOP 5 BOCAS - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745439210680949ea71059.webp"
      },
      {
        "id": 184809,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO 1.40 P/ COOKTOP 5 BOCAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745439030680949366448e.webp"
      },
      {
        "id": 184810,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO 1,20 3 GAVETAS 2 PTS RUSTICO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454387956809484b21c27.webp"
      },
      {
        "id": 184811,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO 1,20 3 GAVETAS 2 PTS CANELATO BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454388606809488cc1d2b.webp"
      },
      {
        "id": 184812,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO 1,20 3 GAVETAS 2 PTS CANELATO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438872680948984e7c7.webp"
      },
      {
        "id": 184815,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "ARM. MULTIUSO 1.83 M - ATACAMA / OFF-WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438897680948b1c1c56.webp"
      },
      {
        "id": 184816,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "ARM. MULTIUSO 1.83 M - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438908680948bcdfa10.webp"
      },
      {
        "id": 184821,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "APARADOR BARI 1.00 MTS - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454197266808fdce6cea9.webp"
      },
      {
        "id": 186831,
        "categoria": [
          "Ventilador",
          "Ventilador"
        ],
        "nomeDoProduto": "VENTILADOR OSC COL TURBO 6P 40CM PR 220V PRE.",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454096406808d668e4374.webp"
      },
      {
        "id": 189510,
        "categoria": [
          "Climatização",
          "Climatizador"
        ],
        "nomeDoProduto": "CLIMATIZADOR 16 LITROS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/17461894646814bc98c8705.webp"
      },
      {
        "id": 189511,
        "categoria": [
          "Climatização",
          "Climatizador"
        ],
        "nomeDoProduto": "CLIMATIZADOR 35 LITROS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/17461894866814bcaed5659.webp"
      },
      {
        "id": 189512,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJUNTO DE MESA VALENÇA C/ JUNCO - 0.75 X 0.75",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/174604176868127ba8451c1.webp"
      },
      {
        "id": 189513,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJUNTO DE MESA VALENÇA C/ JUNCO - 1.40 X 0.75",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/174604154968127acdcfbca.webp"
      },
      {
        "id": 189514,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJUNTO DE MESA VALENÇA C/ JUNCO - 1.20 X 0.75",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/174604176868127ba84d32e.webp"
      },
      {
        "id": 189518,
        "categoria": [
          "Sala",
          "Painés"
        ],
        "nomeDoProduto": "HOME ROYAL - CEDRO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/17461927876814c9935bb53.webp"
      },
      {
        "id": 189519,
        "categoria": [
          "Sala",
          "Paineis"
        ],
        "nomeDoProduto": "HOME ROYAL - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/17461927986814c99e6bbe5.webp"
      },
      {
        "id": 189520,
        "categoria": [
          "Cama",
          "Cabeceira de Cama"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA LUCCA - FENDI / FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/17461938296814cda579a64.webp"
      },
      {
        "id": 189521,
        "categoria": [
          "Cama",
          "Cabeceira de Cama"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA LUCCA - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/17461938006814cd8852c60.webp"
      },
      {
        "id": 189537,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. SÃO PAULO 6 PTS ATUALLE - MAD. / REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-05/17464499726818b634466d5.webp"
      },
      {
        "id": 189577,
        "categoria": [
          "Cozinha",
          "Cooktop"
        ],
        "nomeDoProduto": "COOKTOP GOLD 5 BOCAS AUTOMATICO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-06/1746540182681a16966af3f.webp"
      },
      {
        "id": 189578,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CANADA 6 PORTAS 8 GAV. CIN. / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-06/1746540502681a17d6f2927.webp"
      },
      {
        "id": 189580,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ITA 6 PORTAS - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-06/1746541045681a19f51d06c.webp"
      },
      {
        "id": 189581,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ITA 6 PORTAS - HAVANA RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-06/1746541154681a1a62690f1.webp"
      },
      {
        "id": 189582,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. CAPELLA 4 PTS 3 GAV. - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-06/1746541398681a1b560039a.webp"
      },
      {
        "id": 189592,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.9 MTS C/ PORTA COPO - BEGE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-27/1745779548680e7b5cbae1d.webp"
      },
      {
        "id": 189593,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS C/3 MODULOS 2.9 MTS C/  COPO - AZUL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-07/1746638444681b966c9c6be.webp"
      },
      {
        "id": 189594,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFAD ZEUS C/3 MODULOS 2.9 MTS C/  COPO - MARROM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-07/1746638444681b966caea18.webp"
      },
      {
        "id": 189601,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO MORFEU 2.90 MTS - MARROM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-09/1746811655681e3b07c325d.webp"
      },
      {
        "id": 189602,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO MORF 2.90 MTS - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-09/1746811698681e3b322bfc5.webp"
      },
      {
        "id": 189603,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO MORFEU 2.90 MTS - BEGE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-09/1746811862681e3bd6e2adc.webp"
      },
      {
        "id": 192300,
        "categoria": [
          "Cozinha",
          "Forno Elétrico"
        ],
        "nomeDoProduto": "FORNO ELETRICO BEST 48 LITROS C/ ROTISSEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-11/174701283068214cdeee833.webp"
      },
      {
        "id": 192301,
        "categoria": [
          "Cozinha",
          "Forno Elétrico"
        ],
        "nomeDoProduto": "FORNO ELETRICO BEST 60 LITROS C/ ROTISSEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-11/174701283868214ce6b37e0.webp"
      },
      {
        "id": 192302,
        "categoria": [
          "Cadeiras Avulsas",
          "Cadeiras"
        ],
        "nomeDoProduto": "CADEIRA EAMES - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-11/174701341568214f27e3398.webp"
      },
      {
        "id": 202885,
        "categoria": [
          "Lavadoras",
          "Tanquinho"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 10 KG - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745495784680a26e8001bb.webp"
      },
      {
        "id": 202886,
        "categoria": [
          "Lavadoras",
          "Tanquinho"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 10 KG - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745495768680a26d84c011.webp"
      },
      {
        "id": 202887,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 6 PORTAS - 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-13/17471697666823b1e60f772.webp"
      },
      {
        "id": 202888,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 4 PORTAS - 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-13/17471700236823b2e79fa41.webp"
      },
      {
        "id": 202889,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 4 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-13/17471700736823b319ce6a3.webp"
      },
      {
        "id": 202890,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 4 PTS - ACACIA REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-13/17471702596823b3d3b92a4.webp"
      },
      {
        "id": 202891,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ATHENAS ATUALLE - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/174722537568248b1f0465f.webp"
      },
      {
        "id": 202892,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ATHENAS ATUALLE - CANELATO \\ OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/174722538168248b25bd78d.webp"
      },
      {
        "id": 202894,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO RECIFE CINAMOMO \\ BRANCO",
        "imagem": ""
      },
      {
        "id": 202895,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO REIS 6 PORTAS - CINAMOMO \\ BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/17472332406824a9d8c4c27.webp"
      },
      {
        "id": 202896,
        "categoria": [
          "Cama",
          "Cabeceira de Cama"
        ],
        "nomeDoProduto": "CABECEIRA ANA 1.60 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/17472424666824cde26ca3d.webp"
      },
      {
        "id": 202897,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL CRISTAL CHUMBO SAVANA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/17472427166824cedc8d6ea.webp"
      },
      {
        "id": 203000,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ARIES 6 PORTAS - CINAMOMO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-19/1747690439682ba3c726aad.webp"
      },
      {
        "id": 203001,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ANJOS C/ 9 GAVETAS E ESPELHO - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-19/1747690560682ba44029e19.webp"
      },
      {
        "id": 203002,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GALAXY 3 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-19/1747690906682ba59a60754.webp"
      },
      {
        "id": 203004,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO PELMEX MAX SPORT 1.38 X 1.88 X 0.22",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-19/1747696230682bba661e54a.webp"
      },
      {
        "id": 204439,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "BASE + COLCHÃO MERCURIO SOLTEIRAO 1.08 X1.88 X0.56",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-26/17482923846834d3209610b.webp"
      },
      {
        "id": 204440,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO MERCURIO SOLTEIRAO 1.08 X1.88 X 0.56",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-26/17482924456834d35d981d6.webp"
      },
      {
        "id": 204457,
        "categoria": [
          "Cozinha",
          "Paneleiro"
        ],
        "nomeDoProduto": "PANELEIRO CLARA PLUS - ATACAMA / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-27/17483701886836030c91362.webp"
      },
      {
        "id": 204458,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT 910 C/ PORTA DE CORRER - ATACAMA / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-27/1748370401683603e1e46cc.webp"
      },
      {
        "id": 204459,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT 910 C/ PORTA DE CORRER - ATACAMA / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-27/1748370457683604194fcc0.webp"
      },
      {
        "id": 204500,
        "categoria": [
          "Cama",
          "Cabeceira de Cama"
        ],
        "nomeDoProduto": "CABECEIRA ANA SOLTEIRO 0.88 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-29/17485451376838ae7162a67.webp"
      },
      {
        "id": 205019,
        "categoria": [
          "Cozinha",
          "Tampo"
        ],
        "nomeDoProduto": "TAMPO EM GRANITO - 0.75 X 0.75 M",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-30/1746040786681277d25df53.webp"
      },
      {
        "id": 205020,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TRIPLEX GOLD - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855847680fa5677577e.webp"
      },
      {
        "id": 205021,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TRIPLEX GOLD - FREIJÓ",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855848680fa568d8064.webp"
      },
      {
        "id": 205022,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GLIESE 6 PORTAS - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855919680fa5afe96ae.webp"
      },
      {
        "id": 205023,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CANCUN 7P 2G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-02/1748893182683dfdfe96c52.webp"
      },
      {
        "id": 205024,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CANCUN 7P 2G - AREIA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855946680fa5ca1dcf8.webp"
      },
      {
        "id": 205025,
        "categoria": [
          "Lavadoras",
          "Tanquinho"
        ],
        "nomeDoProduto": "Lavadora Libell 10 kg - Branco",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855773680fa51d156d3.webp"
      },
      {
        "id": 205026,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA MADRI C/ ARDOSIA - CRAQUEADO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855684680fa4c452f84.webp"
      },
      {
        "id": 205027,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA MADRI C/ ARDOSIA - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855685680fa4c55a967.webp"
      },
      {
        "id": 205028,
        "categoria": [
          "Escritório",
          "Estantes"
        ],
        "nomeDoProduto": "ESTANTE ALTA AÇO 5 PRATELEIRAS - FREIJO / PRETO FOSCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855748680fa504b3985.webp"
      },
      {
        "id": 205029,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "CONJUNTO MESA ATALANTA - OFF",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855705680fa4d9563f8.webp"
      },
      {
        "id": 205030,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "CONJUNTO MESA ATALANTA - NATURE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855706680fa4da9f8ec.webp"
      },
      {
        "id": 205031,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "CONJUNTO MESA ATALANTA - CINZA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855707680fa4dbcbe03.webp"
      },
      {
        "id": 205032,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA / ROUPEIRO MEGA 2 PTS - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855835680fa55b4cdee.webp"
      },
      {
        "id": 205033,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA / ROUPEIRO MEGA 2 PTS - JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855836680fa55cb8832.webp"
      },
      {
        "id": 205034,
        "categoria": [
          "Cama",
          "Beliche"
        ],
        "nomeDoProduto": "BELICHE TORNEADA PALMO 80 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843885680f76ad892d0.webp"
      },
      {
        "id": 205035,
        "categoria": [
          "Cama",
          "Beliche"
        ],
        "nomeDoProduto": "BELICHE GOLD & SILVER",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843887680f76af7a009.webp"
      },
      {
        "id": 205036,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO 1.40 P/ COOKTOP 5 BOCAS - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855626680fa48a03383.webp"
      },
      {
        "id": 205037,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GLIESE 6 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855970680fa5e24d344.webp"
      },
      {
        "id": 205038,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT GOLDEN 6 PORTAS - FREIJO / SOFT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748642447683a2a8f3d88f.webp"
      },
      {
        "id": 205039,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT GOLDEN 6 PORTAS - FREIJO / GRIS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748642454683a2a9643776.webp"
      },
      {
        "id": 205040,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT GENOVA KIT´S PARANA 6 PORTAS - NOGUEIRA / OFF RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748642607683a2b2f03593.webp"
      },
      {
        "id": 205041,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT CORE 8 PORTAS - FREIJO / NERO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748642748683a2bbc011da.webp"
      },
      {
        "id": 205042,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT CORE 8 PORTAS - FREIJO / VANILLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748642753683a2bc1c51f7.webp"
      },
      {
        "id": 205043,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT APOLO 6 PORTAS - FREIJO / SOFT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748643014683a2cc60f517.webp"
      },
      {
        "id": 205044,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT APOLO 6 PORTAS - FREIJO / GRIS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748643020683a2ccccbc10.webp"
      },
      {
        "id": 205045,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA FERRARA PLUS - FREIJO / SUPREMO RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748643183683a2d6f6d29f.webp"
      },
      {
        "id": 205046,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA FERRARA PLUS - FREIJO / SOFT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748643193683a2d7905889.webp"
      },
      {
        "id": 205109,
        "categoria": [
          "Sala",
          "Rack com Painel"
        ],
        "nomeDoProduto": "RACK C/ PAINEL LEGACY - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-04/17490732616840bd6d619ab.webp"
      },
      {
        "id": 205311,
        "categoria": [
          "Cozinha",
          "Fritadeiras"
        ],
        "nomeDoProduto": "SKD AIR FRYER AMVOX ARF 1222 OVEN 12L",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-11/174965054168498c6dcb4b9.webp"
      },
      {
        "id": 205312,
        "categoria": [
          "Cozinha",
          "Fritadeiras"
        ],
        "nomeDoProduto": "AIR FRYER AMVOX ARF 1245 OVEN 4.5L",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-11/174965064068498cd07e7db.webp"
      },
      {
        "id": 205390,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO RETRATIL ROMEU SOLAR LUXO 2.30 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-13/1749818078684c1adec32e8.webp"
      },
      {
        "id": 205404,
        "categoria": [
          "Acessórios",
          "Kits"
        ],
        "nomeDoProduto": "KIT DE PÉS ALTO - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461336046813e2644249f.webp"
      },
      {
        "id": 205405,
        "categoria": [
          "Acessórios",
          "Kits"
        ],
        "nomeDoProduto": "KIT DE PÉS ALTO - PRATA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461337886813e31c29e11.webp"
      },
      {
        "id": 205406,
        "categoria": [
          "Acessórios",
          "Kits"
        ],
        "nomeDoProduto": "KIT DE PÉS ALTO - MARROM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461343616813e55966911.webp"
      },
      {
        "id": 205407,
        "categoria": [
          "Acessórios",
          "Kits"
        ],
        "nomeDoProduto": "KIT DE PÉS ALTO - IMBUIA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461344236813e5970fcad.webp"
      },
      {
        "id": 205408,
        "categoria": [
          "Acessórios",
          "Kits"
        ],
        "nomeDoProduto": "KIT DE PÉS ALTO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461340666813e43211783.webp"
      },
      {
        "id": 205409,
        "categoria": [
          "Banheiro",
          "Espelho"
        ],
        "nomeDoProduto": "CAIXA C/ 2 ESPELHOS 0.60 x 0.20",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-01/17461321906813dcde283ad.webp"
      },
      {
        "id": 205544,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA ALEXIA PRIME - CINAMOMO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-17/17501943786851d8caa22ba.webp"
      },
      {
        "id": 205545,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA ALEXIA PRIME - CINAMOMO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-17/17501944056851d8e50b5fc.webp"
      },
      {
        "id": 205616,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT GOLDEN 6 PORTAS - NOGUEIRA / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-23/1750685110685955b644993.webp"
      },
      {
        "id": 205617,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT GENOVA KIT´S PARANA 6 PORTAS - FREIJO / SUPREMO RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-23/175068558868595794bfb29.webp"
      },
      {
        "id": 205618,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA FERRARA PLUS - FREIJO / SOFT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-23/175068576368595843d1437.webp"
      },
      {
        "id": 205619,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT STYLE - FREIJO / VANILLA RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-23/17506860866859598689c49.webp"
      },
      {
        "id": 205620,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT STYLE - FREIJO / SUPREMO RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-23/17506860436859595bd17bf.webp"
      },
      {
        "id": 205744,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO MORF. 2.00 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-25/1750859125685bfd7560a64.webp"
      },
      {
        "id": 205745,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO QUARTZO 2.50 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-25/1750859572685bff346dde4.webp"
      },
      {
        "id": 206019,
        "categoria": [
          "Sala",
          "Bar"
        ],
        "nomeDoProduto": "CANTINHO DO CAFÉ FLOW - OFF / FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111152685fd5f058b44.webp"
      },
      {
        "id": 206020,
        "categoria": [
          "Sala",
          "Bar"
        ],
        "nomeDoProduto": "CANTINHO DO CAFÉ FLOW - PRETO / FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111164685fd5fc77e0a.webp"
      },
      {
        "id": 206021,
        "categoria": [
          "Sala de Estar",
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET 4 PORTAS FLOW - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111392685fd6e0b2b22.webp"
      },
      {
        "id": 206022,
        "categoria": [
          "Sala de Estar",
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET 4 PORTAS FLOW - OFF WWHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111407685fd6ef313a1.webp"
      },
      {
        "id": 206023,
        "categoria": [
          "Sala de Estar",
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET 4 PORTAS FLOW - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111424685fd700bf163.webp"
      },
      {
        "id": 206024,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "APARADOR ADEGA NEW ODIN - OFF WHITE / FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111688685fd8089afb9.webp"
      },
      {
        "id": 206025,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "APARADOR ZEUS - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111873685fd8c1775ae.webp"
      },
      {
        "id": 206026,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "APARADOR ZEUS - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111886685fd8ce50bef.webp"
      },
      {
        "id": 206027,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "JOGO DE MESA LIZ - FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751112291685fda63235f7.webp"
      },
      {
        "id": 206028,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "JOGO DE MESA LIZ - OFF/ FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751112303685fda6f308ec.webp"
      },
      {
        "id": 206029,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "JOGO DE MESA LIZ - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751112313685fda79bd724.webp"
      },
      {
        "id": 206030,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "JOGO DE MESA LIZ - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751112321685fda81d3a10.webp"
      },
      {
        "id": 206031,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "TOUCADOR ORGANIC - FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114471685fe2e72c25d.webp"
      },
      {
        "id": 206032,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "TOUCADOR ORGANIC - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114479685fe2ef9c5e0.webp"
      },
      {
        "id": 206033,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA LUXO NEW - FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114527685fe31f56439.webp"
      },
      {
        "id": 206034,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA LUXO NEW - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114537685fe32978852.webp"
      },
      {
        "id": 206035,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA LUXO NEW - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114546685fe3324177e.webp"
      },
      {
        "id": 206036,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA RETRO ROMA - FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114589685fe35d04366.webp"
      },
      {
        "id": 206037,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA RETRO ROMA - FREIJÓ / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114597685fe3650102d.webp"
      },
      {
        "id": 206038,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA RETRO ROMA - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114608685fe370e5b58.webp"
      },
      {
        "id": 206039,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA RETRO ROMA - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114618685fe37a7c8a6.webp"
      },
      {
        "id": 206040,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA 2 GAVETAS - FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114650685fe39acb83e.webp"
      },
      {
        "id": 206041,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA 2 GAVETAS - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114658685fe3a228308.webp"
      },
      {
        "id": 206042,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA 2 GAVETAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114669685fe3addedfe.webp"
      },
      {
        "id": 206043,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "MESA DE COMPUTADOR PRATICA - FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114690685fe3c20a492.webp"
      },
      {
        "id": 206044,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "MESA DE COMPUTADOR PRATICA - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114696685fe3c83feb0.webp"
      },
      {
        "id": 206045,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "MESA DE COMPUTADOR PRATICA - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114704685fe3d0102e9.webp"
      },
      {
        "id": 206046,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "TOUCADOR ORGANIC - OFF WHITE / FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114502685fe306dc92d.webp"
      },
      {
        "id": 206050,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "APARADOR ADEGA NEW ODIN - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-03/17515702046866d71c1c5a4.webp"
      },
      {
        "id": 206074,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TOLEDO 6 PORTAS - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855850680fa56a3abf8.webp"
      },
      {
        "id": 206075,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ANTARES 6 PORTAS PRIME - CINAMOMO / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855955680fa5d3e6b29.webp"
      },
      {
        "id": 206076,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-02/175145960168652711cc7ef.webp"
      },
      {
        "id": 206077,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855725680fa4ed510f0.webp"
      },
      {
        "id": 206078,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - ACACIA / REFLECTA BRILHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-02/17514596206865272416541.webp"
      },
      {
        "id": 206079,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT COZINHA GENOVA MADINE - RIPADO / ARENAS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855700680fa4d4814e4.webp"
      },
      {
        "id": 206080,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT COZINHA GENOVA MADINE - GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855701680fa4d5d9dd8.webp"
      },
      {
        "id": 206081,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "Colchão Supreme D-20 C/ 12 cm 0.88 x 1.88",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855566680fa44eb550a.webp"
      },
      {
        "id": 206082,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.20 GOLD 2P 3G TAMPO VAZADO - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855613680fa47d607f8.webp"
      },
      {
        "id": 206083,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.20 GOLD 2P 3G TAMPO VAZADO - JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855614680fa47e39dd1.webp"
      },
      {
        "id": 206084,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.20 GOLD 2P 3G TAMPO VAZADO - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855615680fa47f0352a.webp"
      },
      {
        "id": 206085,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.05 GOLD 1P 1G - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855618680fa482de02c.webp"
      },
      {
        "id": 206086,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.05 GOLD 1P 1G - JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855619680fa483bf0a0.webp"
      },
      {
        "id": 206087,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.05 GOLD 1P 1G - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855620680fa48497792.webp"
      },
      {
        "id": 206088,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 0.80 GOLD 2P - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855621680fa48561dd3.webp"
      },
      {
        "id": 206089,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO 1.40 P/ COOKTOP 5 BOCAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855626680fa48ab4731.webp"
      },
      {
        "id": 206090,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO 1.40 P/ COOKTOP 5 BOCAS - JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855627680fa48b78e66.webp"
      },
      {
        "id": 206091,
        "categoria": [
          "Cozinha",
          "Cooktop"
        ],
        "nomeDoProduto": "FOGÃO COOKTOP GOLD 5 BOCAS - SIMPLES",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855635680fa493c48d0.webp"
      },
      {
        "id": 206092,
        "categoria": [
          "Quarto",
          "Penteadeira"
        ],
        "nomeDoProduto": "PENTEADEIRA GOLD C/ LED - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855844680fa564caa0c.webp"
      },
      {
        "id": 206093,
        "categoria": [
          "Quarto",
          "Penteadeira"
        ],
        "nomeDoProduto": "PENTEADEIRA GOLD C/ LED - ROSE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855846680fa566174e8.webp"
      },
      {
        "id": 206094,
        "categoria": [
          "Cozinha",
          "Cozinhas"
        ],
        "nomeDoProduto": "COZINHA RAVENA PLUS C/ CRISTALEIRA - FREIJO / OFF ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749733661684ad11d9c356.webp"
      },
      {
        "id": 206095,
        "categoria": [
          "Cozinha",
          "Cozinhas"
        ],
        "nomeDoProduto": "COZINHA COMPACTA OLINDA  + BLC FREIJO / RIPADO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749734179684ad323e1aca.webp"
      },
      {
        "id": 206096,
        "categoria": [
          "Cozinha",
          "Cozinhas"
        ],
        "nomeDoProduto": "COZINHA COMPACTA OLINDA  + BLC FREIJO / RIPADO / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749734258684ad3722d1ae.webp"
      },
      {
        "id": 206097,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO OLINDA FREIJO / RIPADO / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749734450684ad43257f5a.webp"
      },
      {
        "id": 206098,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO OLINDA FREIJO / RIPADO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749734461684ad43d5684b.webp"
      },
      {
        "id": 206099,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT NURIA FREIJÓ / RIPADO / OFF ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749739294684ae71e04910.webp"
      },
      {
        "id": 206100,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT NURIA FREIJÓ / RIPADO / GRAFITE ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749739302684ae726cf3ce.webp"
      },
      {
        "id": 206101,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT PILAR 11 PTS - FREIJO / OFF ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749739673684ae89923584.webp"
      },
      {
        "id": 206102,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT PILAR 11 PTS - FREIJO / RIPADO / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749739680684ae8a0e0096.webp"
      },
      {
        "id": 206103,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT NEW LIVIA - FREIJO / RIPADO / OFF ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749740057684aea196d01b.webp"
      },
      {
        "id": 206104,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT NEW LIVIA - FREIJO / OFF ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749740067684aea236453e.webp"
      },
      {
        "id": 206105,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA MALIBU NEW - NATURE 3D",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751118610685ff312ee34c.webp"
      },
      {
        "id": 206106,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA MALIBU NEW - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751118679685ff357de095.webp"
      },
      {
        "id": 206107,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA MALIBU NEW - BCO / LILAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751118759685ff3a74eef6.webp"
      },
      {
        "id": 206280,
        "categoria": [
          "Acessórios",
          "Kits"
        ],
        "nomeDoProduto": "PES PLASTICOS PARA ROUPEIRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843868680f769c8dada.webp"
      },
      {
        "id": 206281,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA VICENZA - ACACIA / REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516382716867e0ff88381.webp"
      },
      {
        "id": 206282,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA VICENZA - CANELATO / NATURA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516382556867e0efbc57a.webp"
      },
      {
        "id": 206283,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "MESA DE ESCRITÓRIO 3 GAVETAS - ACACIA / REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516391636867e47b93c53.webp"
      },
      {
        "id": 206284,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "MESA DE ESCRITÓRIO 3 GAVETAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516391746867e4860538b.webp"
      },
      {
        "id": 206285,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT CEARA 4 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-08/1751983140686d242423868.webp"
      },
      {
        "id": 206286,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA SALINAS TOP - CANELATO / PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-09/1752090922686ec92ad092d.webp"
      },
      {
        "id": 206287,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA SALINAS TOP - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-09/1752090931686ec9330602b.webp"
      },
      {
        "id": 206288,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA SALINAS TOP - CANELATO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-09/1752090940686ec93cb5d6f.webp"
      },
      {
        "id": 184021,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO TURIM C/ 2 PORTAS DE CORRER - CANELATO 3D",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453318416807a681955bf.webp"
      },
      {
        "id": 184022,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO TURIM C/ 2 PORTAS DE CORRER - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-27/1745783492680e8ac46e174.webp"
      },
      {
        "id": 184029,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TOLEDO 6 PORTAS - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453349286807b290aba07.webp"
      },
      {
        "id": 184031,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TOKIO 6 PTS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454250036809126b9e997.webp"
      },
      {
        "id": 184034,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA CINAMOMO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855862680fa57678a57.webp"
      },
      {
        "id": 184035,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855760680fa5105bc0d.webp"
      },
      {
        "id": 184036,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA 3 PTS PLUS - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745507529680a54c9e10af.webp"
      },
      {
        "id": 184037,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA 3 PTS PLUS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453350226807b2eebbb0b.webp"
      },
      {
        "id": 184038,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA 3 PORTAS PREMIUM - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453350416807b3017fa65.webp"
      },
      {
        "id": 184039,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA 3 PORTAS PREMIUM - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453350846807b32c62981.webp"
      },
      {
        "id": 184041,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO PAULO 6 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855865680fa5792ac27.webp"
      },
      {
        "id": 184042,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 6 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453496576807ec19df6d7.webp"
      },
      {
        "id": 184043,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 6 PORTAS - ACACIA / REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453500976807edd1782b3.webp"
      },
      {
        "id": 184046,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO SANTIAGO 2 PORTAS PLUS - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454252776809137d79421.webp"
      },
      {
        "id": 184047,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO SANTIAGO 2 PORTAS PLUS - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453351406807b364b77a1.webp"
      },
      {
        "id": 184048,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO SANTIAGO 2 PORTAS PLUS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453351556807b37381749.webp"
      },
      {
        "id": 184055,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. RUBI 8 P. 4 GAV. C/ ESP. - CINAMOMO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453353836807b457c7f2c.webp"
      },
      {
        "id": 184056,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO RUBI 8 P. 4 GAV. C/ ESPELHO - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453353996807b46735e25.webp"
      },
      {
        "id": 184057,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO RUBI 8 PORTAS 4 GAV. C/ ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453354176807b479ae851.webp"
      },
      {
        "id": 184058,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO REIS 6 PTS FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453355206807b4e0532c4.webp"
      },
      {
        "id": 184059,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO REIS 6 PTS BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453355676807b50f8b38d.webp"
      },
      {
        "id": 184064,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. PORTUGAL 6 PTS PRIME - CINAMOMO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454290676809224b0ada3.webp"
      },
      {
        "id": 184065,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. PORTUGAL 6 PTS PRIME - CINAM. / OFF / CINAM.",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453356876807b5878c663.webp"
      },
      {
        "id": 184066,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO PORTUGAL 6 PTS PRIME - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453364806807b8a010a48.webp"
      },
      {
        "id": 184067,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO PORTUGAL 6 PTS PRIME - CACAU",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453364806807b8a010a48.webp"
      },
      {
        "id": 184075,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO NEW VERONA 6 PORTAS - CINAMOMO / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745509250680a5b82083c9.webp"
      },
      {
        "id": 184076,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO NEW VERONA 6 PORTAS - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745509264680a5b908c6de.webp"
      },
      {
        "id": 184078,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO NEW PARMA - IPE DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745509310680a5bbe2acf1.webp"
      },
      {
        "id": 184079,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO NEW PARMA - CINAMOMO / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745509331680a5bd30d6a0.webp"
      },
      {
        "id": 184083,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO MONTANA C\\ 2 PORTAS DE CORRER - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453368106807b9ead6f36.webp"
      },
      {
        "id": 184084,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MONACO 10 PORTAS - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453368836807ba33870a0.webp"
      },
      {
        "id": 184085,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MONACO 10 PORTAS - AREIA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453368996807ba430cf71.webp"
      },
      {
        "id": 184086,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MALIBU NEW 6 PTS - JEQUITIBA / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453369456807ba7125b65.webp"
      },
      {
        "id": 184087,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MALIBU NEW 6 PTS - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453369756807ba8f1605e.webp"
      },
      {
        "id": 184088,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MALIBU NEW 6 PTS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453369976807baa598177.webp"
      },
      {
        "id": 184091,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO LOTSE - DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453370766807baf4d9abc.webp"
      },
      {
        "id": 184092,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO LOTSE - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453371736807bb55eb295.webp"
      },
      {
        "id": 184104,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO HERCULES 6PTS C/ESP.  BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-25/1745609270680be236a9799.webp"
      },
      {
        "id": 184105,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO HERCULES 6PTS C/ ESP. FREIJO-OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453373926807bc307b9d8.webp"
      },
      {
        "id": 184106,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO HERCULES 6PTS C/ ESP.  DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453374046807bc3c71c9d.webp"
      },
      {
        "id": 184107,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO HERCULES 6PTS C/ ESP.  CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453374706807bc7e7b4dd.webp"
      },
      {
        "id": 184116,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GOLD 3 PORTAS - ATACAMA / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453381236807bf0bcc07a.webp"
      },
      {
        "id": 184117,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GOIANIA 6 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453382736807bfa1dcb85.webp"
      },
      {
        "id": 184118,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GOIANIA 6 PORTAS - CANELATO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453382856807bfad9bf7b.webp"
      },
      {
        "id": 184119,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO GENESIS PRETO C/ ESPELHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453383506807bfee56f24.webp"
      },
      {
        "id": 184120,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO GENESIS CINAMOMO - OFF WHITE C/ ESPELHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453480686807e5e4d250b.webp"
      },
      {
        "id": 184121,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO GENESIS BRANCO C/ ESPELHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453480686807e5e4d250b.webp"
      },
      {
        "id": 184122,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO GENESIS  CINAMOMO C/ ESPELHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453480686807e5e4d250b.webp"
      },
      {
        "id": 184123,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 6 PTS - CANELATO 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453482216807e67d1d420.webp"
      },
      {
        "id": 184124,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 6 PTS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453482386807e68e72334.webp"
      },
      {
        "id": 184125,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 6 PTS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453482556807e69f74ea8.webp"
      },
      {
        "id": 184126,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 6 PTS - ACACIA / REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453482826807e6ba69add.webp"
      },
      {
        "id": 184127,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 4 PTS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453483136807e6d911a30.webp"
      },
      {
        "id": 184128,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 4 PTS - CANELATO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453483386807e6f215617.webp"
      },
      {
        "id": 184129,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 4 PTS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453483786807e71ada01d.webp"
      },
      {
        "id": 184130,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 4 PTS - ACACIA REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453484086807e738202e6.webp"
      },
      {
        "id": 184131,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 4 PTS - 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453484206807e744363c9.webp"
      },
      {
        "id": 184132,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 3 PTS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453484536807e7653e282.webp"
      },
      {
        "id": 184133,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 3 PTS - ACACIA MAD./ REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-09/1752088207686ebe8f2faa7.webp"
      },
      {
        "id": 184134,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 3 PTS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453484826807e7822fb81.webp"
      },
      {
        "id": 184135,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 3 PTS - 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453484986807e79242d75.webp"
      },
      {
        "id": 184136,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FIORELA 100% MDF- JACARANDÁ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453485216807e7a94db09.webp"
      },
      {
        "id": 184141,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO ESPANHA PREMIUM -BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-25/1745612007680bece75b254.webp"
      },
      {
        "id": 184142,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO ESPANHA PREMIUM - DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453486366807e81cab1db.webp"
      },
      {
        "id": 184143,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUP. ESPANHA PLUS C/ ESP. - DEMOLIÇÃO / DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453486926807e854c3f47.webp"
      },
      {
        "id": 184144,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO ESPANHA  C/ ESPELHO - DEMOLIÇÃO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453490366807e9ac234a5.webp"
      },
      {
        "id": 184145,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUP. ESPANHA PLUS C/ ESPELHO - CINAMOMO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453492446807ea7cd47a7.webp"
      },
      {
        "id": 184146,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO ESPANHA PLUS C/ ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453492706807ea96d833c.webp"
      },
      {
        "id": 184153,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO DALLAS 6 P. C/ 6 GAV. - CINAMOMO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453493676807eaf790dba.webp"
      },
      {
        "id": 184154,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO DALLAS 6 PORTAS C/ 6 GAV. - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429180680922bc00a0c.webp"
      },
      {
        "id": 184155,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO DALLAS 6 PORTAS C/ 6 GAV. - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453493816807eb05cd93a.webp"
      },
      {
        "id": 184161,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CATATAU NEW 3 PTS - BCO/RS/NAT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429209680922d9efc44.webp"
      },
      {
        "id": 184162,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CAPELINHA - CANELATO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429255680923074b614.webp"
      },
      {
        "id": 184166,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CANCUN 6 PORTAS - AMARULA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453495646807ebbc5a1b2.webp"
      },
      {
        "id": 184177,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO BARCELONA/CLARICE PLUS C/ ESPELHO - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453338586807ae62ef87c.webp"
      },
      {
        "id": 184178,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO BARCELONA/CLARICE PLUS C/ ESP - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453338716807ae6f53c26.webp"
      },
      {
        "id": 184179,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUP. BARCELONA/CLARICE PLUS C/ ESP. - FREIJO / BR",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453498696807eced54dd6.webp"
      },
      {
        "id": 184180,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO BARCELONA/CLARICE PLUS C/ ESP. - FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453338886807ae80b3787.webp"
      },
      {
        "id": 184181,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUP. BARCELONA/CLARICE PLUS C/ ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453500446807ed9cba9e4.webp"
      },
      {
        "id": 184182,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO BAHIA 3 PTS PLUS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453500846807edc49ff82.webp"
      },
      {
        "id": 184187,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO ARIZONA 3 PORTAS DE CORRER - IPE VANILLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453502176807ee49c1584.webp"
      },
      {
        "id": 184188,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ARIES C/ ESPELHO E PÉS - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453503406807eec422653.webp"
      },
      {
        "id": 184189,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ARIES C/ ESPELHO E PÉS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453504416807ef29f35bb.webp"
      },
      {
        "id": 184190,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ARAMOVEIS 7 PTS GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453504716807ef47166eb.webp"
      },
      {
        "id": 184192,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ANTARES 6 PORT PRIME - CINAM / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453511746807f20682d9e.webp"
      },
      {
        "id": 184193,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ANTARES 6 PORTAS PRIME - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453511746807f20682d9e.webp"
      },
      {
        "id": 184194,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUP. ANJOS C/ 9 GAV. E ESP. - DEMOLIÇÃO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453513256807f29dbb674.webp"
      },
      {
        "id": 184195,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO ANJOS C/ 9 GAVETAS E ESPELHO - DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453513856807f2d9f2df6.webp"
      },
      {
        "id": 184196,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUP. ANJOS C/ 9 GAV. E ESP. - CINAMOMO/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453514256807f301eac1d.webp"
      },
      {
        "id": 184197,
        "categoria": [
          "Roupeiros",
          "Porta de Correr"
        ],
        "nomeDoProduto": "ROUPEIRO ANJOS C/ 9 GAVETAS E ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453514616807f3258611e.webp"
      },
      {
        "id": 184201,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5142 GOLD 4P 2G - EBANO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429439680923bf13d33.webp"
      },
      {
        "id": 184202,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5142 GOLD 4P 2G - ATACAMA/OFF  WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453516896807f40915839.webp"
      },
      {
        "id": 184203,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5142 GOLD 4P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453517026807f416d0290.webp"
      },
      {
        "id": 184204,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5142 GOLD 4P 2G - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453517456807f441255ce.webp"
      },
      {
        "id": 184205,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5138 GOLD 6P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453517626807f452292c5.webp"
      },
      {
        "id": 184206,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5138 GOLD 6P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453517876807f46b47306.webp"
      },
      {
        "id": 184207,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5138 GOLD 6P 2G - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453518306807f496952dc.webp"
      },
      {
        "id": 184208,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5132 GOLD 3P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453518706807f4bedc405.webp"
      },
      {
        "id": 184209,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5132 GOLD 3P 2G - ATACAMA/ OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453518936807f4d5f1d66.webp"
      },
      {
        "id": 184210,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5132 GOLD 3P 2G - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453519626807f51aa65f4.webp"
      },
      {
        "id": 184211,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPE 0240 ALTO 4P 2G INTERNAS - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453519816807f52d82071.webp"
      },
      {
        "id": 184212,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 0240 ALTO 4P 2G INTERNAS - ATACAMA/AREIA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453519946807f53a99bde.webp"
      },
      {
        "id": 184213,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 6020 6P 2G INTERNAS - EBANO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429486680923ee032aa.webp"
      },
      {
        "id": 184214,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 0230 6P 2G INTERNAS - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453521356807f5c7ac50a.webp"
      },
      {
        "id": 184215,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 0230 6P 2G INTERNAS - ATACAMA/AREIA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453521516807f5d7cdeb3.webp"
      },
      {
        "id": 184216,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 0230 6P 2G INTERNAS - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453521806807f5f480dac.webp"
      },
      {
        "id": 184219,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK VINCI - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453522266807f62258413.webp"
      },
      {
        "id": 184220,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK VINCI - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453522516807f63b12303.webp"
      },
      {
        "id": 184221,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK VINCI - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453522646807f64814bf1.webp"
      },
      {
        "id": 184222,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK TITAN - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453523736807f6b5a6f06.webp"
      },
      {
        "id": 184223,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK TITAN - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453523966807f6cc311fe.webp"
      },
      {
        "id": 184224,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK TITAN - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453524146807f6de0ba30.webp"
      },
      {
        "id": 184225,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK STAR PRETO/CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453524526807f70456527.webp"
      },
      {
        "id": 184226,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK STAR OFF WHITE/CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453524706807f7168da00.webp"
      },
      {
        "id": 184227,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK LIVERPOOL - OFF WHITE",
        "imagem": ""
      },
      {
        "id": 184228,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK LEGACY 2.0 MTS - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453525126807f74080024.webp"
      },
      {
        "id": 184229,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK LEGACY 2.0 MTS - CEDRO / PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453525406807f75c91cf2.webp"
      },
      {
        "id": 184230,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK KING - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453526396807f7bf5c6a7.webp"
      },
      {
        "id": 184231,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK KING - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453526546807f7ceb2c1b.webp"
      },
      {
        "id": 184234,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK DARIN - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453527196807f80fea5eb.webp"
      },
      {
        "id": 184235,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK DARIN - FENDI",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453527486807f82c7998c.webp"
      },
      {
        "id": 184236,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK DARIN - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453527726807f8440eaba.webp"
      },
      {
        "id": 184237,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK CAYMAN - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453527896807f855c064f.webp"
      },
      {
        "id": 184238,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK CAYMAN - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453528076807f8677fa3f.webp"
      },
      {
        "id": 184239,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK C/ PAINEL LEGACY - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453528356807f88395e31.webp"
      },
      {
        "id": 184242,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK ARUBA - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453529316807f8e3489bb.webp"
      },
      {
        "id": 184243,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK ARUBA - NOGUEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453529926807f920a1859.webp"
      },
      {
        "id": 184244,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK ARUBA - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453532386807fa1636700.webp"
      },
      {
        "id": 184245,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK ANDROS - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453532746807fa3a3a36d.webp"
      },
      {
        "id": 184246,
        "categoria": [
          "Sala",
          "Racks"
        ],
        "nomeDoProduto": "RACK ANDROS - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453532856807fa45516d6.webp"
      },
      {
        "id": 184248,
        "categoria": [
          "Acessórios",
          "Kits"
        ],
        "nomeDoProduto": "PORTA COPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453533376807fa7909e45.webp"
      },
      {
        "id": 184249,
        "categoria": [
          "Sala",
          "Poltronas"
        ],
        "nomeDoProduto": "POLTRONA VINTAGE C/ TECIDO EM LINHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453534136807fac5d9a2c.webp"
      },
      {
        "id": 184250,
        "categoria": [
          "Sala",
          "Poltronas"
        ],
        "nomeDoProduto": "POLTRONA SAMOA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453534416807fae13a890.webp"
      },
      {
        "id": 184251,
        "categoria": [
          "Sala",
          "Poltronas"
        ],
        "nomeDoProduto": "POLTRONA OPALA C/ PÉS RETRÔ - CORES VARIADAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453534986807fb1a89142.webp"
      },
      {
        "id": 184252,
        "categoria": [
          "Sala",
          "Poltronas"
        ],
        "nomeDoProduto": "POLTRONA ADULTA C/ PÉS RETRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453535366807fb40b3d55.webp"
      },
      {
        "id": 184264,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL MASTER 1.80 RIPADO - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453538956807fca7ca9bd.webp"
      },
      {
        "id": 184265,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL MASTER 1.8 / - FENDI",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/1747224028682485dcf056a.webp"
      },
      {
        "id": 184268,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453544936807fefd749e6.webp"
      },
      {
        "id": 184269,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453545116807ff0f8e33d.webp"
      },
      {
        "id": 184270,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX - NOGAL / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453561476808057390216.webp"
      },
      {
        "id": 184271,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX - CEDRO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453561586808057eec0b3.webp"
      },
      {
        "id": 184272,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356214680805b682ee6.webp"
      },
      {
        "id": 184273,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356226680805c23d039.webp"
      },
      {
        "id": 184274,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL DUNAS - OFF WHITE + NATURALE",
        "imagem": ""
      },
      {
        "id": 184281,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL AVANT 1.80 - NOGUEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/174535629468080606035c6.webp"
      },
      {
        "id": 184282,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL AVANT 1.80 - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/174535633668080630a8749.webp"
      },
      {
        "id": 184283,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL AVANT 1.35 - NOGUEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/174535635668080644837c9.webp"
      },
      {
        "id": 184284,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL AVANT 1.35 - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356408680806783088b.webp"
      },
      {
        "id": 184285,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL ARBO RIPADO C/ NICHO - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356498680806d206440.webp"
      },
      {
        "id": 184286,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL ARBO RIPADO C/ NICHO - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453565746808071e77a02.webp"
      },
      {
        "id": 184287,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL ( DAVOS / DIJON ) - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453566516808076be7a64.webp"
      },
      {
        "id": 184288,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL ( DAVOS / DIJON ) - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453566666808077aba9bd.webp"
      },
      {
        "id": 184289,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "NICHO DIOR 1.60 OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/174535669368080795778ac.webp"
      },
      {
        "id": 184295,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO PREMIUM C/ ESP. FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356742680807c607fd5.webp"
      },
      {
        "id": 184296,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO PREMIUM C/ ESP. BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356763680807db510ca.webp"
      },
      {
        "id": 184297,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO NEW - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356777680807e991dd4.webp"
      },
      {
        "id": 184298,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO NEW - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453568106808080a53998.webp"
      },
      {
        "id": 184299,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO NEW - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/174535683868080826eb5cc.webp"
      },
      {
        "id": 184300,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO NEW - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356867680808433b29a.webp"
      },
      {
        "id": 184306,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453569426808088eaf91f.webp"
      },
      {
        "id": 184307,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - ACACIA MADEIRADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-09/1752088245686ebeb5e0cb0.webp"
      },
      {
        "id": 184308,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - ACACIA / REFLECTA BRILHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-09/1752088257686ebec16f141.webp"
      },
      {
        "id": 184309,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO ALTO 4P - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745357013680808d5196ed.webp"
      },
      {
        "id": 184310,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO ALTO 4P - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454187926808fa282c621.webp"
      },
      {
        "id": 184313,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO 1.83 MTS - EBANO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454190116808fb03b658c.webp"
      },
      {
        "id": 184314,
        "categoria": [
          "Roupeiros",
          "Modulados"
        ],
        "nomeDoProduto": "MODULADO 5 PORTAS - FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454190436808fb232195d.webp"
      },
      {
        "id": 184321,
        "categoria": [
          "Mesas",
          "Sala de jantar"
        ],
        "nomeDoProduto": "MESA PETRA 1.20 X 0.80 EM MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454252056809133558c74.webp"
      },
      {
        "id": 184322,
        "categoria": [
          "Mesas",
          "Sala de jantar"
        ],
        "nomeDoProduto": "MESA PETRA 1.03 X 1.03 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745425355680913cb170bb.webp"
      },
      {
        "id": 184323,
        "categoria": [
          "Mesas",
          "Sala de jantar"
        ],
        "nomeDoProduto": "MESA PETRA 0.90 X 0.90 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745425355680913cb170bb.webp"
      },
      {
        "id": 184327,
        "categoria": [
          "Mesas",
          "Sala de jantar"
        ],
        "nomeDoProduto": "MESA HERA 1.60 X 0.90 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745425886680915dec0784.webp"
      },
      {
        "id": 184328,
        "categoria": [
          "Mesas",
          "Sala de jantar"
        ],
        "nomeDoProduto": "MESA HERA 1.20 X 0.80 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745425886680915dec0784.webp"
      },
      {
        "id": 184329,
        "categoria": [
          "Mesas",
          "Sala de jantar"
        ],
        "nomeDoProduto": "MESA DUBAI 1.60 X 0.80 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174542834968091f7d67956.webp"
      },
      {
        "id": 184330,
        "categoria": [
          "Mesas",
          "Sala de jantar"
        ],
        "nomeDoProduto": "MESA DUBAI 1.20 X 0.80 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174542834968091f7d67956.webp"
      },
      {
        "id": 184332,
        "categoria": [
          "Sala",
          "Mesa de Centro"
        ],
        "nomeDoProduto": "MESA DE CENTRO HOLAMBRA - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454285406809203c582e6.webp"
      },
      {
        "id": 184333,
        "categoria": [
          "Sala",
          "Mesa de Centro"
        ],
        "nomeDoProduto": "MESA DE CENTRO HOLAMBRA - FENDI",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745428561680920518c91a.webp"
      },
      {
        "id": 184334,
        "categoria": [
          "Sala",
          "Mesa de Centro"
        ],
        "nomeDoProduto": "MESA DE CENTRO CDK",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745428655680920af29276.webp"
      },
      {
        "id": 184335,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA VILLARE - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543107068092a1e126f7.webp"
      },
      {
        "id": 184336,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA VILLARE - PEROLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543108668092a2e04cb8.webp"
      },
      {
        "id": 184341,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA URBAN - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174542909268092264ab213.webp"
      },
      {
        "id": 184342,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA URBAN - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174542910468092270ac84d.webp"
      },
      {
        "id": 184343,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA CITY - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429239680922f737879.webp"
      },
      {
        "id": 184344,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA CITY - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174542983068092546f21ec.webp"
      },
      {
        "id": 184348,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "MESA COM 3 PRATELEIRAS EM AÇO - FREIJO / PRETO FOSCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429972680925d44e2ef.webp"
      },
      {
        "id": 184349,
        "categoria": [
          "Mesas",
          "Sala de jantar"
        ],
        "nomeDoProduto": "MESA COM 2 BANCOS - FREIJO / PRETO FOSCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429988680925e491e9d.webp"
      },
      {
        "id": 184350,
        "categoria": [
          "Mesas",
          "Sala de jantar"
        ],
        "nomeDoProduto": "MESA BELA 0.90 X 0.90 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745430049680926211dc61.webp"
      },
      {
        "id": 184356,
        "categoria": [
          "Lavadoras",
          "Tanquinho"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 20.5 KG - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454301136809266110a91.webp"
      },
      {
        "id": 184357,
        "categoria": [
          "Lavadoras",
          "Tanquinho"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 20.5 KG - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454301136809266110a91.webp"
      },
      {
        "id": 184358,
        "categoria": [
          "Lavadoras",
          "Tanquinho"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 14 KG - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745430188680926ac60ae2.webp"
      },
      {
        "id": 184359,
        "categoria": [
          "Lavadoras",
          "Tanquinho"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 14 KG - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745430188680926ac60ae2.webp"
      },
      {
        "id": 184360,
        "categoria": [
          "Lavadoras",
          "Tanquinho"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 10KG 220 V - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745430501680927e59d310.webp"
      },
      {
        "id": 184365,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "LAMINA RIPADA ARBO 0.94 MTS - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543059468092842380ac.webp"
      },
      {
        "id": 184366,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "LAMINA RIPADA ARBO 0.94 MTS - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543059468092842380ac.webp"
      },
      {
        "id": 184367,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT PAQUETA 910 PLUS - LM / RIPADO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543117068092a82f06ba.webp"
      },
      {
        "id": 184368,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT PAQUETA 910 - LM MEL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543121368092aadcfa2e.webp"
      },
      {
        "id": 184369,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT PAQUETA 910 - GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543126168092adde6cda.webp"
      },
      {
        "id": 184370,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT PAQUETA 1210 - RIPADO BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745430885680929652ab29.webp"
      },
      {
        "id": 184371,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT PAQUETÁ 1210 - LM  MEL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745430976680929c03c4ac.webp"
      },
      {
        "id": 184372,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT PAQUETA 1210 - GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543104468092a048972c.webp"
      },
      {
        "id": 184378,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT GOLF REFLECTA 5P 2G - RIPADO /ARENAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543187968092d47db65e.webp"
      },
      {
        "id": 184379,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT GOLF REFLECTA 5P 2G - LM/BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543189768092d5990ded.webp"
      },
      {
        "id": 184380,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT GOLF REFLECTA 5P 2G - ARENAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543227168092ecfcfb01.webp"
      },
      {
        "id": 184381,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT GOLF REFLECTA - CINZA SUPREMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543210868092e2c7aede.webp"
      },
      {
        "id": 184383,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT CEARA 5 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/17472318716824a47febc32.webp"
      },
      {
        "id": 184384,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT CEARA 5 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745432617680930295341e.webp"
      },
      {
        "id": 184385,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT CEARA 5 PORTAS - ACACIA MADEIRADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745432791680930d7e7a65.webp"
      },
      {
        "id": 184386,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT CEARA 4 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745432816680930f0da41e.webp"
      },
      {
        "id": 184387,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT CEARA 4 PORTAS - 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745432827680930fb6dc0c.webp"
      },
      {
        "id": 184388,
        "categoria": [
          "Acessórios",
          "Kits"
        ],
        "nomeDoProduto": "KIT C/ 8 PES - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745432999680931a77b369.webp"
      },
      {
        "id": 184389,
        "categoria": [
          "Acessórios",
          "Kits"
        ],
        "nomeDoProduto": "KIT C/ 8 PES - IMBUIA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745433081680931f978a90.webp"
      },
      {
        "id": 184390,
        "categoria": [
          "Acessórios",
          "Kits"
        ],
        "nomeDoProduto": "KIT C/ 8 PES - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454331516809323f64437.webp"
      },
      {
        "id": 184395,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "JOGO DE MESA CROMO C/ 4 CAD. BR SEM TAMPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-01/174614297868140702097ee.webp"
      },
      {
        "id": 184397,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO MAXI - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745432805680930e5cca51.webp"
      },
      {
        "id": 184398,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO MAXI - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745432823680930f73ea99.webp"
      },
      {
        "id": 184399,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO MAXI - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454333566809330c5ba53.webp"
      },
      {
        "id": 184400,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO MAXI - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745433305680932d978584.webp"
      },
      {
        "id": 184401,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO AVANT 1.8 C/ NICHO - NOGUEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454336586809343ac5b10.webp"
      },
      {
        "id": 184402,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO AVANT 1.8 C/ NICHO - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454341986809365673ed0.webp"
      },
      {
        "id": 184403,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO AVANT 1.4 C/ NICHO - NOGUEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454336586809343ac5b10.webp"
      },
      {
        "id": 184404,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO AVANT 1.4 C/ NICHO - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434307680936c37bdd3.webp"
      },
      {
        "id": 184406,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "HOME IPANEMA - NATURE / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-01/174614379168140a2fc023b.webp"
      },
      {
        "id": 184408,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA REGIA - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745433382680933266a759.webp"
      },
      {
        "id": 184409,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA MARTA - MONTANA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745433555680933d32abdb.webp"
      },
      {
        "id": 184410,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA MARTA - LM / LM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745433520680933b0f176e.webp"
      },
      {
        "id": 184411,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA MARTA - LM / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745433575680933e72a525.webp"
      },
      {
        "id": 184412,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA MARTA - CARVALHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745433555680933d32abdb.webp"
      },
      {
        "id": 184413,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA MARTA - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454336136809340d2fc01.webp"
      },
      {
        "id": 184415,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA DALLAS - LM / LM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454341416809361d3dc61.webp"
      },
      {
        "id": 184416,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA DALLAS - LM / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745434183680936470f5ba.webp"
      },
      {
        "id": 184417,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA DALLAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454342396809367fcb470.webp"
      },
      {
        "id": 184418,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA DALLAS - BCO / CARVALHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454342706809369e1acae.webp"
      },
      {
        "id": 184421,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGÃO MONACO TOP GLASS 5 BOCAS PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434291680936b3c4d7d.webp"
      },
      {
        "id": 184422,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGÃO MONACO TOP GLASS 5 BOCAS BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434304680936c05d5c1.webp"
      },
      {
        "id": 184423,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGÃO MONACO TOP GLASS 4 BOCAS PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434318680936ce17a2a.webp"
      },
      {
        "id": 184424,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGÃO MONACO TOP GLASS 4 BOCAS BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434330680936dabffe7.webp"
      },
      {
        "id": 184425,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGAO GAS 5Q MONACO PLUS PTO 20",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434350680936eee65b8.webp"
      },
      {
        "id": 184426,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGAO GAS 5Q MONACO PLUS BCO 20",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434361680936f992dcb.webp"
      },
      {
        "id": 184427,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGÃO GAS 5BC MONACO TOP GLASS BCO 12",
        "imagem": "https://phizclip-assets.phiz.live/phizshop/pro/Store/Goods/2025-04-23/17454344096809372991bc2.gif"
      },
      {
        "id": 184428,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGAO GAS 4BC COLISEUM PRETO S A 12",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454344296809373db7f08.webp"
      },
      {
        "id": 184429,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGAO GAS 4BC COLISEUM BCO S A 12",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454344466809374e0e1f5.webp"
      },
      {
        "id": 184430,
        "categoria": [
          "Cozinha",
          "Cooktop"
        ],
        "nomeDoProduto": "FOGÃO COOKTOP GOLD 5 BOCAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454344586809375ac8ac7.webp"
      },
      {
        "id": 184433,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGAO 4 BOCAS MONACO PLUS PTO 20",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-20/1747744884682c7874ba4e6.webp"
      },
      {
        "id": 184434,
        "categoria": [
          "Cozinha",
          "Fogão"
        ],
        "nomeDoProduto": "FOGAO 4 BOCAS MONACO PLUS BCO 20",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454344786809376ee14be.webp"
      },
      {
        "id": 184435,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.9 MTS C/ PORTA COPO - CINZA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856105680fa6693a057.webp"
      },
      {
        "id": 184436,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.50 MTS - C/ PORTA COPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-27/1745780722680e7ff2cb766.webp"
      },
      {
        "id": 184437,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.5 MTS C/ PORTA COPO",
        "imagem": ""
      },
      {
        "id": 184438,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.1 MTS C/ PORTA COPO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856076680fa64cc4a67.webp"
      },
      {
        "id": 184445,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO RETRATIL RECLINAVEL 3080",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-05/174647218868190cfc2ce8b.webp"
      },
      {
        "id": 184456,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO MORF 2.90 MTS - AZUL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-09/1746811721681e3b4960442.webp"
      },
      {
        "id": 184463,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO LIFE 2.0 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543535268093ad870f13.webp"
      },
      {
        "id": 184464,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO LAUS PRIME 2.90 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543545368093b3d438f5.webp"
      },
      {
        "id": 184465,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO LAUS PRIME 2.50 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543547768093b5589aab.webp"
      },
      {
        "id": 184466,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO LAUS PRIME 2.00 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543551168093b779f8e0.webp"
      },
      {
        "id": 184467,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO LARISSA DE CANTO - CORES VARIADAS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856095680fa65fc4127.webp"
      },
      {
        "id": 184474,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO BARCELONA  2 E 3 LUG.",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856097680fa66132bd5.webp"
      },
      {
        "id": 184475,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ATLANTA 2.9 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543548668093b5ee7209.webp"
      },
      {
        "id": 184476,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ATLANTA 2.5 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543549568093b6766ece.webp"
      },
      {
        "id": 184477,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ATLANTA 2.0 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543550268093b6e8a0ef.webp"
      },
      {
        "id": 184478,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ATLANTA  2.90 MTS C/ MOLAS ENSACADAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/1746213040681518b048929.webp"
      },
      {
        "id": 184479,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ATLANTA  2.50 MTS C/ MOLAS ENSACADAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/1746213047681518b79c211.webp"
      },
      {
        "id": 184480,
        "categoria": [
          "Ecritório",
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE OFFICE - NATURE / PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543554568093b99eef3f.webp"
      },
      {
        "id": 184481,
        "categoria": [
          "Ecritório",
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE OFFICE - BRANCO / NATURE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543555468093ba2954c7.webp"
      },
      {
        "id": 184482,
        "categoria": [
          "Ecritório",
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE LIVREIRO LARISSA - ROSE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543556568093bad4d593.webp"
      },
      {
        "id": 184483,
        "categoria": [
          "Ecritório",
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE LIVREIRO LARISSA - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543575568093c6b6a204.webp"
      },
      {
        "id": 184484,
        "categoria": [
          "Ecritório",
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE LIVREIRO LARISSA - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543576568093c7561c69.webp"
      },
      {
        "id": 184485,
        "categoria": [
          "Ecritório",
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE DE AÇO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543578568093c8925b21.webp"
      },
      {
        "id": 184494,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA TAURUS 1.20 MTS - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543595768093d3526529.webp"
      },
      {
        "id": 184495,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA TAURUS 1.20 MTS - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543597168093d431dbc4.webp"
      },
      {
        "id": 184497,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA OFFICE - NATURE / PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543560468093bd481a5c.webp"
      },
      {
        "id": 184500,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA EM 'l' THOR - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543562968093bede69e5.webp"
      },
      {
        "id": 184501,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA EM L TAURUS - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543566468093c1037af2.webp"
      },
      {
        "id": 184502,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA EM L TAURUS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543571068093c3ef2a70.webp"
      },
      {
        "id": 184503,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA ARIEL - MEL / PEROLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543575968093c6f01ec6.webp"
      },
      {
        "id": 184504,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA ARIEL - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543577568093c7fec967.webp"
      },
      {
        "id": 184505,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA ARIEL - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543578568093c8923732.webp"
      },
      {
        "id": 184507,
        "categoria": [
          "Cozinha",
          "Cozinhas"
        ],
        "nomeDoProduto": "COZINHA VITORIA SOMENTE O \"L\" - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543138068092b547b17c.webp"
      },
      {
        "id": 184508,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA VITORIA SOMENTE O \"L\" - GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543164968092c61b734d.webp"
      },
      {
        "id": 184521,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA THALIA / AGATHA - LM / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745430757680928e5bc25f.webp"
      },
      {
        "id": 184522,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA THALIA / AGATHA - LM / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745430740680928d4bb45e.webp"
      },
      {
        "id": 184523,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA THALIA / AGATHA - ARENAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543117568092a87c8c7f.webp"
      },
      {
        "id": 184524,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA SIENA 6P 1G - AVENA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745430444680927acbbc28.webp"
      },
      {
        "id": 184525,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA SIENA 6P 1G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745430344680927484ab90.webp"
      },
      {
        "id": 184527,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA ROMA 4P 2G - AVENA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543027968092707c5c16.webp"
      },
      {
        "id": 184528,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA ROMA 4P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429946680925bae305a.webp"
      },
      {
        "id": 184529,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA RAVENA - MADEIRADO REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543170068092c9495c2f.webp"
      },
      {
        "id": 184530,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA RAVENA - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-09/1752088734686ec09e8c7d8.webp"
      },
      {
        "id": 184531,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA PREMIUM 1800 7P 2G- MONTANA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543233368092f0d515ad.webp"
      },
      {
        "id": 184532,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA PREMIUM 1800 7P 2G - MONTANA/BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454326766809306442f82.webp"
      },
      {
        "id": 184533,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA PREMIUM 1800 7P 2G - MONTANA/ARENA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745432824680930f811d77.webp"
      },
      {
        "id": 184534,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA MONACO - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745433062680931e67fbf0.webp"
      },
      {
        "id": 184535,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA MONACO - CANELATO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745433077680931f59b1ac.webp"
      },
      {
        "id": 184538,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA MILA 5P 3G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454331566809324411eb8.webp"
      },
      {
        "id": 184539,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA MILA 5P 3G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543316868093250c5371.webp"
      },
      {
        "id": 184540,
        "categoria": [
          "Cozinha",
          "Em Aço"
        ],
        "nomeDoProduto": "COZINHA MADRI 4 PEÇAS EM AÇO - TERRACOTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454334506809336a8b496.webp"
      },
      {
        "id": 184542,
        "categoria": [
          "Cozinha",
          "Em Aço"
        ],
        "nomeDoProduto": "COZINHA MADRI 4 PEÇAS EM AÇO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454336456809342d187a8.webp"
      },
      {
        "id": 184543,
        "categoria": [
          "Cozinha",
          "Em Aço"
        ],
        "nomeDoProduto": "COZINHA MADRI 4 PEÇAS EM AÇO - AZUL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454337346809348632325.webp"
      },
      {
        "id": 184544,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA LANA C/ BALCÃO 6P 3G - MARROCOS/BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434066680935d25bb29.webp"
      },
      {
        "id": 184545,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA JUMA C/ BALCÃO 7P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745434292680936b43c900.webp"
      },
      {
        "id": 184546,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA JUMA C/ BALCÃO 7P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434317680936cd31cb3.webp"
      },
      {
        "id": 184547,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA ISIS 5P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454344316809373f4b84c.webp"
      },
      {
        "id": 184548,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA ISIS 5P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543445168093753f41dd.webp"
      },
      {
        "id": 184549,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA ISABELLE C/ BALCÃO 6P 2G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454344926809377ca10a3.webp"
      },
      {
        "id": 184550,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA ISABELLE C/ BALCÃO 6P 2G - ATAC./OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434531680937a379deb.webp"
      },
      {
        "id": 184551,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA ISABELLE C/ BALCÃO 6P 1G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434543680937af19082.webp"
      },
      {
        "id": 184552,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA FUTURA / IBIZA 2.13 - LM / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454346386809380e2564f.webp"
      },
      {
        "id": 184553,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA FUTURA / IBIZA 2.13 - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454347196809385fc60b2.webp"
      },
      {
        "id": 184554,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA FUTURA / IBIZA 2.13 - ARENAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745434860680938ec2c0e8.webp"
      },
      {
        "id": 184555,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA FORTALEZA C/ BALCAO - CANELATO/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543521568093a4fc42a9.webp"
      },
      {
        "id": 184557,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA EMILY C/ BALCÃO 6P 1G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543575868093c6e7c998.webp"
      },
      {
        "id": 184559,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA CEARA 4P 1G - ACACIA MADEIRADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543598068093d4c9b9d6.webp"
      },
      {
        "id": 184562,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA CAROL 6P 1G - ATACAMA/BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543607568093dabbd3f9.webp"
      },
      {
        "id": 184565,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA ATENAS C/ BALCÃO 8P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543607468093daade95c.webp"
      },
      {
        "id": 184566,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA ATENAS C/ BALCÃO 8P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543609068093dba4b840.webp"
      },
      {
        "id": 184567,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZ ANGELINA PRIME FRISADA - CINAMOMO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543610068093dc41941b.webp"
      },
      {
        "id": 184568,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZ ANGELINA PRIME FRISADA - CINAMOMO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543610868093dcc25ede.webp"
      },
      {
        "id": 184569,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA ALINE - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543613268093de4827a8.webp"
      },
      {
        "id": 184570,
        "categoria": [
          "Cozinha",
          "Em Aço"
        ],
        "nomeDoProduto": "COZINHA ALANA EM AÇO 8P 1G - BRANCO/AZUL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543616068093e0023135.webp"
      },
      {
        "id": 184571,
        "categoria": [
          "Cozinha",
          "Em Aço"
        ],
        "nomeDoProduto": "COZINHA ALANA EM AÇO - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543616768093e078215a.webp"
      },
      {
        "id": 184572,
        "categoria": [
          "Cozinha",
          "Em Aço"
        ],
        "nomeDoProduto": "COZINHA ALANA EM AÇO - BRANCO/TERRACOTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543621168093e33d7922.webp"
      },
      {
        "id": 184573,
        "categoria": [
          "Cozinha",
          "Em Aço"
        ],
        "nomeDoProduto": "COZINHA ALANA EM AÇO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543621968093e3bb541a.webp"
      },
      {
        "id": 184574,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZ 910 4P 2G C/ 2 P. DE ABRIR- ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/17472312926824a23c62159.webp"
      },
      {
        "id": 184575,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT 910 4P 2G C/ 2 P. DE ABRIR- ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/17472315986824a36e45b42.webp"
      },
      {
        "id": 184576,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZ.1210 4P 1G C/ 2 P. DE COR. - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/17472314496824a2d930f23.webp"
      },
      {
        "id": 184577,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZ 1210 4P 1G C/ 2 P. DE CORRER - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543611068093dcedc63b.webp"
      },
      {
        "id": 184587,
        "categoria": [
          "Cozinha",
          "Cooktop"
        ],
        "nomeDoProduto": "COOKTOP GAS 5Q ATLAS AGILE UP GLASS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543613068093de26e722.webp"
      },
      {
        "id": 184588,
        "categoria": [
          "Cozinha",
          "Cooktop"
        ],
        "nomeDoProduto": "COOKTOP DAKO SUPREME 5 BOCAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543615568093dfba2ca3.webp"
      },
      {
        "id": 184590,
        "categoria": [
          "Cozinha",
          "Cooktop"
        ],
        "nomeDoProduto": "COOKTOP ATLAS TRIPLA CHAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543618768093e1b40c90.webp"
      },
      {
        "id": 184597,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJUNTO BIANCA 1,40 X 0,75 C/ 6 CAD. BR SEM TAMPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-01/17461341546813e48a97738.webp"
      },
      {
        "id": 184598,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJUNTO BIANCA 1,20 X 0,75 C/ 4 CAD. PT SEM TAMPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460528106812a6cabee49.webp"
      },
      {
        "id": 184599,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJUNTO BIANCA 0,75 X 1,40 C/ 6 CAD. PT SEM TAMPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460528006812a6c09e50c.webp"
      },
      {
        "id": 184600,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJUNTO BIANCA 0,75 X 1,40 C/ 6 CADEIRAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543658468093fa8a1732.webp"
      },
      {
        "id": 184601,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJ. BIANCA 0,7 5 X1,20 C/ 4 Cd- OURO ENVELHECIDO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543720268094212c6704.webp"
      },
      {
        "id": 184602,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJUNTO BIANCA 0,75 X 1,20 C/ 4 CADEIRAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454372746809425a1c950.webp"
      },
      {
        "id": 184603,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJ. BIANCA 0,75 X 0,75 C/ 4 CAD. S/ TAMPO PT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543701468094156cab8b.webp"
      },
      {
        "id": 184604,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJUNTO BIANCA 0,75 X 0,75 C/ 4 CAD. BR SEM TAMPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745437097680941a9e7ec2.webp"
      },
      {
        "id": 184611,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA SKY 1P 3G - MEL/PEROLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437312680942805ebfc.webp"
      },
      {
        "id": 184612,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA  SKY 1P 3G - BRANCA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454373296809429185aa6.webp"
      },
      {
        "id": 184613,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA SKY 1P 3G - AMENDOA WOOD",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454373426809429e56186.webp"
      },
      {
        "id": 184614,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA SEVILHA 1P 5G C/ PORTA JOIAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437426680942f2553dc.webp"
      },
      {
        "id": 184615,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA SEVILHA 1P 4G C/ PORTA JOIAS - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437439680942ff968b9.webp"
      },
      {
        "id": 184616,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA SAPATEIRA ECCOS - NATURE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543625068093e5a006f8.webp"
      },
      {
        "id": 184617,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA SAPATEIRA ECCOS - GIANDUIA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543625768093e6181f2d.webp"
      },
      {
        "id": 184620,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA MILÃO 1P 5G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543626868093e6cb92c8.webp"
      },
      {
        "id": 184621,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA MILÃO 1P 5G - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543627768093e751163e.webp"
      },
      {
        "id": 184622,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA MILÃO  1P 5G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543628668093e7e5a9ee.webp"
      },
      {
        "id": 184623,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA LONDRES 2P 4G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543631568093e9be77ed.webp"
      },
      {
        "id": 184624,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA LONDRES 2P 4G - ATCAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543632268093ea2a5bfe.webp"
      },
      {
        "id": 184628,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA JADE 8G - PEROLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543633468093eae1817b.webp"
      },
      {
        "id": 184629,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA JADE 8G - FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543634568093eb9069d2.webp"
      },
      {
        "id": 184630,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA JADE 8G - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543635668093ec401417.webp"
      },
      {
        "id": 184631,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA JADE 8G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543637168093ed373880.webp"
      },
      {
        "id": 184632,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA DETROIT NEW - JEQUITIBA / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543638768093ee3137dc.webp"
      },
      {
        "id": 184633,
        "categoria": [
          "Linha Infantil",
          "Kids"
        ],
        "nomeDoProduto": "CÔMODA  CATATAU NEW 3GAV - BCO/RS/NAT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543640768093ef7e8024.webp"
      },
      {
        "id": 184649,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO SUPREME D-20 0.78 X 1.88",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543647868093f3e51595.webp"
      },
      {
        "id": 184650,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO SUPREME D-20 - 0.88 X 1.88",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543648668093f46dc8c5.webp"
      },
      {
        "id": 184651,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO SUPREME CASAL D-20 - 1.38 X 1.88",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543650068093f54e6028.webp"
      },
      {
        "id": 184654,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO MERCURIO 1.38 X 1.88 C/ 26 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543651468093f62b28d5.webp"
      },
      {
        "id": 184658,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER MLSP 1.58 X 1.98 X 0.25",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543668968094011047de.webp"
      },
      {
        "id": 184659,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER MlSP 1.38 X 1.88 X 0.25",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543668968094011047de.webp"
      },
      {
        "id": 184660,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-45 CASAL C/22 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543678568094071b2943.webp"
      },
      {
        "id": 184661,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 CASAL C/14",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745436874680940ca0ba71.webp"
      },
      {
        "id": 184662,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 CASAL C/ 17 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745436909680940ed5aed2.webp"
      },
      {
        "id": 184663,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 0.88 C/17",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745436909680940ed5aed2.webp"
      },
      {
        "id": 184664,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 0.88 C/14",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454369686809412802e8d.webp"
      },
      {
        "id": 184665,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 0.78 C/17",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454369686809412802e8d.webp"
      },
      {
        "id": 184666,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 0.78 C/14",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745436909680940ed5aed2.webp"
      },
      {
        "id": 184669,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO D-33 C/ 22 CM SLT- 0.88 X 1.88 X 0.22",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745436909680940ed5aed2.webp"
      },
      {
        "id": 184670,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO D-33 C/ 22 CM QUEEN - 1.58 X 1.88 X 0.22",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543707368094191c5ef1.webp"
      },
      {
        "id": 184671,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO D-33 C/ 22 CM CASAL - 1.38 X 1.88 X 0.22",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543707368094191c5ef1.webp"
      },
      {
        "id": 184675,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO CASAL GOIAS D-20 12 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437170680941f2673ba.webp"
      },
      {
        "id": 184678,
        "categoria": [
          "Climatização",
          "Climatizador"
        ],
        "nomeDoProduto": "CLIMATIZADOR 60 LITROS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454371986809420e41576.webp"
      },
      {
        "id": 184679,
        "categoria": [
          "Climatização",
          "Climatizador"
        ],
        "nomeDoProduto": "CLIMATIZADOR 125 LITROS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543720668094216dc57e.webp"
      },
      {
        "id": 184682,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "CAMA CASAL CLARA - FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437239680942371e9c4.webp"
      },
      {
        "id": 184683,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "CAMA CASAL CLARA - DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543927968094a2f851eb.webp"
      },
      {
        "id": 184686,
        "categoria": [
          "Cama",
          "Acoplados"
        ],
        "nomeDoProduto": "CAMA BOX SOLTEIRO 10 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437149680941ddca4e0.webp"
      },
      {
        "id": 184687,
        "categoria": [
          "Cama",
          "Acoplados"
        ],
        "nomeDoProduto": "CAMA BOX CASAL 10 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543718968094205b16b2.webp"
      },
      {
        "id": 184689,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "CAMA BIBOX COM BAU E GAV. - JACARANDA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543722168094225c2f43.webp"
      },
      {
        "id": 184690,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "CAMA BIBOX COM BAU E GAV. - CAMARU",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437240680942387bb3b.webp"
      },
      {
        "id": 184691,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "CAMA BIBOX COM BAU E GAV. - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454372626809424e08224.webp"
      },
      {
        "id": 184693,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "CAMA BAU JADE C/ GAV. - NATURE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437539680943637ba19.webp"
      },
      {
        "id": 184694,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "CAMA BAU JADE C/ GAV. - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454375556809437319d37.webp"
      },
      {
        "id": 184695,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "CAMA AUXILIAR 0.90 ELEGANZA NATURE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745439201680949e1dd394.webp"
      },
      {
        "id": 184696,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "CAMA AUXILIAR 0.90 ELEGANZA JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745439218680949f272016.webp"
      },
      {
        "id": 184697,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "CAMA AUXILIAR 0.90 ELEGANZA BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454373066809427a26242.webp"
      },
      {
        "id": 184698,
        "categoria": [
          "Banheiro",
          "Espelho"
        ],
        "nomeDoProduto": "Caixa C/ 2 espelhos 0.70 x 0.20",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-06-27/1751027364685e8ea43d929.webp"
      },
      {
        "id": 184699,
        "categoria": [
          "Cadeiras Avulsas",
          "Cadeiras"
        ],
        "nomeDoProduto": "CADEIRA VIVACE PLUS - TECIDO CASTOR",
        "imagem": ""
      },
      {
        "id": 184700,
        "categoria": [
          "Cadeiras Avulsas",
          "Cadeiras"
        ],
        "nomeDoProduto": "CADEIRA VIVACE PLUS - TECIDO CARAMELO",
        "imagem": ""
      },
      {
        "id": 184701,
        "categoria": [
          "Cadeiras Avulsas",
          "Cadeiras"
        ],
        "nomeDoProduto": "CADEIRA TUBOLAR INDIVIDUAL C/4 UNIDADES",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437400680942d8d844c.webp"
      },
      {
        "id": 184702,
        "categoria": [
          "Cadeiras Avulsas",
          "Cadeiras"
        ],
        "nomeDoProduto": "CADEIRA ESTOFADA ALBERTO LINHO 303 - COR 07",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745438150680945c668ea2.webp"
      },
      {
        "id": 184703,
        "categoria": [
          "Cadeiras Avulsas",
          "Cadeiras"
        ],
        "nomeDoProduto": "CADEIRA ESTOFADO ALB- COR 22 CX C/ 2 - CINZA CLARO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454380366809455491c83.webp"
      },
      {
        "id": 184704,
        "categoria": [
          "Cadeiras Avulsas",
          "Cadeiras"
        ],
        "nomeDoProduto": "CADEIRA ESTOFADA ALBERTO - COR 14 CX C/ 2 - MARROM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745438069680945753f8b4.webp"
      },
      {
        "id": 184705,
        "categoria": [
          "Cadeiras Avulsas",
          "Cadeiras"
        ],
        "nomeDoProduto": "CADEIRA ESTOFADA ALB - COR 07 CX C/ 2 - GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745438112680945a052a19.webp"
      },
      {
        "id": 184710,
        "categoria": [
          "Cama",
          "Cabeceira de Cama"
        ],
        "nomeDoProduto": "CABECEIRA BOX 1.40 / 1.60 ZARA CAPITONÊ - PEROLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437666680943e2e1b61.webp"
      },
      {
        "id": 184711,
        "categoria": [
          "Cama",
          "Cabeceira de Cama"
        ],
        "nomeDoProduto": "CABECEIRA BOX 1.40 / 1.60 ZARA CAPITONÊ - JACARANDA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437678680943eee219e.webp"
      },
      {
        "id": 184712,
        "categoria": [
          "Cama",
          "Cabeceira de Cama"
        ],
        "nomeDoProduto": "CABECEIRA BOX 1.40 / 1.60 ZARA CAPITONÊ - CAMARU",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454377606809444028220.webp"
      },
      {
        "id": 184713,
        "categoria": [
          "Cama",
          "Cabeceira de Cama"
        ],
        "nomeDoProduto": "CABECEIRA ANA ESTOFADA 1.40 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543797468094516b4c6b.webp"
      },
      {
        "id": 184715,
        "categoria": [
          "Sala de Estar",
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET MAGNUM 0.90 OFF WHITE/CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543806768094573b2e6f.webp"
      },
      {
        "id": 184716,
        "categoria": [
          "Sala de Estar",
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET MAGNUM 0.90 FENDI/FREIJO NOBRE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454380816809458133532.webp"
      },
      {
        "id": 184723,
        "categoria": [
          "Sala de Estar",
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET AÇORES - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543810368094597e903a.webp"
      },
      {
        "id": 184724,
        "categoria": [
          "Linha Infantil",
          "Kids"
        ],
        "nomeDoProduto": "BERÇO MINI-CAMA ALVIN - NATURE / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438119680945a73dcfe.webp"
      },
      {
        "id": 184725,
        "categoria": [
          "Linha Infantil",
          "Kids"
        ],
        "nomeDoProduto": "BERÇO MINI-CAMA ALVIN - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438134680945b6eb154.webp"
      },
      {
        "id": 184727,
        "categoria": [
          "Cama",
          "Beliche"
        ],
        "nomeDoProduto": "BELICHE PRISMA PLUS BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437601680943a1b07b3.webp"
      },
      {
        "id": 184728,
        "categoria": [
          "Cama",
          "Beliche"
        ],
        "nomeDoProduto": "BELICHE FLORIPA PLUS JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437649680943d16e5c0.webp"
      },
      {
        "id": 184729,
        "categoria": [
          "Cama",
          "Beliche"
        ],
        "nomeDoProduto": "BELICHE ABSOLUT JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437690680943fa726c1.webp"
      },
      {
        "id": 184730,
        "categoria": [
          "Cama",
          "Beliche"
        ],
        "nomeDoProduto": "BELICHE ABSOLUT BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543769968094403c02f9.webp"
      },
      {
        "id": 184731,
        "categoria": [
          "Cama",
          "Bases de Cama"
        ],
        "nomeDoProduto": "BASE QUEEN EM SUEDE - 1,58 X 1,98 M",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-01/1746142202681403fa02f24.webp"
      },
      {
        "id": 184733,
        "categoria": [
          "Cama",
          "Bases de Cama"
        ],
        "nomeDoProduto": "BASE PARA CAMA SUPER QUEEN - 193 X 2.03",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543771268094410f2441.webp"
      },
      {
        "id": 184735,
        "categoria": [
          "Cama",
          "Bases de Cama"
        ],
        "nomeDoProduto": "BASE PARA CAMA SOLTEIRO - 0.88 X 1.88",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454377286809442019e66.webp"
      },
      {
        "id": 184737,
        "categoria": [
          "Cama",
          "Bases de Cama"
        ],
        "nomeDoProduto": "BASE CASAL  EM SUEDE - 1,38 X 1,88 M",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454377566809443c2a981.webp"
      },
      {
        "id": 184738,
        "categoria": [
          "Cama",
          "Bases de Cama"
        ],
        "nomeDoProduto": "BASE BAU SOLTEIRO SUEDE - 0.88 X 1.88",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454377826809445692cdd.webp"
      },
      {
        "id": 184739,
        "categoria": [
          "Cama",
          "Bases de Cama"
        ],
        "nomeDoProduto": "BASE BAU LIGHT SUEDE AMASSADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454378346809448a5076b.webp"
      },
      {
        "id": 184743,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "BASE + COLCHÃO MERCURY SOLTEIRO 0.88 X 1.88 X 0.56",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543824668094626649dc.webp"
      },
      {
        "id": 184744,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "BASE + COLCHÃO MERCURY 1,93 X 1,98 X 0 ,56 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454383006809465c535b4.webp"
      },
      {
        "id": 184745,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "BASE + COLCHÃO MERCURY 1,58 X 1,98 X 0,56 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454383006809465c535b4.webp"
      },
      {
        "id": 184746,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "BASE + COLCHÃO MERCURY 1,38 X 1,88 X 0,56 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454383666809469e035a7.webp"
      },
      {
        "id": 184752,
        "categoria": [
          "Sala",
          "Bar"
        ],
        "nomeDoProduto": "BAR ADEGA BALI - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438397680946bdd815d.webp"
      },
      {
        "id": 184753,
        "categoria": [
          "Sala",
          "Bar"
        ],
        "nomeDoProduto": "BAR ADEGA BALI - OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438408680946c82d6ff.webp"
      },
      {
        "id": 184754,
        "categoria": [
          "Sala",
          "Bar"
        ],
        "nomeDoProduto": "BAR ADEGA BALI - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438418680946d2d7d95.webp"
      },
      {
        "id": 184773,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO MULTIUSO HAVANA NEW - MADEIRADO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454384946809471e6813d.webp"
      },
      {
        "id": 184774,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO MULTIUSO HAVANA NEW - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543832068094670dd35a.webp"
      },
      {
        "id": 184775,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO MULTIUSO HAVANA NEW - ACACIA MADEIRADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543830668094662c495a.webp"
      },
      {
        "id": 184783,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO DUNA 2P 1G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438550680947560db40.webp"
      },
      {
        "id": 184784,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO DENVER 2P - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454385616809476140b17.webp"
      },
      {
        "id": 184785,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP MUNIQUE - OFF WHITE / CANELATO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438580680947749eafd.webp"
      },
      {
        "id": 184786,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP MUNIQUE - MADEIRADO REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745438710680947f6ca838.webp"
      },
      {
        "id": 184787,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP MUNIQUE - MADEIRADO / PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745438596680947845bfcc.webp"
      },
      {
        "id": 184791,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.20 2P 3G TP VAZADO - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438658680947c278afb.webp"
      },
      {
        "id": 184792,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.20 2P 3G TP VAZADO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438704680947f04310d.webp"
      },
      {
        "id": 184793,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.20 2P 3G - PRETO (TP VAZADO)",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438719680947ff4f2e5.webp"
      },
      {
        "id": 184794,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.20 2P 3G - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454387466809481a91e7f.webp"
      },
      {
        "id": 184795,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.20 2P 3G - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543876968094831c8ded.webp"
      },
      {
        "id": 184796,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.20 2P 3G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745439110680949868ef20.webp"
      },
      {
        "id": 184797,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.05 1P 1G - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543882568094869582bd.webp"
      },
      {
        "id": 184798,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.05 1P 1G - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454390346809493a01a03.webp"
      },
      {
        "id": 184799,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.05 1P 1G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-29/174596892168115f198bc4f.webp"
      },
      {
        "id": 184801,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 0.80 2P - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454385546809475ac6d0f.webp"
      },
      {
        "id": 184802,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 0.80 2P - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543856968094769524bb.webp"
      },
      {
        "id": 184803,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO CLARA PLUS 3P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438582680947768131d.webp"
      },
      {
        "id": 184804,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO CLARA PLUS 3P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454385916809477fa2558.webp"
      },
      {
        "id": 184805,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO CLARA PLUS 3P 2G - ATACAMA/BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438636680947ac20d1f.webp"
      },
      {
        "id": 184806,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO 3 PTS 1 GAV. - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543880768094857c49f6.webp"
      },
      {
        "id": 184808,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO 1.40 P/ COOKTOP 5 BOCAS - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745439210680949ea71059.webp"
      },
      {
        "id": 184809,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO 1.40 P/ COOKTOP 5 BOCAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745439030680949366448e.webp"
      },
      {
        "id": 184810,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO 1,20 3 GAVETAS 2 PTS RUSTICO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454387956809484b21c27.webp"
      },
      {
        "id": 184811,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO 1,20 3 GAVETAS 2 PTS CANELATO BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454388606809488cc1d2b.webp"
      },
      {
        "id": 184812,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO 1,20 3 GAVETAS 2 PTS CANELATO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438872680948984e7c7.webp"
      },
      {
        "id": 184815,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "ARM. MULTIUSO 1.83 M - ATACAMA / OFF-WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438897680948b1c1c56.webp"
      },
      {
        "id": 184816,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "ARM. MULTIUSO 1.83 M - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438908680948bcdfa10.webp"
      },
      {
        "id": 184821,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "APARADOR BARI 1.00 MTS - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454197266808fdce6cea9.webp"
      },
      {
        "id": 186831,
        "categoria": [
          "Ventilador",
          "Ventilador"
        ],
        "nomeDoProduto": "VENTILADOR OSC COL TURBO 6P 40CM PR 220V PRE.",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454096406808d668e4374.webp"
      },
      {
        "id": 189510,
        "categoria": [
          "Climatização",
          "Climatizador"
        ],
        "nomeDoProduto": "CLIMATIZADOR 16 LITROS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/17461894646814bc98c8705.webp"
      },
      {
        "id": 189511,
        "categoria": [
          "Climatização",
          "Climatizador"
        ],
        "nomeDoProduto": "CLIMATIZADOR 35 LITROS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/17461894866814bcaed5659.webp"
      },
      {
        "id": 189512,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJUNTO DE MESA VALENÇA C/ JUNCO - 0.75 X 0.75",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/174604176868127ba8451c1.webp"
      },
      {
        "id": 189513,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJUNTO DE MESA VALENÇA C/ JUNCO - 1.40 X 0.75",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/174604154968127acdcfbca.webp"
      },
      {
        "id": 189514,
        "categoria": [
          "Cozinha",
          "Conjunto Tubolar"
        ],
        "nomeDoProduto": "CONJUNTO DE MESA VALENÇA C/ JUNCO - 1.20 X 0.75",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/174604176868127ba84d32e.webp"
      },
      {
        "id": 189518,
        "categoria": [
          "Sala",
          "Painés"
        ],
        "nomeDoProduto": "HOME ROYAL - CEDRO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/17461927876814c9935bb53.webp"
      },
      {
        "id": 189519,
        "categoria": [
          "Sala",
          "Paineis"
        ],
        "nomeDoProduto": "HOME ROYAL - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/17461927986814c99e6bbe5.webp"
      },
      {
        "id": 189520,
        "categoria": [
          "Cama",
          "Cabeceira de Cama"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA LUCCA - FENDI / FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/17461938296814cda579a64.webp"
      },
      {
        "id": 189521,
        "categoria": [
          "Cama",
          "Cabeceira de Cama"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA LUCCA - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/17461938006814cd8852c60.webp"
      },
      {
        "id": 189537,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. SÃO PAULO 6 PTS ATUALLE - MAD. / REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-05/17464499726818b634466d5.webp"
      },
      {
        "id": 189577,
        "categoria": [
          "Cozinha",
          "Cooktop"
        ],
        "nomeDoProduto": "COOKTOP GOLD 5 BOCAS AUTOMATICO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-06/1746540182681a16966af3f.webp"
      },
      {
        "id": 189578,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CANADA 6 PORTAS 8 GAV. CIN. / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-06/1746540502681a17d6f2927.webp"
      },
      {
        "id": 189580,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ITA 6 PORTAS - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-06/1746541045681a19f51d06c.webp"
      },
      {
        "id": 189581,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ITA 6 PORTAS - HAVANA RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-06/1746541154681a1a62690f1.webp"
      },
      {
        "id": 189582,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. CAPELLA 4 PTS 3 GAV. - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-06/1746541398681a1b560039a.webp"
      },
      {
        "id": 189592,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.9 MTS C/ PORTA COPO - BEGE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-27/1745779548680e7b5cbae1d.webp"
      },
      {
        "id": 189593,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS C/3 MODULOS 2.9 MTS C/  COPO - AZUL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-07/1746638444681b966c9c6be.webp"
      },
      {
        "id": 189594,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFAD ZEUS C/3 MODULOS 2.9 MTS C/  COPO - MARROM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-07/1746638444681b966caea18.webp"
      },
      {
        "id": 189601,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO MORFEU 2.90 MTS - MARROM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-09/1746811655681e3b07c325d.webp"
      },
      {
        "id": 189602,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO MORF 2.90 MTS - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-09/1746811698681e3b322bfc5.webp"
      },
      {
        "id": 189603,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO MORFEU 2.90 MTS - BEGE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-09/1746811862681e3bd6e2adc.webp"
      },
      {
        "id": 192300,
        "categoria": [
          "Cozinha",
          "Forno Elétrico"
        ],
        "nomeDoProduto": "FORNO ELETRICO BEST 48 LITROS C/ ROTISSEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-11/174701283068214cdeee833.webp"
      },
      {
        "id": 192301,
        "categoria": [
          "Cozinha",
          "Forno Elétrico"
        ],
        "nomeDoProduto": "FORNO ELETRICO BEST 60 LITROS C/ ROTISSEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-11/174701283868214ce6b37e0.webp"
      },
      {
        "id": 192302,
        "categoria": [
          "Cadeiras Avulsas",
          "Cadeiras"
        ],
        "nomeDoProduto": "CADEIRA EAMES - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-11/174701341568214f27e3398.webp"
      },
      {
        "id": 202885,
        "categoria": [
          "Lavadoras",
          "Tanquinho"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 10 KG - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745495784680a26e8001bb.webp"
      },
      {
        "id": 202886,
        "categoria": [
          "Lavadoras",
          "Tanquinho"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 10 KG - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745495768680a26d84c011.webp"
      },
      {
        "id": 202887,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 6 PORTAS - 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-13/17471697666823b1e60f772.webp"
      },
      {
        "id": 202888,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 4 PORTAS - 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-13/17471700236823b2e79fa41.webp"
      },
      {
        "id": 202889,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 4 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-13/17471700736823b319ce6a3.webp"
      },
      {
        "id": 202890,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 4 PTS - ACACIA REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-13/17471702596823b3d3b92a4.webp"
      },
      {
        "id": 202891,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ATHENAS ATUALLE - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/174722537568248b1f0465f.webp"
      },
      {
        "id": 202892,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ATHENAS ATUALLE - CANELATO \\ OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/174722538168248b25bd78d.webp"
      },
      {
        "id": 202894,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO RECIFE CINAMOMO \\ BRANCO",
        "imagem": ""
      },
      {
        "id": 202895,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO REIS 6 PORTAS - CINAMOMO \\ BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/17472332406824a9d8c4c27.webp"
      },
      {
        "id": 202896,
        "categoria": [
          "Cama",
          "Cabeceira de Cama"
        ],
        "nomeDoProduto": "CABECEIRA ANA 1.60 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/17472424666824cde26ca3d.webp"
      },
      {
        "id": 202897,
        "categoria": [
          "Sala",
          "Painel"
        ],
        "nomeDoProduto": "PAINEL CRISTAL CHUMBO SAVANA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/17472427166824cedc8d6ea.webp"
      },
      {
        "id": 203000,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ARIES 6 PORTAS - CINAMOMO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-19/1747690439682ba3c726aad.webp"
      },
      {
        "id": 203001,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ANJOS C/ 9 GAVETAS E ESPELHO - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-19/1747690560682ba44029e19.webp"
      },
      {
        "id": 203002,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GALAXY 3 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-19/1747690906682ba59a60754.webp"
      },
      {
        "id": 203004,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO PELMEX MAX SPORT 1.38 X 1.88 X 0.22",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-19/1747696230682bba661e54a.webp"
      },
      {
        "id": 204439,
        "categoria": [
          "Cama",
          "Camas"
        ],
        "nomeDoProduto": "BASE + COLCHÃO MERCURIO SOLTEIRAO 1.08 X1.88 X0.56",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-26/17482923846834d3209610b.webp"
      },
      {
        "id": 204440,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "COLCHÃO MERCURIO SOLTEIRAO 1.08 X1.88 X 0.56",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-26/17482924456834d35d981d6.webp"
      },
      {
        "id": 204457,
        "categoria": [
          "Cozinha",
          "Paneleiro"
        ],
        "nomeDoProduto": "PANELEIRO CLARA PLUS - ATACAMA / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-27/17483701886836030c91362.webp"
      },
      {
        "id": 204458,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT 910 C/ PORTA DE CORRER - ATACAMA / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-27/1748370401683603e1e46cc.webp"
      },
      {
        "id": 204459,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT 910 C/ PORTA DE CORRER - ATACAMA / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-27/1748370457683604194fcc0.webp"
      },
      {
        "id": 204500,
        "categoria": [
          "Cama",
          "Cabeceira de Cama"
        ],
        "nomeDoProduto": "CABECEIRA ANA SOLTEIRO 0.88 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-29/17485451376838ae7162a67.webp"
      },
      {
        "id": 205019,
        "categoria": [
          "Cozinha",
          "Tampo"
        ],
        "nomeDoProduto": "TAMPO EM GRANITO - 0.75 X 0.75 M",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-30/1746040786681277d25df53.webp"
      },
      {
        "id": 205020,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TRIPLEX GOLD - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855847680fa5677577e.webp"
      },
      {
        "id": 205021,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TRIPLEX GOLD - FREIJÓ",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855848680fa568d8064.webp"
      },
      {
        "id": 205022,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GLIESE 6 PORTAS - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855919680fa5afe96ae.webp"
      },
      {
        "id": 205023,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CANCUN 7P 2G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-02/1748893182683dfdfe96c52.webp"
      },
      {
        "id": 205024,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CANCUN 7P 2G - AREIA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855946680fa5ca1dcf8.webp"
      },
      {
        "id": 205025,
        "categoria": [
          "Lavadoras",
          "Tanquinho"
        ],
        "nomeDoProduto": "Lavadora Libell 10 kg - Branco",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855773680fa51d156d3.webp"
      },
      {
        "id": 205026,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA MADRI C/ ARDOSIA - CRAQUEADO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855684680fa4c452f84.webp"
      },
      {
        "id": 205027,
        "categoria": [
          "Cozinha",
          "Fruteiras"
        ],
        "nomeDoProduto": "FRUTEIRA MADRI C/ ARDOSIA - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855685680fa4c55a967.webp"
      },
      {
        "id": 205028,
        "categoria": [
          "Escritório",
          "Estantes"
        ],
        "nomeDoProduto": "ESTANTE ALTA AÇO 5 PRATELEIRAS - FREIJO / PRETO FOSCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855748680fa504b3985.webp"
      },
      {
        "id": 205029,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "CONJUNTO MESA ATALANTA - OFF",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855705680fa4d9563f8.webp"
      },
      {
        "id": 205030,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "CONJUNTO MESA ATALANTA - NATURE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855706680fa4da9f8ec.webp"
      },
      {
        "id": 205031,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "CONJUNTO MESA ATALANTA - CINZA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855707680fa4dbcbe03.webp"
      },
      {
        "id": 205032,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA / ROUPEIRO MEGA 2 PTS - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855835680fa55b4cdee.webp"
      },
      {
        "id": 205033,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA / ROUPEIRO MEGA 2 PTS - JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855836680fa55cb8832.webp"
      },
      {
        "id": 205034,
        "categoria": [
          "Cama",
          "Beliche"
        ],
        "nomeDoProduto": "BELICHE TORNEADA PALMO 80 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843885680f76ad892d0.webp"
      },
      {
        "id": 205035,
        "categoria": [
          "Cama",
          "Beliche"
        ],
        "nomeDoProduto": "BELICHE GOLD & SILVER",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843887680f76af7a009.webp"
      },
      {
        "id": 205036,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO 1.40 P/ COOKTOP 5 BOCAS - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855626680fa48a03383.webp"
      },
      {
        "id": 205037,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GLIESE 6 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855970680fa5e24d344.webp"
      },
      {
        "id": 205038,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT GOLDEN 6 PORTAS - FREIJO / SOFT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748642447683a2a8f3d88f.webp"
      },
      {
        "id": 205039,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT GOLDEN 6 PORTAS - FREIJO / GRIS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748642454683a2a9643776.webp"
      },
      {
        "id": 205040,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT GENOVA KIT´S PARANA 6 PORTAS - NOGUEIRA / OFF RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748642607683a2b2f03593.webp"
      },
      {
        "id": 205041,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT CORE 8 PORTAS - FREIJO / NERO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748642748683a2bbc011da.webp"
      },
      {
        "id": 205042,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT CORE 8 PORTAS - FREIJO / VANILLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748642753683a2bc1c51f7.webp"
      },
      {
        "id": 205043,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT APOLO 6 PORTAS - FREIJO / SOFT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748643014683a2cc60f517.webp"
      },
      {
        "id": 205044,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT APOLO 6 PORTAS - FREIJO / GRIS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748643020683a2ccccbc10.webp"
      },
      {
        "id": 205045,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA FERRARA PLUS - FREIJO / SUPREMO RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748643183683a2d6f6d29f.webp"
      },
      {
        "id": 205046,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA FERRARA PLUS - FREIJO / SOFT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748643193683a2d7905889.webp"
      },
      {
        "id": 205109,
        "categoria": [
          "Sala",
          "Rack com Painel"
        ],
        "nomeDoProduto": "RACK C/ PAINEL LEGACY - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-04/17490732616840bd6d619ab.webp"
      },
      {
        "id": 205311,
        "categoria": [
          "Cozinha",
          "Fritadeiras"
        ],
        "nomeDoProduto": "SKD AIR FRYER AMVOX ARF 1222 OVEN 12L",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-11/174965054168498c6dcb4b9.webp"
      },
      {
        "id": 205312,
        "categoria": [
          "Cozinha",
          "Fritadeiras"
        ],
        "nomeDoProduto": "AIR FRYER AMVOX ARF 1245 OVEN 4.5L",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-11/174965064068498cd07e7db.webp"
      },
      {
        "id": 205390,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO RETRATIL ROMEU SOLAR LUXO 2.30 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-13/1749818078684c1adec32e8.webp"
      },
      {
        "id": 205404,
        "categoria": [
          "Acessórios",
          "Kits"
        ],
        "nomeDoProduto": "KIT DE PÉS ALTO - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461336046813e2644249f.webp"
      },
      {
        "id": 205405,
        "categoria": [
          "Acessórios",
          "Kits"
        ],
        "nomeDoProduto": "KIT DE PÉS ALTO - PRATA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461337886813e31c29e11.webp"
      },
      {
        "id": 205406,
        "categoria": [
          "Acessórios",
          "Kits"
        ],
        "nomeDoProduto": "KIT DE PÉS ALTO - MARROM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461343616813e55966911.webp"
      },
      {
        "id": 205407,
        "categoria": [
          "Acessórios",
          "Kits"
        ],
        "nomeDoProduto": "KIT DE PÉS ALTO - IMBUIA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461344236813e5970fcad.webp"
      },
      {
        "id": 205408,
        "categoria": [
          "Acessórios",
          "Kits"
        ],
        "nomeDoProduto": "KIT DE PÉS ALTO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461340666813e43211783.webp"
      },
      {
        "id": 205409,
        "categoria": [
          "Banheiro",
          "Espelho"
        ],
        "nomeDoProduto": "CAIXA C/ 2 ESPELHOS 0.60 x 0.20",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-01/17461321906813dcde283ad.webp"
      },
      {
        "id": 205544,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA ALEXIA PRIME - CINAMOMO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-17/17501943786851d8caa22ba.webp"
      },
      {
        "id": 205545,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA ALEXIA PRIME - CINAMOMO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-17/17501944056851d8e50b5fc.webp"
      },
      {
        "id": 205616,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT GOLDEN 6 PORTAS - NOGUEIRA / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-23/1750685110685955b644993.webp"
      },
      {
        "id": 205617,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT GENOVA KIT´S PARANA 6 PORTAS - FREIJO / SUPREMO RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-23/175068558868595794bfb29.webp"
      },
      {
        "id": 205618,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "COZINHA FERRARA PLUS - FREIJO / SOFT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-23/175068576368595843d1437.webp"
      },
      {
        "id": 205619,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT STYLE - FREIJO / VANILLA RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-23/17506860866859598689c49.webp"
      },
      {
        "id": 205620,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT STYLE - FREIJO / SUPREMO RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-23/17506860436859595bd17bf.webp"
      },
      {
        "id": 205744,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO MORF. 2.00 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-25/1750859125685bfd7560a64.webp"
      },
      {
        "id": 205745,
        "categoria": [
          "Sala",
          "Sofá"
        ],
        "nomeDoProduto": "ESTOFADO QUARTZO 2.50 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-25/1750859572685bff346dde4.webp"
      },
      {
        "id": 206019,
        "categoria": [
          "Sala",
          "Bar"
        ],
        "nomeDoProduto": "CANTINHO DO CAFÉ FLOW - OFF / FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111152685fd5f058b44.webp"
      },
      {
        "id": 206020,
        "categoria": [
          "Sala",
          "Bar"
        ],
        "nomeDoProduto": "CANTINHO DO CAFÉ FLOW - PRETO / FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111164685fd5fc77e0a.webp"
      },
      {
        "id": 206021,
        "categoria": [
          "Sala de Estar",
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET 4 PORTAS FLOW - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111392685fd6e0b2b22.webp"
      },
      {
        "id": 206022,
        "categoria": [
          "Sala de Estar",
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET 4 PORTAS FLOW - OFF WWHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111407685fd6ef313a1.webp"
      },
      {
        "id": 206023,
        "categoria": [
          "Sala de Estar",
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET 4 PORTAS FLOW - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111424685fd700bf163.webp"
      },
      {
        "id": 206024,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "APARADOR ADEGA NEW ODIN - OFF WHITE / FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111688685fd8089afb9.webp"
      },
      {
        "id": 206025,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "APARADOR ZEUS - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111873685fd8c1775ae.webp"
      },
      {
        "id": 206026,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "APARADOR ZEUS - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111886685fd8ce50bef.webp"
      },
      {
        "id": 206027,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "JOGO DE MESA LIZ - FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751112291685fda63235f7.webp"
      },
      {
        "id": 206028,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "JOGO DE MESA LIZ - OFF/ FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751112303685fda6f308ec.webp"
      },
      {
        "id": 206029,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "JOGO DE MESA LIZ - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751112313685fda79bd724.webp"
      },
      {
        "id": 206030,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "JOGO DE MESA LIZ - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751112321685fda81d3a10.webp"
      },
      {
        "id": 206031,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "TOUCADOR ORGANIC - FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114471685fe2e72c25d.webp"
      },
      {
        "id": 206032,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "TOUCADOR ORGANIC - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114479685fe2ef9c5e0.webp"
      },
      {
        "id": 206033,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA LUXO NEW - FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114527685fe31f56439.webp"
      },
      {
        "id": 206034,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA LUXO NEW - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114537685fe32978852.webp"
      },
      {
        "id": 206035,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA LUXO NEW - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114546685fe3324177e.webp"
      },
      {
        "id": 206036,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA RETRO ROMA - FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114589685fe35d04366.webp"
      },
      {
        "id": 206037,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA RETRO ROMA - FREIJÓ / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114597685fe3650102d.webp"
      },
      {
        "id": 206038,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA RETRO ROMA - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114608685fe370e5b58.webp"
      },
      {
        "id": 206039,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA RETRO ROMA - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114618685fe37a7c8a6.webp"
      },
      {
        "id": 206040,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA 2 GAVETAS - FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114650685fe39acb83e.webp"
      },
      {
        "id": 206041,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA 2 GAVETAS - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114658685fe3a228308.webp"
      },
      {
        "id": 206042,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA 2 GAVETAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114669685fe3addedfe.webp"
      },
      {
        "id": 206043,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "MESA DE COMPUTADOR PRATICA - FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114690685fe3c20a492.webp"
      },
      {
        "id": 206044,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "MESA DE COMPUTADOR PRATICA - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114696685fe3c83feb0.webp"
      },
      {
        "id": 206045,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "MESA DE COMPUTADOR PRATICA - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114704685fe3d0102e9.webp"
      },
      {
        "id": 206046,
        "categoria": [
          "Cama",
          "Mesas de Cabeceira"
        ],
        "nomeDoProduto": "TOUCADOR ORGANIC - OFF WHITE / FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114502685fe306dc92d.webp"
      },
      {
        "id": 206050,
        "categoria": [
          "Sala",
          "Aparador"
        ],
        "nomeDoProduto": "APARADOR ADEGA NEW ODIN - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-03/17515702046866d71c1c5a4.webp"
      },
      {
        "id": 206074,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TOLEDO 6 PORTAS - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855850680fa56a3abf8.webp"
      },
      {
        "id": 206075,
        "categoria": [
          "Roupeiros",
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ANTARES 6 PORTAS PRIME - CINAMOMO / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855955680fa5d3e6b29.webp"
      },
      {
        "id": 206076,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-02/175145960168652711cc7ef.webp"
      },
      {
        "id": 206077,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855725680fa4ed510f0.webp"
      },
      {
        "id": 206078,
        "categoria": [
          "Roupeiros",
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - ACACIA / REFLECTA BRILHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-02/17514596206865272416541.webp"
      },
      {
        "id": 206079,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT COZINHA GENOVA MADINE - RIPADO / ARENAS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855700680fa4d4814e4.webp"
      },
      {
        "id": 206080,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT COZINHA GENOVA MADINE - GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855701680fa4d5d9dd8.webp"
      },
      {
        "id": 206081,
        "categoria": [
          "Cama",
          "Colchões"
        ],
        "nomeDoProduto": "Colchão Supreme D-20 C/ 12 cm 0.88 x 1.88",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855566680fa44eb550a.webp"
      },
      {
        "id": 206082,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.20 GOLD 2P 3G TAMPO VAZADO - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855613680fa47d607f8.webp"
      },
      {
        "id": 206083,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.20 GOLD 2P 3G TAMPO VAZADO - JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855614680fa47e39dd1.webp"
      },
      {
        "id": 206084,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.20 GOLD 2P 3G TAMPO VAZADO - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855615680fa47f0352a.webp"
      },
      {
        "id": 206085,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.05 GOLD 1P 1G - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855618680fa482de02c.webp"
      },
      {
        "id": 206086,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.05 GOLD 1P 1G - JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855619680fa483bf0a0.webp"
      },
      {
        "id": 206087,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.05 GOLD 1P 1G - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855620680fa48497792.webp"
      },
      {
        "id": 206088,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 0.80 GOLD 2P - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855621680fa48561dd3.webp"
      },
      {
        "id": 206089,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO 1.40 P/ COOKTOP 5 BOCAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855626680fa48ab4731.webp"
      },
      {
        "id": 206090,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO 1.40 P/ COOKTOP 5 BOCAS - JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855627680fa48b78e66.webp"
      },
      {
        "id": 206091,
        "categoria": [
          "Cozinha",
          "Cooktop"
        ],
        "nomeDoProduto": "FOGÃO COOKTOP GOLD 5 BOCAS - SIMPLES",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855635680fa493c48d0.webp"
      },
      {
        "id": 206092,
        "categoria": [
          "Quarto",
          "Penteadeira"
        ],
        "nomeDoProduto": "PENTEADEIRA GOLD C/ LED - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855844680fa564caa0c.webp"
      },
      {
        "id": 206093,
        "categoria": [
          "Quarto",
          "Penteadeira"
        ],
        "nomeDoProduto": "PENTEADEIRA GOLD C/ LED - ROSE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855846680fa566174e8.webp"
      },
      {
        "id": 206094,
        "categoria": [
          "Cozinha",
          "Cozinhas"
        ],
        "nomeDoProduto": "COZINHA RAVENA PLUS C/ CRISTALEIRA - FREIJO / OFF ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749733661684ad11d9c356.webp"
      },
      {
        "id": 206095,
        "categoria": [
          "Cozinha",
          "Cozinhas"
        ],
        "nomeDoProduto": "COZINHA COMPACTA OLINDA  + BLC FREIJO / RIPADO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749734179684ad323e1aca.webp"
      },
      {
        "id": 206096,
        "categoria": [
          "Cozinha",
          "Cozinhas"
        ],
        "nomeDoProduto": "COZINHA COMPACTA OLINDA  + BLC FREIJO / RIPADO / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749734258684ad3722d1ae.webp"
      },
      {
        "id": 206097,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO OLINDA FREIJO / RIPADO / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749734450684ad43257f5a.webp"
      },
      {
        "id": 206098,
        "categoria": [
          "Cozinha",
          "Balcões"
        ],
        "nomeDoProduto": "BALCÃO OLINDA FREIJO / RIPADO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749734461684ad43d5684b.webp"
      },
      {
        "id": 206099,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT NURIA FREIJÓ / RIPADO / OFF ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749739294684ae71e04910.webp"
      },
      {
        "id": 206100,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT NURIA FREIJÓ / RIPADO / GRAFITE ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749739302684ae726cf3ce.webp"
      },
      {
        "id": 206101,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT PILAR 11 PTS - FREIJO / OFF ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749739673684ae89923584.webp"
      },
      {
        "id": 206102,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT PILAR 11 PTS - FREIJO / RIPADO / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749739680684ae8a0e0096.webp"
      },
      {
        "id": 206103,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT NEW LIVIA - FREIJO / RIPADO / OFF ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749740057684aea196d01b.webp"
      },
      {
        "id": 206104,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT NEW LIVIA - FREIJO / OFF ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749740067684aea236453e.webp"
      },
      {
        "id": 206105,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA MALIBU NEW - NATURE 3D",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751118610685ff312ee34c.webp"
      },
      {
        "id": 206106,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA MALIBU NEW - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751118679685ff357de095.webp"
      },
      {
        "id": 206107,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA MALIBU NEW - BCO / LILAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751118759685ff3a74eef6.webp"
      },
      {
        "id": 206280,
        "categoria": [
          "Acessórios",
          "Kits"
        ],
        "nomeDoProduto": "PES PLASTICOS PARA ROUPEIRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843868680f769c8dada.webp"
      },
      {
        "id": 206281,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA VICENZA - ACACIA / REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516382716867e0ff88381.webp"
      },
      {
        "id": 206282,
        "categoria": [
          "Quarto",
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA VICENZA - CANELATO / NATURA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516382556867e0efbc57a.webp"
      },
      {
        "id": 206283,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "MESA DE ESCRITÓRIO 3 GAVETAS - ACACIA / REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516391636867e47b93c53.webp"
      },
      {
        "id": 206284,
        "categoria": [
          "Mesa Escritório",
          "Escrivaninha"
        ],
        "nomeDoProduto": "MESA DE ESCRITÓRIO 3 GAVETAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516391746867e4860538b.webp"
      },
      {
        "id": 206285,
        "categoria": [
          "Cozinha",
          "Kits de Cozinha"
        ],
        "nomeDoProduto": "KIT CEARA 4 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-08/1751983140686d242423868.webp"
      },
      {
        "id": 206286,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA SALINAS TOP - CANELATO / PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-09/1752090922686ec92ad092d.webp"
      },
      {
        "id": 206287,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA SALINAS TOP - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-09/1752090931686ec9330602b.webp"
      },
      {
        "id": 206288,
        "categoria": [
          "Cozinha",
          "Cozinhas Compactas"
        ],
        "nomeDoProduto": "COZINHA SALINAS TOP - CANELATO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-09/1752090940686ec93cb5d6f.webp"
      }
    ];

  categoriaFiltrada: string | null = null;

  atualizarCategoriaFiltrada(categoria: string) {
    this.categoriaFiltrada = categoria;
  }

  rolarParaProdutos() {
    if (this.secaoProdutos) {
      this.secaoProdutos.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
