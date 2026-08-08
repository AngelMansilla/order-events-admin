import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { API_BASE_URL } from '../../../core/config/api.tokens';
import { CreateOrderRequest, Order } from '../models/order.model';
import { OrderService } from './order.service';

describe('OrderService', () => {
  let service: OrderService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: API_BASE_URL, useValue: '/api' }
      ]
    });

    service = TestBed.inject(OrderService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should create an order', async () => {
    const request: CreateOrderRequest = {
      customerId: '5c2dfd16-1996-4de5-b1aa-4c172a59cdd2'
    };

    const expectedOrder: Order = {
      id: 'c92f0db1-e2f8-4f77-b240-e1b9af01230a',
      customerId: request.customerId,
      status: 'CREATED',
      createdAt: '2026-08-07T10:30:00Z'
    };

    const responsePromise = firstValueFrom(service.createOrder(request));

    const httpRequest = httpTesting.expectOne('/api/orders');

    expect(httpRequest.request.method).toBe('POST');
    expect(httpRequest.request.body).toEqual(request);

    httpRequest.flush(expectedOrder);

    expect(await responsePromise).toEqual(expectedOrder);
  });

  it('should get an order by id', async () => {
    const expectedOrder: Order = {
      id: 'c92f0db1-e2f8-4f77-b240-e1b9af01230a',
      customerId: '5c2dfd16-1996-4de5-b1aa-4c172a59cdd2',
      status: 'CREATED',
      createdAt: '2026-08-07T10:30:00Z'
    };

    const responsePromise = firstValueFrom(
      service.getOrderById(expectedOrder.id)
    );

    const httpRequest = httpTesting.expectOne(
      `/api/orders/${expectedOrder.id}`
    );

    expect(httpRequest.request.method).toBe('GET');

    httpRequest.flush(expectedOrder);

    expect(await responsePromise).toEqual(expectedOrder);
  });
});
