import { Component } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Router } from '@angular/router';

interface Pizza {
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.scss']
})
export class AddPizzaComponent {
  pizza: Pizza = {
    name: '',
    description: '',
    price: 0
  };

  constructor(private pizzaService: PizzaService, private router: Router) {}

  addPizza() {
    // Call the PizzaService to add the pizza
    this.pizzaService.addPizza(this.pizza).subscribe(
      (response) => {
        console.log('Pizza added successfully:', response);
        // Reset the form
        this.pizza = {
          name: '',
          description: '',
          price: 0
        };
        alert('Pizza added successfully');
        this.router.navigate(['/pizzas']);
      },
      (error) => {
        alert('Error! Somthing went wrong');
        console.error('Error adding pizza:', error);
      }
    );
  }
  goBackToPizzas() {
    this.router.navigate(['/pizzas']);
  }
}