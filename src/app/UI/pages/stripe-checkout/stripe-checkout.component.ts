import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

declare var Stripe: any;

@Component({
  selector: 'app-stripe-checkout',
  templateUrl: './stripe-checkout.component.html',
  styleUrls: ['./stripe-checkout.component.css'],
})
export class StripeCheckoutComponent {
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
  stripe: any;

  constructor(private http: HttpClient) {
    this.stripe = Stripe('pk_test_51ObikEGT2Rq02fmKeeIZTWr0kILcXD4B7vXRRABhY93DiAF0a4jXTKLHrOqc4yT1dH5bbNUphiwdt3cOID03b6nr006SKdUlFU');
  }

  async submitPayment() {
    const { token, error } = await this.stripe.createToken('card', {
      number: this.cardNumber,
      exp_month: this.expiryMonth,
      exp_year: this.expiryYear,
      cvc: this.cvc
    });

    if (error) {
      console.error(error);
      return;
    }

    this.http.post('/charge', { source: token.id, amount: 100, currency: 'USD' })
      .subscribe((res: any) => {
        console.log(res);
        alert('Payment Successful');
      }, err => {
        console.error(err);
        alert('Payment Failed');
      });
  }
}
