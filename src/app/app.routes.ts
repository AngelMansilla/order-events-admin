import { Routes } from '@angular/router';
import { DashboardPageComponent } from './features/dashboard/dashboard-page.component';
import { CreateOrderPageComponent } from './features/orders/create-order-page.component';
import { SearchOrderPageComponent } from './features/orders/search-order-page.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Dashboard | Order Events Admin',
    component: DashboardPageComponent
  },
  {
    path: 'orders/new',
    title: 'Create Order | Order Events Admin',
    component: CreateOrderPageComponent
  },
  {
    path: 'orders/search',
    title: 'Search Order | Order Events Admin',
    component: SearchOrderPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
