import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  template: `
    <section class="page-card">
      <p class="page-kicker">Dashboard</p>
      <h2>Order Events Admin</h2>
      <p>
        This admin will manage order REST operations, starting with creating orders
        and searching for existing orders by id.
      </p>
    </section>
  `,
  styles: [
    `
      .page-card {
        border: 1px solid #e2e8f0;
        border-radius: 0.875rem;
        padding: 1.5rem;
        background: #ffffff;
        box-shadow: 0 10px 25px rgb(15 23 42 / 0.06);
      }

      .page-kicker {
        margin: 0 0 0.5rem;
        color: #0369a1;
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      h2 {
        margin: 0 0 0.75rem;
        font-size: 1.5rem;
      }

      p:last-child {
        margin-bottom: 0;
        color: #475569;
        line-height: 1.6;
      }
    `
  ]
})
export class DashboardPageComponent {}
