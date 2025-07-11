import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { ProdutoDetalhes } from './components/pages/home/sections/lista-produtos/produto-detalhes/produto-detalhes';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'produtos/:id', component: ProdutoDetalhes },
];