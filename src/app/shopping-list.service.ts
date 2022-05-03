import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoppingItem } from './shopping-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  items: ShoppingItem[] = [];
  constructor(private http: HttpClient) { }

  getItems(): Observable<ShoppingItem[]> {
    return this.http.get<ShoppingItem[]>('http://192.168.1.23:8095/products');
  }

  sendList() {
    return this.http.post('http://192.168.1.23:8095/sendMail',"");
  }


  clearList() {
    return this.http.post('http://localhost:8095/clearList',"");
  }

}
