import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private apiUrl = 'http://localhost:3001/pizzas'; // Replace with your Node.js server URL

  constructor(private http: HttpClient) {}

  getPizzas() {
    return this.http.get(this.apiUrl);
  }

  addPizza(pizza: any) {
    return this.http.post(`${this.apiUrl}/pizzas`, pizza);
  }
}
