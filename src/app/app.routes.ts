import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { ProdutoDetalhes } from './components/reutilizaveis/produto/produto-detalhes';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'produtos/:idProduto', component: ProdutoDetalhes },
];