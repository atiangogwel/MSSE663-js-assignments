// pizza.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private apiUrl = 'http://localhost:3000/api/pizzas';

  constructor(private http: HttpClient) {}

  getPizzas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
