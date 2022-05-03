import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { ShoppingItem } from '../shopping-item';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit{
  shoppingItems$: Observable<ShoppingItem[]> | undefined;
  
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.shoppingItems$ = this.shoppingService.getItems();
  }

  clearList() {
    this.shoppingService.clearList().subscribe(
      response => console.log(response),
      err => console.log(err)
    );
    this.getList();
  }
}