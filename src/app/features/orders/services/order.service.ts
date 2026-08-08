import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_BASE_URL } from '../../../core/config/api.tokens';
import { CreateOrderRequest, Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly http = inject(HttpClient);
  private readonly apiBaseUrl = inject(API_BASE_URL);
  private readonly ordersUrl = `${this.apiBaseUrl}/orders`;

  createOrder(request: CreateOrderRequest): Observable<Order> {
    return this.http.post<Order>(this.ordersUrl, request);
  }

  getOrderById(id: string): Observable<Order> {
    return this.http.get<Order>(
      `${this.ordersUrl}/${encodeURIComponent(id)}`
    );
  }
}
