import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-app',
  templateUrl: './pizza-app.component.html',
  styleUrls: ['./pizza-app.component.scss'],
})
export class PizzaAppComponent implements OnInit {
  pizzas: any[] = []; // pizzas property here

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    // Fetch pizza data from the backend when the component initializes
    this.pizzaService.getPizzas().subscribe((data) => {
      this.pizzas = data;
    });
  }
}
