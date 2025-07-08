import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Produto } from './components/reutilizaveis/produto/produto';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'produtos/:idProduto', component: Produto },
];