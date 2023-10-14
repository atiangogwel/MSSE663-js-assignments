import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizza-app',
  templateUrl: './pizza-app.component.html',
  styleUrls: ['./pizza-app.component.scss']
})
export class PizzaAppComponent implements OnInit {
  pizzas: any[] = [];
  filteredPizzas: any[] = [];
  searchQuery: string = '';

  constructor(private pizzaService: PizzaService, private router: Router) {} 

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe((data: any) => {
      this.pizzas = data;
      this.filteredPizzas = data; 
    });
  }

  filterPizzasByName() {
    this.filteredPizzas = this.pizzas.filter((pizza) =>
      pizza.name && pizza.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  deletePizza(pizzaId: string) {
    this.pizzaService.deletePizza(pizzaId).subscribe(
      () => {
        console.log('Pizza deleted successfully');
        alert('Pizza deleted successfully');
        const index = this.pizzas.findIndex((pizza) => pizza._id === pizzaId);
        if (index !== -1) {
          this.pizzas.splice(index, 1);
          this.filteredPizzas = [...this.pizzas]; 
        }
        this.router.navigate(['/pizzas']); 
      },
      (error) => {
        console.error('Error deleting pizza:', error);
      }
    );
  }
  editPizza(pizzaId: string) {
    this.router.navigate(['/edit-pizza', pizzaId]);
  }
  reservePizza(pizza: any) {
    
    this.pizzaService.reservePizza(pizza._id).subscribe(
      () => {
        console.log('Pizza Reserved');
        alert('Pizza Reserved successfully');
        pizza.reserved = true; 
  
        // Refresh the list of pizzas
        this.pizzaService.getPizzas().subscribe((data: any) => {
          this.pizzas = data;
          this.filteredPizzas = data;
        });
  
        this.router.navigate(['/pizzas']);
      },
      (error) => {
        console.log('Error');
        alert('Error');
        this.router.navigate(['/pizzas']);
      }
    );
  }
  showReservedPizzas = false;

  toggleReservedPizzas() {
    this.showReservedPizzas = !this.showReservedPizzas;
  
    // If you switch to reserved pizzas, filter the list
    if (this.showReservedPizzas) {
      this.filteredPizzas = this.pizzas.filter((pizza) => pizza.reserved);
    } else {
      // If you switch back to all pizzas, show all pizzas
      this.filteredPizzas = [...this.pizzas];
    }
  }
  undoReservePizza(pizza: any) {
    this.pizzaService.unreservePizza(pizza._id).subscribe(
      (response) => {
        console.log('Pizza Unreserved');
        alert('Pizza Unreserved successfully');
        // Refresh the list of pizzas to reflect the change
        this.pizzaService.getPizzas().subscribe((data: any) => {
          this.pizzas = data;
          this.filteredPizzas = data;
        });
      },
      (error) => {
        console.error('Error');
        alert('Error');
        this.router.navigate(['/pizzas']);
      }
    );
  }
  
  
}
