import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})

export class ShippingComponent {

  constructor(private cartService: CartService,
    private shoppingService: ShoppingListService) { }

  shippingCosts = this.cartService.getShippingPrices();
  //shoppingItems = this.shoppingService.getItemsFlat();

}