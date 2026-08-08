export type OrderStatus = 'CREATED' | 'CONFIRMED' | 'CANCELLED';

export interface CreateOrderRequest {
  readonly customerId: string;
}

export interface Order {
  readonly id: string;
  readonly customerId: string;
  readonly status: OrderStatus;
  readonly createdAt: string;
}
