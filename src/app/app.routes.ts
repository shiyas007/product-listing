import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'product-list', pathMatch: 'full' },
    { path: 'product-list', loadChildren: () => import('./components/product-list/product-list.module').then(m => m.ProductListModule) },
];
