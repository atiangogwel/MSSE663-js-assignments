import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-app',
  templateUrl: './pizza-app.component.html',
  styleUrls: ['./pizza-app.component.scss']
})
export class PizzaAppComponent implements OnInit {
  pizzas: any[] = [];
  filteredPizzas: any[] = [];
  searchQuery: string = '';

  constructor(private pizzaService: PizzaService) {}

  ngOnInit() {
    // Initial GET request to fetch all pizzas from the database
    this.pizzaService.getPizzas().subscribe((data: any) => {
      this.pizzas = data;
      this.filteredPizzas = data; // Initialize filteredPizzas with all pizzas
    });
  }

  filterPizzasByName() {
    this.filteredPizzas = this.pizzas.filter((pizza) =>
      pizza.name && pizza.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  deletePizza(pizzaId: number) {
    if (pizzaId !== undefined) {
      // Call the deletePizza method from the service
      this.pizzaService.deletePizza(pizzaId).subscribe(() => {
        // If the deletion is successful, remove the pizza from the local array
        this.pizzas = this.pizzas.filter((pizza) => pizza.id !== pizzaId);
        this.filteredPizzas = this.filteredPizzas.filter((pizza) => pizza.id !== pizzaId);
      });
    } else {
      console.error('Invalid pizza ID:', pizzaId);
    }
  }
}
