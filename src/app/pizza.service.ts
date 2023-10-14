import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private apiUrl = 'http://localhost:3001/pizzas';

  constructor(private http: HttpClient) {}

  getPizzas() {
    return this.http.get(this.apiUrl);
  }
//get by id
  getPizzaById(pizzaId: string): Observable<any> {
    const url = `${this.apiUrl}/${pizzaId}`;
    return this.http.get(url);
  }

  addPizza(pizza: any) {
    return this.http.post(this.apiUrl, pizza);
  }
  

  deletePizza(pizzaId: string): Observable<any> {
    const url = `${this.apiUrl}/${pizzaId}`;
    return this.http.delete(url);
  }
  updatePizza(pizzaId: string, pizzaData: any): Observable<any> {
    const url = `${this.apiUrl}/${pizzaId}`;
    return this.http.put(url, pizzaData);
  }
  reservePizza(pizzaId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${pizzaId}/reserve`, {});
  }
  unreservePizza(pizzaId: string) {
    return this.http.post(`${this.apiUrl}/${pizzaId}/unreserve`, {});
  }
  
  
  
}
