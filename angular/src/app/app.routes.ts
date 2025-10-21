import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Product } from './components/product/product';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: Home
    },
    {   path: 'product/:id',
        loadComponent: () => Product
    }
];
