import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

// import { Contact } from '../../models/contactmessages/contact.model';
// import { Backendpoints } from '../../models/backendpoints/backendpoints.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  // styleUrls: ['./contact.component.css']
})
export class ContactFormComponent {
  items;
  checkoutForm;

  constructor(
    // private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    // this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    // this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
