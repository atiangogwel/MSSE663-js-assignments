import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private apiUrl = 'http://localhost:3001/api/pizzas'; // Updated to fetch pizzas

  constructor(private http: HttpClient) {}

  // Fetch pizza data from the backend
  getPizzas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
