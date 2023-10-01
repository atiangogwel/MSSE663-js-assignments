import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private apiUrl = 'http://localhost:3001/pizzas';

  constructor(private http: HttpClient) {}

  getPizzas() {
    return this.http.get(this.apiUrl);
  }

  addPizza(pizza: any) {
    return this.http.post(this.apiUrl, pizza);
  }

  deletePizza(pizzaId: number) {
    const deleteUrl = `${this.apiUrl}/${pizzaId}`;
    return this.http.delete(deleteUrl);
  }
}
